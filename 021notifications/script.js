$(document).ready(() => {
    $('.mark').on('click', () => {
        $('.active').removeClass('active');
        $('.counter').hide();
        $('.notif').removeClass('notif');
    })
})