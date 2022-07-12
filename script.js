const email = document.getElementById('emailForm');
const zip = document.getElementById('zipForm');
const password = document.getElementById('passwordForm');
const passwordConfirmation = document.getElementById('passwordConfirmationForm');

const alphanumeric = /^[a-z0-9]+$/

email.addEventListener('input', () => {
    if (email.validity.typeMismatch) {
        email.setCustomValidity("This isn't a valid email address!");
        email.reportValidity();
    } else {
        email.setCustomValidity('');
    };
});

zip.addEventListener('input', () => {
    if (alphanumeric.test(zip.value) == false) {
        zip.setCustomValidity("This isn't a valid zipcode!");
        zip.reportValidity();
    } else {
        zip.setCustomValidity('');
    }
});

password.addEventListener('input', () => {
    if (password.value.length < 8) {
        password.setCustomValidity("Your password must be at least 8 characters long!");
        password.reportValidity();
    } else {
        password.setCustomValidity('');
    }
});

passwordConfirmation.addEventListener('input', () => {
    if (passwordConfirmation.value != password.value) {
        passwordConfirmation.setCustomValidity("Your passwords don't match!");
        passwordConfirmation.reportValidity();
    } else {
        passwordConfirmation.setCustomValidity('');
    }
});