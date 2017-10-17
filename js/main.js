$(document).ready(function () {

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

