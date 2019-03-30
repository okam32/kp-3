$(document).ready(function () {
    $('.slide1 img:gt(0)').hide();
    setInterval(function () {
        $('.slide1 :first-child').fadeOut(0).next('img').fadeIn(2000).end().appendTo('.slide1');
    }, 4000);
});
$(document).ready(function () {
    $('.menudropdownl').hide();
    $('#showpopup').hide();
    $('#showpopup1').hide();
    $(".a1menu").click(function () {
        $("#showpopup").fadeIn(500);
    });
    $(".thei_form_login_close").click(function () {
        $('#showpopup').hide();
    });
    $(".a2menu,#sub2").click(function () {
        $('#showpopup').hide();
        $("#showpopup1").fadeIn(500);
    });
    $(".thei_form_login_close1").click(function () {
        $('#showpopup1').hide();
    });
    $(".menudrop").click(function () {
        $('.menudropdownl').toggle(300);
    });

});