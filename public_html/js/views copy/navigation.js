/*
Dock Navigation
Author: Filip Arneric
*/

define(['app', 
		'text!../../templates/hbs/navigation.hbs', 
		'views/blur', 
		'tweenmax', 
		'smartresize'
		], function(App, Template) {	
	
	//Navigation View
	App.Views.Navigation = App.Views.Blur.extend({
		el: '#navigation',
		template: Handlebars.compile(Template),
		animating: false,
		events: {
			'click .nav-button': 'toggleNav',
			'mouseover .linkHolder': 'moveHover',
		},
		
		moveHover: function(e){
			var self = this,
				target = $(e.currentTarget),
				index = target.index(),
				top = index * target.height(),
				slide = target.data("slide");
							
			
			self.changeBlured(slide, true);
						
			TweenMax.to($(".hover"), .3, { 
	  			y: top
	  		});				
		},
	
	    
	    setActiveNav: function(e){
		  	  var $selected = $('#menu .links').removeClass("activeItem").filter(function() {  return $(this).data("page") == App.pageName });
		  	  $selected.addClass("activeItem");
	    },
	    
	    renderTemplate: function(){
	    
	    	var self = this;
	    	//Define the collection  	
		  	App.Collections.navigation = Backbone.Collection.extend({
		        url: absurl + "/api/menu/" + App.options.locale
		    });
		    	                	      
		    self.collection = new App.Collections.navigation;
		    
		    return self.collection.fetch({
                reset: true,
                success: function() {
                    
                    var navigationData = self.collection.toJSON();
                    self.data = {};
                    self.data.desktop = navigationData[0];
                    
   		            //compile template
		            self.content = self.template({
		                data: self.data,
		                lang: App.options.locale
		            });
		            
		        	self.$el.html(self.content);   	
		        	self.afterRender();
		        	//self.openNav();
		        	                   
                }
            });

		    
	    },	
	   

	  	toggleNav: function(e, changePage, blur) {
	  		var self = this;
	  			target = $('.nav-button'),
	  			$container = self.$('#navigation-container'),
	  			op = target.hasClass("close-nav") ? 0 : 1;
	  		
	  		if(!self.animating){
	  			self.animating = true;
			  	target.toggleClass("close-nav");
			  	
		  		!blur && self.blurImage(200);
		  		
		  		$container.stop().fadeToggle(300, function(){
			  		self.animating = false;
		  		});
		  		 
		  		target.hasClass("close-nav") ? self.tlShowMenuLinks.play() : self.tlShowMenuLinks.reverse();
		  				
		  		self.opened = !self.opened;		
		  	  		
		  		if(target.hasClass("close-nav")){
		  			TweenMax.to($("#main"), .3, { opacity: 0 });
		  		}else{
			  		if(!changePage) {
			  			TweenMax.to($("#main"), .3, { opacity: 1 });
			  		} 
		  		}
		  		
	  		}	

	  	},
	  	
	  	beforeRender: function(){
		  	
	  	},
	  	
	  	afterRender: function(){
		  	var self = this;

			//show menu links animation		              
        	self.tlShowMenuLinks = new TimelineMax({
        		paused: true,
				onComplete: function(){
				}
			});
			
  			self.tlShowMenuLinks.staggerTo($(".linkHolder"), .4, {
  				y: 0, 
  				opacity:1
            }, .064);            

	  	},
	    	    
	    initialize: function(){
	    	var self = this;	
	    	/* self.afterRender(); */
	    	
	    	//self.render();
   		     					
	    }
	    
	});
	
});