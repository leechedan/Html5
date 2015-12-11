/**
 * Created by somi on 13/01/15.
 */
jQuery(document).ready(function () {
    var n   =3 ;//nomber of image in each row
    var parentWidth = $("#portfolioContainer").width();
    var imageWidth = (parentWidth)/n;
    var scale = $(".imageSize").height() /  $(".imageSize").width();

    $(".imageSize").width(imageWidth);
    $(".imageSize").height(imageWidth * scale);

});
$( window ).bind("resize", function(){
    var n   =3 ;//nomber of image in each row
    var parentWidth = $("#portfolioContainer").width();
    var imageWidth = (parentWidth)/n;
    var scale = $(".imageSize").height() /  $(".imageSize").width();

    $(".imageSize").width(imageWidth);
    $(".imageSize").height(imageWidth * scale);
});
