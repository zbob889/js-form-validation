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