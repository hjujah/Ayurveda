<div id="app-container" class="wrap" ng-controller="postController">
	
	<div class="sub-header">
		<!--<toaster-container toaster-options=""></toaster-container>-->
	</div>

	<div class="app-main" >
		
		<input type="hidden" id="hidden_mod" name="hidden_mod" value="{{$mod}}">
		<input type="hidden" id="hidden_post_id" name="hidden_post_id" value="{{$post_id}}">

		<div class="container-fluid">
			<div class="row">

				<div class="col-lg-7 col-md-8 col-sm-9">

					<div post-title="GalleryPage.form.activeContent.title" 
						 post-name="GalleryPage.form.activeContent.name" 
						 post-model-name="GalleryPage.model.activeContent.name" 
						 post-url="GalleryPage.form.activeContent.url" 
						 base-url="baseUrl" 
						 parent-url="GalleryPage.form.activeContent.parentUrl" 
						 is-custom="GalleryPage.form.activeContent.isUrlCustom" 
						 placeholder="Gallery Page Title">
					</div>

					<div class="contentdiv">
						<div class="form-group">
							<textarea class="form-control" ui-tinymce="tinymceOptions" ng-model="GalleryPage.form.activeContent.content" rows="6"></textarea>
						</div>
					</div>

					<div class="panel panel-default">
						<div class="panel-heading">Meta Info</div>
						<div class="panel-body form-horizontal">
							<div class="form-group">
								<label for="meta-title" class="col-sm-2 control-label">Meta title:</label>
								<div class="col-sm-10">
									<input type="text" class="form-control" id="meta-title" placeholder="Meta Title" ng-model="GalleryPage.form.activeContent.meta.meta_title">
								</div>
							</div>
							<div class="form-group">
								<label for="meta-title" class="col-sm-2 control-label">Meta description:</label>
								<div class="col-sm-10">
									<input type="text" class="form-control" id="meta-title" placeholder="Meta Description" ng-model="GalleryPage.form.activeContent.meta.meta_description">
								</div>
							</div>
							<div class="form-group">
								<label for="meta-title" class="col-sm-2 control-label">Og title:</label>
								<div class="col-sm-10">
									<input type="text" class="form-control" id="meta-title" placeholder="Og Title" ng-model="GalleryPage.form.activeContent.meta.og_title">
								</div>
							</div>
							<div class="form-group">
								<label for="meta-title" class="col-sm-2 control-label">Og description:</label>
								<div class="col-sm-10">
									<input type="text" class="form-control" id="meta-title" placeholder="Og Description" ng-model="GalleryPage.form.activeContent.meta.og_description">
								</div>
							</div>
						</div>
					</div>

					<div gallerymanager model="GalleryPage.Gallery"></div>

				</div><!-- .col-sm-7 -->

				<div class="col-lg-5 col-md-4">
					
					<div class="row">
						

						<div class="col-lg-6 col-md-12">
							<div post-status="GalleryPage.form.activeContent.status" post-created-at="GalleryPage.form.activeContent.created_at" post-model-status="GalleryPage.model.activeContent.status" available-statuses="availableStatuses" model="GalleryPage"></div>

							<div featured-image model="GalleryPage.FeaturedImage"></div>
						</div>

					</div>

				</div>

			</div>
		</div>

	</div>


	<div class="app-sidebar">

		<ul id="language-menu" class="side-menu">
			<li class="side-menu-item" ng-repeat="lang in languages" ng-class="{active: lang == activeLanguage }" >
				<a href="#" class="" ng-click="setActiveLanguage(lang)">
					<span class="flag flag-[%lang.code%]" alt="[%lang.description%]"></span> 
					<span>[%lang.description%] - [%lang.content_status%]</span> 
					<span class="icon glyphicon-ok pull-right"></span>
				</a>
			</li>
		</ul>

		<!-- @TO-DO
		<div class="separator"></div>

		<ul class="side-menu ps">
			<li class="side-menu-item active">
				<a href="#" class=""><span class="glyphicon glyphicon-align-left"></span> Content</a>
			</li>
			<li class="side-menu-item">
				<a href="#" class=""><span class="glyphicon glyphicon-picture"></span> Gallery</a>
			</li>
			<li class="side-menu-item">
				<a href="#" class=""><span class="glyphicon glyphicon-search"></span> SEO</a>
			</li>
		</ul>
		-->

		<div class="separator"></div>

		<div class="form-group ps">
			<label>Parent Page:</label>
			<select class="form-control" ng-model="GalleryPage.form.parent_id" ng-options="parent.id as parent.title for parent in parents | availableParents :GalleryPage :activeLanguage">
				<option value="">none</option>
			</select>
		</div>

	</div>
</div>