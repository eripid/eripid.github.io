(function($) {
// Check Navigator
if(navigator.userAgent.indexOf("MSIE", "Firefox", "Safari", "Chrome", "Opera")===-1||navigator.appVersion.indexOf('Trident') > -1){
    // Scroll event check
    $(window).scroll(function (event) {
        var scroll = $(window).scrollTop();
        // Activate sticky for IE if scrolltop is more than 20px
        if ( scroll > 20) {
            $('.container-1').addClass( "top-nav-container", "top-nav-bar" );
        }else{
            $('.container-1').removeClass( "top-nav-container", "top-nav-bar" );
        }
    });
}
})( jQuery );