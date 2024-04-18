$(document).ready(() => {
    $('.submit-btn').on('click', () => {
        $('.show').toggle();
        $('.hide').toggle();
    })

    let ratings = document.querySelectorAll('.ratings');
    let selection = document.querySelector('.selection');
    ratings.forEach(rating => {
        let print = ''
        rating.addEventListener('click', (e) => {
            e.target.classList.add('active');
            let value = e.target.innerHTML;
            console.log(value);
            selection.innerHTML = `You selected ${value} out of 5`;
            print += value
            return print
        });

        
    });
    
})

