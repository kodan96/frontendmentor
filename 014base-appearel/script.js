$(document).ready(() => {
    const validateEmail = (email) => {
        return email.match(
          /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    };

    const validate = () => {
        const $error = $('.error');
        const email = $('#email').val();
        $error.text('');
      
        if(validateEmail(email)){
          $error.html(email + ' is valid.');
          $error.css('color', 'green');
        } else{
          $error.html(email + ' is invalid.');
          $error.css('color', 'red');
        }
        return false;
    }
      
$('#email').on('input', validate);

    $('.arrow').on('click', () => {
        email = $('#email').val();
        if(validateEmail(email)){
            $('#email').css('border-color', 'green');
            $('.error').html('Successful subscription!');
            $('.error').css('color', 'green');
            $('.error-icon').css('display', 'none');

        } else {
            $('.error').html('A valid email address is required');
            $('.error-icon').css('display', 'inline');
            $('#email').css('border-color','red');
        }
    })
})

