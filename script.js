$(document).ready(function () {
    // Get the page sizes.
    init();
    $(window).resize(function () {
        init();
    });
    
    // Change page number when mouse wheel move.
  	$(window).mousewheel(function(event, delta, deltaX, deltaY){
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
});

var myHeight;
function init() {
    // Get height and width.
    myHeight = $(window).height();    
    myWidth = $(window).width();
    
    // Set height on the page.
	$("body > div").css("height", myHeight + "px");
	$("#container > div").css("height", myHeight + "px");
	
}

var isPageChanging = false;
function page(pageNumber){
	// To prevent changing the page during the animation.
	if(isPageChanging)
		return;
	
	// Limit page number.
	if(pageNumber < 0 || pageNumber >= $("#container > div").length)
		return;
	
	// Lock changing the page.
	isPageChanging = true;
	
	$("#container").animate({"top": -1 * pageNumber * myHeight + "px"}, 300, "swing", function () {isPageChanging = false; onPageChangeEnd()});
	onPageChangeStart(pageNumber);
}

function onPageChangeStart(pageNumber)
{
    if(pageNumber > 0){
    	$("#headermenu").animate({"opacity": "1"});
    }
    else{
    	$("#headermenu").animate({"opacity": "0"});
    }
}

function onPageChangeEnd(pageNumber)
{
	
}

function getPageNumber()
{
	// Get the page number.
	var i;
	b= parseInt($("#container").css("top"));
	i= Math.round((-1 * b/ myHeight));
	
	return i;
}