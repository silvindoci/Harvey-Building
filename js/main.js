//menu
$(".toggle ").click(function() {
    $(this).toggleClass('on');
    $(".toggle-menu ").toggleClass("active-toggle-menu");
});







//header bar menu 
$('.headerbar').on('click', '.search-toggle', function(e) {
    var selector = $(this).data('selector');

    $(selector).toggleClass('show').find('.search-input').focus();
    $(this).toggleClass('active-search-toggle');

    e.preventDefault();
});

(function($) { //header search toggle on responsive device

    $('#toggle-search').click(function() {
        $('#search-form, #toggle-search').toggleClass('open');
        return false;
    });

    $('#search-form input[type=submit]').click(function() {
        $('#search-form, #toggle-search').toggleClass('open');
        return true;
    });

    $(document).click(function(event) {
        var target = $(event.target);

        if (!target.is('#toggle-search') && !target.closest('#search-form').size()) {
            $('#search-form, #toggle-search').removeClass('open');
        }
    });

})(jQuery);






//red click tabs
$('.restab .tap-p').click(function(event) {
    $(this).addClass('active1');
    $(this).siblings().removeClass('active1');
});





//Flex slider
$(function() {
    SyntaxHighlighter.all();
});
$(window).load(function() {
    $('.flexslider').flexslider({
        animation: "slide",
        controlNav: "thumbnails",
        start: function(slider) {
            $('body').removeClass('loading');
        }
    });
});