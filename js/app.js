// Variables
const sendBtn = document.querySelector('.sendBtn'),
    email = document.getElementById('email'),
    subject = document.getElementById('subject'),
    message = document.getElementById('message'),
    resetBtn = document.querySelector('.resetBtn'),
    sendEmailForm = document.getElementById('email-form');



// Event Listeners
eventListeners();
function eventListeners() {
    document.addEventListener('DOMContentLoaded', appInit);

    // Validate the forms
    email.addEventListener('blur', validateField);
    subject.addEventListener('blur', validateField);
    message.addEventListener('blur', validateField);

    // Send email & reset button
    resetBtn.addEventListener('click', resetForm);
}




// Functions

// App initialization (disable the send button on load)
function appInit() {
    sendBtn.disabled = true;
}


// Validate fields
function validateField() {
    let errors;

    validateLength(this); //this:email,subject,message


    // check if type email, then run function
    if (this.type === 'email') {
        validateEmail(this);
    }

    errors = document.querySelectorAll('.error');

    // check that the inputs are not empty and no errors
    if (email.value !== '' && subject.value !== '' && message.value !== '') {
        sendBtn.disabled = true;
        if (errors.length === 0) {
            sendBtn.disabled = false;
        }
    }
}


// validate the length of the fields
function validateLength(field) {
    if (field.value.length > 0) {
        field.style.borderBottomColor = 'green';
        field.classList.remove('error');
    } else {
        field.style.borderBottomColor = 'red';
        field.classList.add('error');
    }
}


// validate email checks @ in the value
function validateEmail(field) {
    if (field.value.indexOf('@') !== -1) {
        field.style.borderBottomColor = 'green';
        field.classList.remove('error');
    } else {
        field.style.borderBottomColor = 'red';
        field.classList.add('error');
    }
}


// Reset the form
function resetForm() {
    sendEmailForm.reset();
}