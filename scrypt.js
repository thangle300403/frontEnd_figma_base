document.querySelectorAll("[data-login-form]").forEach(form => {

    const emailInput = form.querySelector('[name="email"]');
    const passwordInput = form.querySelector('[name="password"]');

    const emailError = form.querySelector(".error-email");
    const passwordError = form.querySelector(".error-password");

    // SUBMIT VALIDATION
    form.addEventListener("submit", e => {
        e.preventDefault();

        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        // reset error
        emailError.classList.add("hidden");
        passwordError.classList.add("hidden");
        emailError.textContent = "";
        passwordError.textContent = "";

        let hasError = false;

        if (!email) {
            emailError.textContent = "Email is required";
            emailError.classList.remove("hidden");
            hasError = true;
        } else if (!/^\S+@\S+\.\S+$/.test(email)) {
            emailError.textContent = "Invalid email format";
            emailError.classList.remove("hidden");
            hasError = true;
        }

        if (!password) {
            passwordError.textContent = "Password is required";
            passwordError.classList.remove("hidden");
            hasError = true;
        } else if (password.length < 6) {
            passwordError.textContent = "Password must be at least 6 characters";
            passwordError.classList.remove("hidden");
            hasError = true;
        }

        if (hasError) return;

        // ✅ OK
        console.log("LOGIN DATA", { email, password });
    });

    // CLEAR ERROR ON FOCUS / INPUT
    [emailInput, passwordInput].forEach(input => {
        const errorEl = form.querySelector(`.error-${input.name}`);
        if (!errorEl) return;

        input.addEventListener("focus", () => {
            errorEl.classList.add("hidden");
            errorEl.textContent = "";
        });

        input.addEventListener("input", () => {
            errorEl.classList.add("hidden");
            errorEl.textContent = "";
        });
    });

});
