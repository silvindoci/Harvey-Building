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
$(".tab_content").hide();
$(".tab_content:first").show();


$("ul.tabs li").click(function() {
    $(".tab_content").hide();
    var activeTab = $(this).attr("rel");
    $("#" + activeTab).fadeIn();

    $("ul.tabs li").removeClass("active");
    $(this).addClass("active");

    $(".tab_drawer_heading").removeClass("d_active");
    $(".tab_drawer_heading[rel^='" + activeTab + "']").addClass("d_active");

});
$(".tab_container").css("min-height", function() {
    return $(".tabs").outerHeight() + 50;
});

$(".tab_drawer_heading").click(function() {

    $(".tab_content").hide();
    var d_activeTab = $(this).attr("rel");
    $("#" + d_activeTab).fadeIn();

    $(".tab_drawer_heading").removeClass("d_active");
    $(this).addClass("d_active");

    $("ul.tabs li").removeClass("active");
    $("ul.tabs li[rel^='" + d_activeTab + "']").addClass("active");
});



//Flex slider
$('.flexslider').flexslider({
    animation: "slide",
    controlNav: "thumbnails",
});

//