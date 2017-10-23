
$(document).ready(function () {
    $("html,body").animate({ scrollTop: 0 }, 100);
    $("a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                window.location.hash = hash;
            });
        }
    });

    $('nav ul li').on('click', function () {
        removeLiClass()
        $(this).addClass("active");
    });

    var $nav = $('nav ul li');
    var $navA = $('nav ul li a');
    var $menuMobile = $('.menu-mobile ul');

    function removeLiClass() {
        $nav.removeClass("active");
        $navA.removeClass("active");
    }
    $('.menu-mobile').click(function (event) {
        if ($menuMobile.hasClass('active-ul')) {
            event.stopPropagation();
            $menuMobile.addClass('menu-mobile-ul');
            $menuMobile.removeClass('active-ul');
        }
        else {
            event.stopPropagation();
            $menuMobile.removeClass('menu-mobile-ul');
            $menuMobile.addClass('active-ul');
        }
    });

    //Navbar Offset
    var top1 = $('#home').offset().top;
    var top2 = $('#about').offset().top;
    var top3 = $('#education').offset().top;
    var top4 = $('#offer').offset().top;
    var top5 = $('#contact').offset().top;

    console.log(top1, top2, top3, top4, top5);

    var $lightpink = "#FCF7F1";
    var $darkpink = "#f6e7d5";
    var $lightgrey = "#fbfbfb";
    var $darkgrey = "#999999";
    var $darkgreyopacity = "rgba(153, 153, 153, 0.9)";
    var $greyshadow = "#d3d3d3";

    $(document).scroll(function () {
        var scrollPos = $(document).scrollTop();
        if (scrollPos >= top1 && scrollPos < top2) {
            $('.fa-bars').css('color', $darkgrey);
        } else if (scrollPos >= top2 && scrollPos < top3) {
            $('.fa-bars').css('color', $darkgrey);
        } else if (scrollPos >= top3 && scrollPos < top4) {
            $('.fa-bars').css('color', $darkpink);
        } else if (scrollPos >= top4 && scrollPos < top5) {
            $('.fa-bars').css('color', $darkgrey);
        } else if (scrollPos >= top5) {
            $('.fa-bars').css('color', $darkpink);
        }
    });

});

function openChronologyTab(index) {
    hideText();
    showButtons()
    switch (index) {
        case 1:
            $(".description-first").show();
            $(".button-first").hide();
            break;
        case 2:
            $(".description-second").show();
            $(".button-second").hide();
            break;
        case 3:
            $(".description-third").show();
            $(".button-third").hide();
            break;
        case 4:
            $(".description-fourth").show();
            $(".button-fourth").hide();
            break;
        case 5:
            $(".description-fifth").show();
            $(".button-fifth").hide();
            break;
        case 6:
            $(".description-sixth").show();
            $(".button-sixth").hide();
            break;
    }
}
function hideText() {
    $(".description-first").hide();
    $(".description-second").hide();
    $(".description-third").hide();
    $(".description-fourth").hide();
    $(".description-fifth").hide();
    $(".description-sixth").hide();
}

function showButtons() {
    $(".button-first").show();
    $(".button-second").show();
    $(".button-third").show();
    $(".button-fourth").show();
    $(".button-fifth").show();
    $(".button-sixth").show();
}

