//perent


$(".qaz_content").hide();
$(".qaz_content:first").show();


$("ul.qazs li").click(function() {
    $(".qaz_content").hide();
    var activeqaz = $(this).attr("rel");
    $("#" + activeqaz).fadeIn();

    $("ul.qazs li").removeClass("active");
    $(this).addClass("active");

    $(".qaz_drawer_heading").removeClass("d_active");
    $(".qaz_drawer_heading[rel^='" + activeqaz + "']").addClass("d_active");

});
$(".qaz_container").css("min-height", function() {
    return $(".qazs").outerHeight() + 50;
});

$(".qaz_drawer_heading").click(function() {

    $(".qaz_content").hide();
    var d_activeqaz = $(this).attr("rel");
    $("#" + d_activeqaz).fadeIn();

    $(".qaz_drawer_heading").removeClass("d_active");
    $(this).addClass("d_active");

    $("ul.qazs li").removeClass("active");
    $("ul.qazs li[rel^='" + d_activeqaz + "']").addClass("active");
});
















//child 1

$(".wsx_content").hide();
$(".wsx_content:first").show();


$("ul.wsxs li").click(function() {
    $(".wsx_content").hide();
    var activewsx = $(this).attr("rel");
    $("#" + activewsx).fadeIn();

    $("ul.wsxs li").removeClass("active");
    $(this).addClass("active");

    $(".wsx_drawer_heading").removeClass("d_active");
    $(".wsx_drawer_heading[rel^='" + activewsx + "']").addClass("d_active");

});
$(".wsx_container").css("min-height", function() {
    return $(".wsxs").outerHeight() + 50;
});

$(".wsx_drawer_heading").click(function() {

    $(".wsx_content").hide();
    var d_activewsx = $(this).attr("rel");
    $("#" + d_activewsx).fadeIn();

    $(".wsx_drawer_heading").removeClass("d_active");
    $(this).addClass("d_active");

    $("ul.wsxs li").removeClass("active");
    $("ul.wsxs li[rel^='" + d_activewsx + "']").addClass("active");
});












//child2
$(".edc_content").hide();
$(".edc_content:first").show();


$("ul.edcs li").click(function() {
    $(".edc_content").hide();
    var activeedc = $(this).attr("rel");
    $("#" + activeedc).fadeIn();

    $("ul.edcs li").removeClass("active");
    $(this).addClass("active");

    $(".edc_drawer_heading").removeClass("d_active");
    $(".edc_drawer_heading[rel^='" + activeedc + "']").addClass("d_active");

});
$(".edc_container").css("min-height", function() {
    return $(".edcs").outerHeight() + 50;
});

$(".edc_drawer_heading").click(function() {

    $(".edc_content").hide();
    var d_activeedc = $(this).attr("rel");
    $("#" + d_activeedc).fadeIn();

    $(".edc_drawer_heading").removeClass("d_active");
    $(this).addClass("d_active");

    $("ul.edcs li").removeClass("active");
    $("ul.edcs li[rel^='" + d_activeedc + "']").addClass("active");
});















//child3
$(".rfv_content").hide();
$(".rfv_content:first").show();


$("ul.rfvs li").click(function() {
    $(".rfv_content").hide();
    var activerfv = $(this).attr("rel");
    $("#" + activerfv).fadeIn();

    $("ul.rfvs li").removeClass("active");
    $(this).addClass("active");

    $(".rfv_drawer_heading").removeClass("d_active");
    $(".rfv_drawer_heading[rel^='" + activerfv + "']").addClass("d_active");

});
$(".rfv_container").css("min-height", function() {
    return $(".rfvs").outerHeight() + 50;
});

$(".rfv_drawer_heading").click(function() {

    $(".rfv_content").hide();
    var d_activerfv = $(this).attr("rel");
    $("#" + d_activerfv).fadeIn();

    $(".rfv_drawer_heading").removeClass("d_active");
    $(this).addClass("d_active");

    $("ul.rfvs li").removeClass("active");
    $("ul.rfvs li[rel^='" + d_activerfv + "']").addClass("active");
});