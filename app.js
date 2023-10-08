//plays on scroll

$(window).scroll(function(){
    var wScroll = $(this).scrollTop();
    if(wScroll > $('#myVideo').offset().top - ($(window).height() / 1.2)) {
        $('#myVideo').get(0).play()
    }
});