/**
 * Implementation of the class Pagination.
 * This class can make pages that would be changed using mousewheel and keys.
 * @author: <a href="mailto: amir.saiedmehr@gmail.com">Amir Hossein Saeid Mehr</a>
 * @date: Dec 12th 2013
 */
var Pagination = Class.create({
	/**
	 * An event called when a page is about to change and you can assign a function to it.
	 * @param pageNumber: The number of the page that is to be shown.
	 */
	initialize: function () {
		jQuery("#container").css("top", 0);
	},
	
	/**
	 * An event called when a page is about to change and you can assign a function to it.
	 * @param pageNumber: The number of the page that is to be shown.
	 */
	onPageChangeStart: function (pageNumber) {},
	
	/**
	 * An event called when a page is has just changed and you can assign a function to it.
	 */
	onPageChangeEnd: function () {},
	
	/**
	 * @return: The number of the page that is displayed.
	 */
	getPageNumber: function () {
		// Get the page number.
		var j;
		b= parseInt(jQuery("#container").css("top"));
		j= Math.round((-1 * b/ this._myHeight));
		
		return j;
	},
	
	/** 
	 * @return: The number of pages.
	 */
	getNumberOfPages: function(){
		// How many page are in our page.
		return jQuery("#container > div").length;
	},	
	
	/**
	 * Applies the pagination to the page.
	 */
	apply: function ()
	{
	    // Get the page sizes.
	    this._init();
	    jQuery(window).resize(function () {
	        this._init();
	    });
	    
	    // Change page number when mouse wheel move.
	  	jQuery(window).mousewheel(this, function(event, delta, deltaX, deltaY){
	    	i = event.data.getPageNumber();
	    	
	    	// Select the page number.
	        if(deltaX<0){
	        	event.data._page(i + 1);
	        }
	        else if (deltaX > 0)
	        {
	        	event.data._page(i - 1);
	        }
	        
	        return false;
	    });
		
		// Change page number when some keys are pressed.
		jQuery(window).keypress(function(event) {
			switch(event.keyCode){
				case 40: // ArrowUp
				case 34: // PageUp
					pagination._page (pagination.getPageNumber()+1);
					break;
				case 38: // ArrowDown
				case 33: // PageDown
					pagination._page (pagination.getPageNumber()-1);
					break;
				case 35: //End
					pagination._page (pagination.getNumberOfPages()-1);
					break;
				case 36: //Home
					pagination._page (0);
					break; 
			}
		});
	},
	
	
	// ----------------------------------------------------
	// Don't Use The _Functions :@ :@ :| -_- ^_^ 
	// Private:
	_myHeight: 0,
	_isPageChanging: false,
	_init: function () {
		
	    // Get height and width.
	    this._myHeight = jQuery(window).height();
	        
	    // Set height on the page.
		jQuery("body > div").css("height", this._myHeight + "px");
		jQuery("#container > div").css("height", this._myHeight + "px");
	},
	_page: function (pageNumber){
		// To prevent changing the page during the animation.
		if(this._isPageChanging)
			return;
		
		// Limit page number.
		if(pageNumber < 0 || pageNumber >= this.getNumberOfPages())
			return;
		
		// Lock changing the page.
		this._isPageChanging = true;
		
		console.log(-1 * pageNumber * this._myHeight + "px");
		jQuery("#container").animate({"top": -1 * pageNumber * this._myHeight + "px"}, 300, "swing", function () {pagination._isPageChanging = false; pagination.onPageChangeEnd()});
		this.onPageChangeStart(pageNumber);
	},
});
