/*********************************************************************************

	Template Name: Template full name  
	Template URI: https://themeforest.net/user/
	Description: Template description
	Author: author name
	Author URI: author uri
	Version: 1.0

	Note: This is plugins js. Common plugins include here.

**********************************************************************************/


/*===============================================================================
			[ INDEX ]
=================================================================================

	Avoid Console

=================================================================================
			[ END INDEX ]
================================================================================*/


/*====== Avoid Console ======*/
(function() {
	var method;
	var noop = function () {};
	var methods = [
		'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
		'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
		'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
		'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
	];
	var length = methods.length;
	var console = (window.console = window.console || {});

	while (length--) {
		method = methods[length];

		// Only stub undefined methods.
		if (!console[method]) {
			console[method] = noop;
		}
	}
}());

// Place any jQuery/helper plugins in here.
