// Globals
// var TEMPLATE_DIR = "src/coffee/views";
// var BLOG_URI = 'http://blog.cryndi.org/';

require.config({
	baseUrl: "app",
	paths: {
		'angular': '../lib/angular/angular.min',
		'uiRouter': '../lib/angular-ui-router/release/angular-ui-router.min',
		'reCaptcha': '../lib/angular-recaptcha/release/angular-recaptcha.min',
		'cs': '../lib/require-cs/cs',
		'coffee-script': '../lib/coffeescript/extras/coffee-script',
		'app': 'app.min',
	},
	shim: {
		'angular': { 'exports': 'angular' },
		'uiRouter': { 'deps': ['angular'] },
		'reCaptcha': ['angular']
	}
});

requirejs(['boot']);
