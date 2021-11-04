$(document).ready(function(){
    $('[data-modal=product_one]').on('click', function() {
        $('.overlay, #one').fadeIn();
    });
    $('[data-modal=product_two]').on('click', function() {
        $('.overlay, #two').fadeIn();
    });
    $('[data-modal=product_three]').on('click', function() {
        $('.overlay, #three').fadeIn();
    });
    $('.modal__close').on('click', function() {
        $('.overlay, #one, #two, #three').fadeOut();
    })
})