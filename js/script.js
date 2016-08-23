$('.scroll').on('click', function(e){
    var id = $(this).attr('href');
    $('html, body').animate({
        scrollTop:$(id).offset().top - 45
    },'slow');
    e.preventDefault();
});

$(window).scroll(function() {
    if ($(this).scrollTop() > 1){
        $('nav').addClass("visible");
    }
    else{
        $('nav').removeClass("visible");
    }
});
