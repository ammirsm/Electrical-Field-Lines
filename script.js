x=0;
$( window ).scroll(function() {
  
  //$( "div#main" ).css( "display", "block" ).fadeOut( "slow" );
  
  x+=1;
  
  if(x==13){
  	$( "div#headermenu" ).css( "display", "block" ).fadeIn( "slow" );
  	$( "body" ).css( "overflow-y", "hidden" ).fadeOut( "slow" );
  	$( "div#main" ).css( "display", "none" ).fadeOut( "slow" );
  	$( "body" ).css( "overflow-y", "scroll" ).fadeIn( "slow" );
  	$( "div#two" ).css( "top", "0%" ).fadeIn( "slow" );
  	$( "div#two" ).css( "opacity", "1" ).fadeIn( "slow" );
  }
});