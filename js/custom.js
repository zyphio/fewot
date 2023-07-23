// Java Scripts

// 导航栏滚动变透明

function checkScroll() {
    var navbaht = $('.navbar').height() * 2;
    if ($(window).scrollTop() > navbaht) {
        $('.navbar').addClass("scrolled");
    } else {
        $('.navbar').removeClass("scrolled");
    }
}

// 滚动、加载、改变尺寸执行

if ($('.navbar').length > 0) {
    $(window).on("scroll load resize", function () {
        checkScroll();
    });
}

// 导航栏-点击所有div自动折叠导航栏菜单

$('div').on('click', function () {
    $('.navbar-collapse').collapse('hide');
});

//平滑滚动到指定位置

$(function () {
    var navbaht = $('.navbar').height() * 2.4;
    $('.gotonews').click(function () {
        $("html, body").animate({
            scrollTop: $("#news").offset().top - navbaht
        }, 500);
    });
    $('.gotoservices').click(function () {
        $("html, body").animate({
            scrollTop: $("#services").offset().top - navbaht
        }, 500);
    });
    $('.gotoparadigm').click(function () {
        $("html, body").animate({
            scrollTop: $("#paradigm").offset().top - navbaht
        }, 500);
    });
    $('.gotoabout').click(function () {
        $("html, body").animate({
            scrollTop: $("#about").offset().top - navbaht
        }, 500);
    });
});

// 向下滚动大于192px时显示返回页首按钮

$(function () {
    var navbaht = $('.navbar').height() * 2;
    $(window).scroll(function () {
        if ($(window).scrollTop() > navbaht)
            $('div.goToTopButton').show();
        else
            $('div.goToTopButton').hide();
    });
});

// 点击600ms内滚动到页首

$('.goToTop').click(function () {
    $('html, body').animate({
        scrollTop: 0
    }, 600);
});

// 滚动自动收回菜单栏、隐藏放大图片

$(window).on("scroll", function () {
    $('.navbar-collapse').collapse('hide');
    $("#zoomPanel").hide();
});

// 图片缩放生效

$(".zoomActive").click(function () {
    currentSrc = $(this).attr("src");
    $("#fullImg").attr("src", currentSrc);
    $("#zoomPanel").show();
});

// 点击隐藏已放大的图片

$('#zoomPanel').click(function () {
    $("#zoomPanel").hide();
});

// 内容模态框点击显示并加载详情内容图片

$(".contentActive").click(function () {
    currentSrc = $(this).attr("contentSrc");
    $("#contentImg").attr("src", currentSrc);
});