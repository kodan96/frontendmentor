$(document).ready(() => {

    const validateEmail = (email) => {
        return email.match(
          /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    };

    const validate = () => {
        const $error = $('.btn-error');
        const email = $('#email').val();
        $error.text('');
        $error.css('display', 'block');
      
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

   

    $('#submit').on('click', (event) => {
        
        event.preventDefault();
        $('#data').find('input').css('borderColor', '');
        $('#data').find('input').siblings().css('display', 'none');
        
        if ($('#name').val() === '' || $('#last-name').val() === '' || $('#email').val() === '' || $('#password').val() === '') {
            $('.btn-error').html('Please fill out all fields');
            $('.btn-error').css('color','red');
            let emptyInput = $('#data').find('input').filter((index, element) => {
                return $(element).val() === '';
            });
            emptyInput.css('borderColor','red');
            emptyInput.siblings().toggle();
        } else {
            $('.btn-error').html('Successful Sign up')
            $('.btn-error').css('color', 'green');
            $('.btn-error').css('display', 'block');

        }
        

    });
});