$(document).ready(function(){
    /*
     ##############################
     - ADD CLASSES -
     ##############################
     */
    $("li:first-child").addClass('first');
    $("li:last-child").addClass('last');
    $(".box-product .row:last-child").addClass('last');
    $("#image-additional a:last-child").addClass('last');
    $(".product-items:last-child").addClass('last');
    $('.product-cols:last-child').addClass('last');
    $(".product-cols:first-child").addClass('first');
    $(".product-grid div[class^='col-']:last-child").addClass('last');
    $(".product-grid .row:last-child").addClass('last');
    $(function () {
        $('#header .links li').last().addClass('last');
        $('.breadcrumb a').last().addClass('last');
        $('.cart tr').eq(0).addClass('first');
    });

    /*
     ##############################
     - SUBSCRIBE VALIDATION -
     ##############################
     */
    var id = 'newsletter_form';
    $('#' + id + ' .box-heading').bind('click', function () {
        $('#' + id).toggleClass('active');
    });

    $('#formNewLestter').on('submit', function () {
        var email = $('.inputNew').val();
        $(".success_inline, .warning_inline, .error").remove();
        if (!isValidEmailAddress(email)) {
            $('.valid').html("<div class=\"error alert alert-danger\">Email is not valid!<button type=\"button\" class=\"close\" data-dismiss=\"alert\">×</button></div></div>");
            $('.inputNew').focus();
            return false;
        }
    });

    function isValidEmailAddress(emailAddress) {
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        return pattern.test(emailAddress);
    }
});