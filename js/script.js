$(document).ready(function() {
    $(".slider .slide:gt(0)").hide();
    var sliding = setInterval(function() {
        $('.slider > .slide:first')
            .fadeOut(800)
            .next()
            .fadeIn(800)
            .end()
            .appendTo('.slider');
    },  7500);
});