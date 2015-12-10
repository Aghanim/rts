$(document).ready(function(){
/*
##############################
- ACTIVATE THE BANNER HERE -
##############################
*/
    var tpj = jQuery;


    if (tpj.fn.cssOriginal != undefined)
        tpj.fn.css = tpj.fn.cssOriginal;

    tpj('#sliderlayer-main').revolution(
        {
            delay: 9000,
            startheight: 457,
            startwidth: 873,


            hideThumbs: 200,

            thumbWidth: 100,
            thumbHeight: 50,
            thumbAmount: 5,

            navigationType: "bullet",
            navigationArrows: "verticalcentered",
            navigationStyle: "round",

            navOffsetHorizontal: 0,
            navOffsetVertical: 20,

            touchenabled: "on",
            onHoverStop: "on",
            shuffle: "off",
            stopAtSlide: -1,
            stopAfterLoops: -1,

            hideCaptionAtLimit: 0,
            hideAllCaptionAtLilmit: 0,
            hideSliderAtLimit: 0,
            fullWidth: "off",
            shadow: 0

        });

    $('#banner0').owlCarousel({
        items: 6,
        autoPlay: 3000,
        singleItem: true,
        navigation: false,
        pagination: false,
        transitionStyle: 'fade'
    });

    $('#productcarousel25').carousel({
        interval: false,
        auto: false,
        pause: 'hover'
    });

    $('#productcarousel30').carousel({
        interval: false,
        auto: false,
        pause: 'hover'
    });
});