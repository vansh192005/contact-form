let firstnameInput = document.querySelector("#firstName");
let firstnameError = document.querySelector(".firstName span");
let lastnameInput = document.querySelector("#lastName");
let lastnameError = document.querySelector(".lastName span");
let emailInput = document.querySelector("#email");
let emailError = document.querySelector(".email-section span");
let queryError = document.querySelector(".query-section span");
let message = document.querySelector("#message");
let messageError = document.querySelector(".message-section span");
let consentError = document.querySelector(".validation-section span");
let submit = document.querySelector("#submit");
const success = document.querySelector(".success");

submit.addEventListener("click", (e) => {
    e.preventDefault();

    let hasError = false;

    // First name and last name validation
    if (firstnameInput.value.trim() === "") {
        firstnameError.classList.add("error");
        firstnameError.innerText = "This field is required";
        hasError = true;
    }

    if (lastnameInput.value.trim() === "") {
        lastnameError.classList.add("error");
        lastnameError.innerText = "This field is required";
        hasError = true;
    }

    // Email validation
    const emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailReg.test(emailInput.value)) {
        emailError.classList.add("error");
        emailError.innerText = "Please enter a valid email address";
        hasError = true;
    }

    // Query type validation
    const selectedOption = document.querySelector('input[name = "query"]:checked');

    if (!selectedOption) {
        queryError.classList.add("error");
        queryError.innerText = "Please select a query type";
        hasError = true;
    }

    // Message validation

    if (message.value.trim() === "") {
        messageError.classList.add("error");
        messageError.innerText = "This field is required";
        hasError = true;
    }

    const consentCheck = document.querySelector('input[name = "consent"]:checked');

    if (!consentCheck) {
        consentError.classList.add("error");
        consentError.innerText = "To submit this form, please consent to being contacted";
        hasError = true;
    }

    if (!hasError) {
        // Submit form or show success
        console.log("Form submitted");
        success.style.display = "block";
    }
})


firstnameInput.addEventListener("input", () => {
    if (firstnameInput.value.trim() !== "") {
        firstnameError.innerText = "";
    }
});

lastnameInput.addEventListener("input", () => {
    if (lastnameInput.value.trim() !== "") {
        lastnameError.innerText = "";
    }
});

emailInput.addEventListener("input", () => {
    if (emailInput.value.trim() !== "") {
        emailError.innerText = "";
    }
});

document.querySelectorAll('input[name="query"]').forEach((radio) => {
  radio.addEventListener("change", () => {
    if (document.querySelector('input[name="query"]:checked')) {
      queryError.innerText = "";
    }
  });
});

message.addEventListener("input", () => {
    if (message.value.trim() !== "") {
        messageError.innerText = "";
    }
});


document.querySelector('input[name="consent"]').addEventListener("change", () => {
    consentError.innerText = "";
});


// Add styling to query buttons when clicked
const radioBoxes = document.querySelectorAll(".radio-box input");

radioBoxes.forEach((radio) => {
    radio.addEventListener("focus", () => {
        radio.parentElement.classList.add("active")
    });
    radio.addEventListener("blur", () => {
        radio.parentElement.classList.remove("active")
    });
});