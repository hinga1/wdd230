const form = document.getElementById("registrationForm");
        const username = document.getElementById("username");
        const password = document.getElementById("password");
        const confirmPassword = document.getElementById("confirmPassword");
        const passwordError = document.getElementById("passwordError");

        form.addEventListener("submit", function (e) {
            if (password.value !== confirmPassword.value) {
                e.preventDefault();
                passwordError.textContent = "Passwords do not match.";
                username.value = "";
                password.value = "";
                confirmPassword.value = "";
            }
        });

        const pageRating = document.getElementById("pageRating");
        const ratingValue = document.getElementById("ratingValue");

        pageRating.addEventListener("input", function () {
            ratingValue.textContent = pageRating.value;
        });