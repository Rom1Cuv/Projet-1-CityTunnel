import { w3cHtmlValidator } from 'w3c-html-validator';

const options = {filename:'tokyo.html'};
w3cHtmlValidator.validate(options).then(w3cHtmlValidator.reporter);

const validationInput = document.querySelector('input');

validationInput.addEventListener('input', (e) => {

    if(e.target.value.length >= 3) {
        validationInput.style.borderColor = "green";
    } else {
        validationInput.style.borderColor = "red";
    }

})