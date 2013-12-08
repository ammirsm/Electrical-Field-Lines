$(document).ready(function () {
    var myHeight;
 
    function init() {
        myHeight = $(window).height();
    }
    init();
    $(window).resize(function () {
        init();
    });
	    
	x=0;
	$( window ).scroll(function() {
	  
	  	
	      var scrollTop = parseInt($(window).scrollTop());
	      var scrolled = myHeight - scrollTop;
	      var typedscroll = scrolled/myHeight;
	      x= (scrollTop/myHeight)*100;
	      x=Math.round (x);
	      y=100-x;
	      
	      $( "footer" ).css( "opacity", scrolled/(myHeight-200) );
	      $( "ul#menu" ).css( "opacity", typedscroll-0.75 );
	  	/*$( "div#headermenu" ).css( "display", "block" ).fadeIn( "slow" );
	  	$( "div#main" ).css( "display", "none" ).fadeOut( "slow" );
	  	$( "body" ).css( "overflow-y", "scroll" ).fadeIn( "slow" );
	  	
	  	$( "div#two" ).css( "top", "0%" );*/
	  	if (scrollTop>288){
	  	$( "div#headermenu" ).css( "opacity", typedscroll).fadeIn( "slow" );
	  	$( "div#two" ).css( "opacity", x/100).fadeIn( "slow" );
	  	  $("div#two").animate({left:y+'%'});		}
	  
	});
});