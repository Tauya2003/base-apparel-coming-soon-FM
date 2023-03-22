document.addEventListener('DOMContentLoaded', () => {
    const emailInput = document.getElementById('email');
    const submit = document.querySelector('button');
    const errIcon = document.querySelector('#error');
    const errorMsg = document.querySelector('.error-msg')

    submit.addEventListener('click', () => {

        if (emailInput.value === '') {
            errorMsg.textContent = 'Please enter your email';
        } else {
            errorMsg.textContent = 'Please provide a valid email';
        };

        email = emailInput.value;
        let count = 0;

        for (i=0; i<email.length; i++){
            if (email[i] === '@'){
                count++;
            };
        };

        if (count < 1 || email[email.length-1] == '@'){
            emailInput.focus();
            errIcon.style.opacity = 1;
            errorMsg.style.opacity = 1;

            setTimeout(() => {
                errIcon.style.opacity = 0;
                errorMsg.style.opacity = 0;
            }, 3000);
        } else{
            emailInput.value = '';
        };

    });
});
