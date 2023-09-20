const form = document.querySelector('#DataForm');
const yourname = document.querySelector('#your_name');
const companyname = document.querySelector('#company_name');
const mobile = document.querySelector('#phone_number');
const email = document.querySelector('#E-mail');
const eventT = document.querySelector('#Event');
const evdate = document.querySelector('#evdate');
const evtime = document.querySelector('#evtime');
const locationT = document.querySelector('#loc');
const budget = document.querySelector('#budget');
const people = document.querySelector('#people');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    validateInputs();
})

function validateInputs() {
    const usernameVal = yourname.value.trim();
    const companyVal = companyname.value.trim();
    const mobileVal = mobile.value.trim();
    const mailVal = email.value.trim();
    const evdateVal = evdate.value;
    const evtimeVal = evtime.value;
    const LocationVal = locationT.value.trim();
    const budgetVal = budget.value.trim();
    const numberOfPeople = people.value;

    if (usernameVal === '') {
        setError(yourname, 'Name is required');
    }
    else {
        setSuccess(yourname);
    }


    if (companyVal === '') {
        setError(companyname, 'Company Name is required');
    }
    else {
        setSuccess(companyname);
    }


    if (mobileVal === '') {
        setError(mobile, 'Enter the Phone Number');
    }
    else if (!validateMobile(mobileVal)) {
        setError(mobile, 'Enter the number with Country Code');
    }
    else {
        setSuccess(mobile);
    }


    if (mailVal === '') {
        setError(email, 'E-mail is required');
    }
    else if (!validateEmail(mailVal)) {
        setError(email, 'Enter a valid E-mail Id');
    }
    else {
        setSuccess(email);
    }


    if (LocationVal === '') {
        setError(locationT, 'Enter the Location');
    }
    else {
        setSuccess(locationT);
    }

    if (evdateVal === '') {
        setError(evdate, 'Please Select Date');
    }
    else {
        setSuccess(evdate);
    }


    if (evtimeVal === '') {
        setError(evtime, 'Please Select Timing');
    }
    else {
        setSuccess(evtime);
    }


    if (budgetVal === '') {
        setError(budget, 'Amount in INR');
    }
    else {
        setSuccess(budget);
    }


    if (numberOfPeople === "") {
        setError(people, "Enter the Number");
    }
    else if (numberOfPeople <= '12') {
        setError(people, "Mimimum order 12 ");
    }
    else {
        setSuccess(people);
    }
}

function setError(element, message) {
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error');

    errorElement.innerText = message;
}

function setSuccess(element) {
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error');

    errorElement.innerText = '';
}

const validateEmail = (email) => {
    return String(email)
        .toLocaleLowerCase()
        .match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
};

const validateMobile = (mobile) => {
    return String(mobile).match(/^(\+\d{1,3}[- ]?)?\d{11}$/);
};