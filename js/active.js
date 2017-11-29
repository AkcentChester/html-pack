/*********************************************************************************

	Template Name: Template full name  
	Template URI: https://themeforest.net/user/
	Description: Template description
	Author: author name
	Author URI: author uri
	Version: 1.0

	Note: This is active js. Plugins activation code here.

**********************************************************************************/


/*===============================================================================
			[ INDEX ]
=================================================================================

	Scroll Up Activation
	Banner Slider Active
	Fake Loader

=================================================================================
			[ END INDEX ]
================================================================================*/

(function($) {
	'use strict';

	
	/*============ Scroll Up Activation ============*/
	$.scrollUp({
	    scrollText: '<i class="fa fa-angle-up"></i>',
	    easingType: 'linear',
	    scrollSpeed: 900,
	    animation: 'slide'
	});




	/*============ Fake Loader ============*/
	$('.fakeloader').fakeLoader({
	    timeToHide:1200,
	    bgColor:'#000000',
	    spinner:'spinner2'
	});



	
	/*============ Banner Slider Active ============*/
	$('.banner-slider-active').slick();


})(jQuery);
