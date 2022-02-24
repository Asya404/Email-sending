// Variables
const sendBtn = document.querySelector('.sendBtn'),
    email = document.getElementById('email'),
    subject = document.getElementById('subject'),
    message = document.getElementById('message');



// Event Listeners
eventListeners();
function eventListeners() {
    document.addEventListener('DOMContentLoaded', appInit);

    // Validate the forms
    email.addEventListener('blur', validateField);
    subject.addEventListener('blur', validateField);
    message.addEventListener('blur', validateField);
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
    if(field.value.indexOf('@') !== -1) {
        field.style.borderBottomColor = 'green';
        field.classList.remove('error');
    } else {
        field.style.borderBottomColor = 'red';
        field.classList.add('error');
    }
}