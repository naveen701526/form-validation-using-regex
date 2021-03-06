// Form Fields Blur Event Listeners
document.getElementById('name').addEventListener('blur', validateName);
document.getElementById('zip').addEventListener('blur', validateZip);
document.getElementById('email').addEventListener('blur', validateEmail);
document.getElementById('phone').addEventListener('blur', validatePhone);
document.getElementById('password').addEventListener('blur', validatePassword);

function validateName() {
    const name = document.getElementById('name');
    const re = /^[a-zA-Z]{2,10}$/;
    if (!re.test(name.value)) {
        name.classList.add('is-invalid');
    } else {
        name.classList.remove('is-invalid');
    }
}

function validateZip() {
    const zip = document.getElementById('zip');
    const re = /^[1-9][0-9]{5}$/;
    // source --> https://stackoverflow.com/questions/33865525/indian-pincode-validation-regex-only-six-digits-shouldnt-start-with-0

    if (!re.test(zip.value)) {
        zip.classList.add('is-invalid');
    } else {
        zip.classList.remove('is-invalid');
    }
}

function validateEmail() {
    const email = document.getElementById('email');
    const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,63})$/;

    if (!re.test(email.value)) {
        email.classList.add('is-invalid');
    } else {
        email.classList.remove('is-invalid');
    }
}

function validatePhone() {
    const phone = document.getElementById('phone');
    const re = /^[789]\d{9}$/;
    // source --> https://tinyurl.com/dhhm3rxs

    if (!re.test(phone.value)) {
        phone.classList.add('is-invalid');
    } else {
        phone.classList.remove('is-invalid');
    }
}

function validatePassword() {
    const password = document.getElementById('password');
    const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W).{8,}$/g;
    if (!re.test(password.value)) {
        password.classList.add('is-invalid');
    } else {
        password.classList.remove('is-invalid');
    }
}
