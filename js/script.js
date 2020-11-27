$(document).ready(function(){
   

    $(`.hamburger`).on(`click`, function() {
        $(`.hamburger`).toggleClass(`hamburger_active`),
        $(`.menu`).toggleClass(`menu_active`)
    });

    $(`.menu_link`).on(`click`, function() {
        $(`.hamburger`).removeClass(`hamburger_active`),
        $(`.menu`).removeClass(`menu_active`)
    });


    //modal
    $(`[data-modal=order]`).on(`click`, function() { /* модальное окно заказа */
        $(`.overlay, #order`).fadeIn(`slow`)
    });
    /* работа крестика красного */
    $(`.modal__close`).on(`click`, function() {
        $(`.overlay,#about15, #about21, #thanks, #order`).fadeOut(`slow`)
    });
   

    

    $(`form`).submit(function(e) { 
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "smart.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            $(`#order`).fadeOut();
            $(`.overlay, #thanks`).fadeIn(`slow`);

            $(`form`).trigger(`reset`);
        });
        return false;
    });
     //smooth scroll and pageup

    $(window).scroll(function() {
        if($(this).scrollTop() > 1000) { /* появление кнопки вверх при прокрутке более 1000рх */
            $(`.pageup`).fadeIn();
        } else {
            $(`.pageup`).fadeOut();
        }
    });

    /* умное липкое меню */
    var header = $('.header'),
	scrollPrev = 0;

    $(window).scroll(function() {
        var scrolled = $(window).scrollTop();
    
        if ( scrolled > 100 && scrolled > scrollPrev ) {
            header.addClass('header_out');
        } else {
            header.removeClass('header_out');
        }
        scrollPrev = scrolled;
    });
    
     
    
     /* плавная перемотка к ссылкам */
    $("a[href^='#']").click(function(){
        var _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });
     /* ИЗ UDEMY */
     
});