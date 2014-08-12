/*
Dock Load
Copyright Kitchen S.R.O. September 2013. 
Author: Filip Arneric
*/
require.config({
	urlArgs: "noCache=" + (new Date).getTime(),
    baseUrl: absurl+'/js/',
    waitSeconds: 120,
    dir: "../webapp-build",
    paths: {
        'jquery': 'vendor/jquery.min',
        'underscore': 'vendor/underscore',
        'backbone': 'vendor/backbone',
        'layoutmanager': 'vendor/backbone.layoutmanager',
        'handlebars': 'vendor/handlebars-1.3',
        'text': 'vendor/text',
        'async': 'vendor/async', 
        'noext': 'vendor/noext',
        "imagesLoaded": "libs/jquery.imagesloaded",
        'bootstrap': 'vendor/sass-bootstrap.min',
        'smartresize': 'libs/smartresize',
        'tweenmax': "libs/TweenMax.min",
        'gsap': "libs/jquery.gsap.min",        
        'imgLiquid' : 'libs/imgLiquid-min',
        'modernizr' : 'vendor/modernizr',
        'backstretch' : 'libs/jquery.backstretch.min',
        'nicescroll' : 'libs/jquery.nicescroll.min',
        'fittext' : 'libs/jquery.fittext',
        'fastclick': 'libs/fastclick',
        'pxloader': 'libs/pxloader/pxloader',
        'pxloadertags': 'libs/pxloader/pxloadertags',
        'pxloaderimage': 'libs/pxloader/pxloaderimage',
        'pxloadervideo': 'libs/pxloader/pxloadervideo',
        'stackblur': 'libs/StackBlur',
        'hoverDir': 'libs/jquery.hoverdir',
        'fastblur': 'libs/FastBlur'
    },
 
 
    shim: {
        bootstrap: {
            deps: ['jquery'],
            exports: 'Bootstrap'
        },
 
 		fastblur: {
            deps: ['jquery']
        },
 	
 		royal: {
            deps: ['jquery']
        },
 
 		hoverDir: {
            deps: ['jquery']
        },
 
 		gsap: {
            deps: ['jquery']
        },
 
        smartresize: {
            deps: ['jquery'],
            exports: 'Smartresize'
        },
 
  		datatables : {
            deps : ["jquery"]
        },

 	    fastclick: {
            deps: ['jquery']
        },
 	
        scaleRaphael: {
            deps: ['raphael']
        },
 
 		fittext: {
            deps: ['jquery']
        },
 	
 		backstretch: {
            deps: ['jquery']
        },
 
 		cssPlugin: {
            deps: ['tweenmax']
        },
 	
        imagesLoaded: {
            deps: ['jquery']
        },
 
		jqueryMigrate: {
            deps: ['jquery']
        },
        
        royal: {
            deps: ['jquery']
        },

        tweenmax: {
            deps: ['jquery']
        },
          
        imgLiquid: {
            deps: ['jquery']
        }
    }
});

require([ 'app', 'scripts', 'loadApp' ],function ( App ) {
	
})