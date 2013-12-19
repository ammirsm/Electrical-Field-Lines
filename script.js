jQuery(document).ready(function () {
	jQuery("#container").css("top", "0");  
	jQuery("#quote_first").css("margin-left", "-3000px");  
    // Get the page sizes.
    init();
    jQuery(window).resize(function () {
        init();
    });
    // Change page number when mouse wheel move.
  	jQuery(window).mousewheel(function(event, delta, deltaX, deltaY){
    	i = getPageNumber();
    	// Select the page number.
        if(deltaX<0){
        	page (i+1);
        }
        else if (deltaX>0)
        {
        	page (i-1);
        }
        return false;
    });
	// Change page number when some keys are pressed.
	jQuery(window).keypress(function( event ) {
		switch(event.keyCode){
			case 40: // ArrowUp
			case 34: // PageUp
				page (getPageNumber()+1);
				break;
			case 38: // ArrowDown
			case 33: // PageDown
				page (getPageNumber()-1);
				break;
			case 35: //End
				page (getNumberOfPages()-1);
				break;
			case 36: //Home
				page (0);
				break; 
		}
	});
	
});

var myHeight;
function init() {
    // Get height and width.
    myHeight = jQuery(window).height();    
    myWidth = jQuery(window).width();
    
    // Set height on the page.
	jQuery("body > div").css("height", myHeight + "px");
	jQuery(".absolute").css("height", myHeight + "px");
	jQuery("#container > div").css("height", myHeight + "px");
	
}

var isPageChanging = false;
function page(pageNumber){
	// To prevent changing the page during the animation.
    var paged = getPageNumber();
    console.log(paged);
    if(paged==1){
    	jQuery("#topheader").css("opacity", "0");
    	console.log("sucked");  
    }
    else{
    	jQuery("#topheader").css("opacity", "1");
    }
	if(isPageChanging)
		return;
	
	// Limit page number.
	if(pageNumber < 0 || pageNumber >= getNumberOfPages())
		return;
	
	// Lock changing the page.
	isPageChanging = true;
	
	jQuery("#container").animate({"top": -1 * pageNumber * myHeight + "px"}, 300, "swing", function () {isPageChanging = false; onPageChangeEnd()});
	onPageChangeStart(pageNumber);
}

function onPageChangeStart(pageNumber)
{
    if(pageNumber > 0){
    	jQuery("#headermenu").animate({"opacity": "0.5"});
    }
    else{
    	jQuery("#headermenu").animate({"opacity": "0"});
    }
    if(pageNumber == 1){
    	jQuery("#quote_first").animate({"margin-left": "-462px"});
    }
    else if (pageNumber > 1){
    	jQuery("#quote_first").animate({"margin-left": "+"+"3000px"});
    }
    else if (pageNumber < 1){
    	jQuery("#quote_first").animate({"margin-left": "-"+"3000px"});
    }
    
}

function onPageChangeEnd()
{
	
}

function getPageNumber()
{
	// Get the page number.
	var i;
	b= parseInt(jQuery("#container").css("top"));
	i= Math.round((-1 * b/ myHeight));
	
	return i;
}

function getNumberOfPages(){
	// How many page are in our page.
	return jQuery("#container > div").length;
}

// var pagination;
// jQuery(document).ready(function () {
	// pagination = new Pagination();
	// pagination.onPageChangeStart = function(pageNumber)
	// {
	    // if(pageNumber > 0){
	    	// jQuery("#headermenu").animate({"opacity": "1"});
	    // }
	    // else{
	    	// jQuery("#headermenu").animate({"opacity": "0"});
	    // }
	// };
	// pagination.apply();
// });
