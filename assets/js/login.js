// :: 5.0 SMOOTH SCROLLING ACTIVE CODE
var scrollLink = $('.scroll');
scrollLink.on('click', function(e) {
    e.preventDefault();
    $('body,html').animate({
        scrollTop: $(this.hash).offset().top
    }, 1000);
});