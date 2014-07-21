
require.config({
	urlArgs: "noCache=" + (new Date).getTime(),
	baseUrl: CB.admin_assets_url+'/js/',
	paths: {
		'jquery': 'lib/jquery-1.11.0.min',
		'underscore': 'lib/underscore.min',
		'fast-class': 'lib/fast-class.min',
		'angular': 'lib/angular-1.3.0/angular.min',
		// plugins
		'bootstrap': 'plugins/bootstrap/bootstrap.min',
		'tinymce': 'plugins/tinymce/tinymce.min',
		// angular ui
		'ui-utils': 'lib/angular-ui/ui-utils/ui-utils.min',
		'ui-bootstrap': 'lib/angular-ui/ui-bootstrap/ui-bootstrap-tpls-0.11.0',
		'ui-tinymce': 'lib/angular-ui/ui-tinymce/ui-tinymce',
		'ui-sortable': 'lib/angular-ui/ui-sortable/ui-sortable',
		'plupload': 'plugins/plupload-2.1.1/plupload.full.min',

		'spin':  'plugins/spin.min',
		'ladda': 'plugins/ladda.min'

		// "Page" specific js scripts...
	},
	shim: {
		'angular': {
			exports: 'angular'
		},
		'ui-utils': {
			deps: ['angular'],
			exports: 'ui-utils'
		},
		'ui-bootstrap': {
			deps: ['angular'],
			exports: 'ui-bootstrap'
		},
		'ui-tinymce': {
			deps: ['tinymce', 'angular'],
			exports: 'ui-tinymce'
		},
		'ui-sortable': {
			deps: ['angular'],
			exports: 'ui-sortable'
		},
		'bootstrap': {
			deps: ['jquery'],
			exports: 'bootstrap'
		},
		'spin': {
			exports: 'spin'
		},
		'ladda': {
			deps: ['spin'],
			exports: 'ladda'
		}
	}
});


require([  
	'jquery', 
	'underscore',
	'bootstrap', 
	'angular',
	'app/gallery-page/app'
],function ($) {

	console.log('require - scripts loaded ');
	
	var $appContainer = $('#app-container');
	angular.bootstrap($appContainer, ['app']);
})