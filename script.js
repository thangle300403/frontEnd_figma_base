const form = document.querySelector("form");
const email = document.getElementById("email");
const password = document.getElementById("password");

const emailError = document.getElementById("email-error");
const passwordError = document.getElementById("password-error");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    let isValid = true;

    // reset lỗi
    emailError.style.display = "none";
    passwordError.style.display = "none";

    // check email
    if (email.value.trim() === "") {
        emailError.textContent = "Vui lòng điền email";
        emailError.style.display = "block";
        isValid = false;
    }

    // check password
    if (password.value.trim() === "") {
        passwordError.textContent = "Vui lòng điền mật khẩu";
        passwordError.style.display = "block";
        isValid = false;
    }

    if (isValid) {
        alert("Login clicked!");
    }
});

// hide error khi gõ lại
email.addEventListener("input", () => {
    emailError.style.display = "none";
});

password.addEventListener("input", () => {
    passwordError.style.display = "none";
});
