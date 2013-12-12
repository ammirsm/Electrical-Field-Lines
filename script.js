$(document).ready(function () {
    var myHeight;
 
    function init() {
        myHeight = $(window).height();
    	$("body > div").css("height", myHeight + "px");
    	$("#container > div").css("height", myHeight + "px");
    	console.log(myHeight + "px");    
        myWidth = $(window).width();
    }
    init();
    $(window).resize(function () {
        init();
    });
	init();    
	//$( window ).scroll(function() {
		//console.log(event.scroll());
		// var scrollTop = parseInt($(window).scrollTop());
		// headertop= scrollTop/288; /*The persent of the header top opacity*/
		// subject= scrollTop/400;
		// scrollme= scrollTop/600;
		// footerd= scrollTop/myHeight;
		// animation= 1-footerd;
		// $( "footer" ).css( "opacity", 1-footerd);
		// $( "div#main" ).css( "opacity", 1-footerd);
		// $( "div#two" ).css( "left", (animation*100)+'%').fadeIn( "slow" );
		// if(scrollTop>=myHeight){
			// $( "div#headermenu" ).css( "opacity", footerd ).fadeIn( "slow" );
		// }
		// else{
			// $( "div#headermenu" ).css( "opacity", 0 ).fadeIn( "slow" );
		// }
		// /*$("div#two").animate({left:(animation*myWidth)+'px'});*/
		// /*$( "ul#menu" ).css( "opacity", typedscroll );
		// $( "div#two" ).css( "opacity", x/100).fadeIn( "slow" );*/
		// /**/
// 
	  	// /*$( "div#headermenu" ).css( "display", "block" ).fadeIn( "slow" );
	  	// $( "div#main" ).css( "display", "none" ).fadeOut( "slow" );
	  	// $( "body" ).css( "overflow-y", "scroll" ).fadeIn( "slow" );
// 	  	
	  	// $( "div#two" ).css( "top", "0%" );*/
	  	//});
  	$(window).mousewheel(function(event, delta, deltaX, deltaY){
        console.log(event.delta,event.deltaX,event.deltaY);
        return false;
    })
});