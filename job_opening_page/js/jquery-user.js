
let didScroll;
let lastScrollTop = 0;
let delta = 5;
let navHeight = $('nav').outerHeight();

$(window).scroll(function(event){didScroll = true; });

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    
   
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    if (st > lastScrollTop && st > navHeight){
        $('nav').removeClass('nav-down').addClass('nav-up');
    } else { 
        if(st + $(window).height() < $(document).height()) {
             $('nav').removeClass('nav-up').addClass('nav-down'); }
    }
    
    lastScrollTop = st;
}
