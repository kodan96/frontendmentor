$(document).ready(() => {
    $('.open').on('click', (e) => {
        e.preventDefault();
        $(e.currentTarget).toggle();
        $('.close').toggle();
        $('.nav-items').css('transform', 'translateX(0)')
        $('.nav-items').css('transition', '.4s ease-in')
        $('body').css('overflow', $('nav-items').css('transform', 'translateX(110%)') ? 'hidden' : 'auto');
    });

    $('.close').on('click', (e) => {
        e.preventDefault();
        $(e.currentTarget).toggle();
        $('.open').toggle();
        $('.nav-items').css('transform', 'translateX(110%)')
        $('body').css('overflow', '')
    });
});