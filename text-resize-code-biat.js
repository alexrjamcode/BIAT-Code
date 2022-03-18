// JavaScript source code
$(document).ready(function () {
    var resize = new Array('.middle-p');
    //resize = resize.join(',');

    //resets the font size when "reset" is clicked
    var resetFont = $(resize).css('font-size');
    $(".reset").click(function () {
        $(resize).css('font-size', resetFont);
    });

    //increases font size when "+" is clicked
    $(".font-size-plus").click(function () {
        var originalFontSize = $(resize).css('font-size');
        var originalFontNumber = parseFloat(originalFontSize, 10);
        var newFontSize = originalFontNumber * 1.2;
        $(resize).css('font-size', newFontSize);
        return false;
    });

    //decrease font size when "-" is clicked

    $(".font-size-minus").click(function () {
        var originalFontSize = $(resize).css('font-size');
        var originalFontNumber = parseFloat(originalFontSize, 10);
        var newFontSize = originalFontNumber * 0.8;
        $(resize).css('font-size', newFontSize);
        return false;
    });

});