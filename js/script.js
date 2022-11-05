$(document).ready(function(){
    $('a.nav-link').click(function(){
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top + 'px'
        },{
            duration: 300,
            easing: 'swing'
        });
        return false;
    });

    $('.nav-link').click(function(event) {
        $('.burger, .menu').removeClass('active');
        $('body').removeClass('lock');
    });

    $('.burger').click(function(event) {
        $('.burger, .menu').toggleClass('active');
        $('body').toggleClass('lock');
    });

    $('.stokc-slick').slick({
        
      });
})