
$(document).ready(function() {
    $('.plus').click(function() {
        var index = $('.plus').index(this);
        $('.plus').eq(index).hide();
        $('.btn-hide').eq(index).show();
        $('.hide').eq(index).slideToggle();
    });

    $('.btn-hide').click(function() {
        var index = $('.btn-hide').index(this);
        $('.btn-hide').eq(index).hide();
        $('.plus').eq(index).show();
        $('.hide').eq(index).slideToggle();
    });
});