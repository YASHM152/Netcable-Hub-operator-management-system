document.addEventListener("DOMContentLoaded", function () {
    // Handle login form submission
    const loginForm = document.getElementById("login-form");
    if (loginForm) {
        loginForm.addEventListener("submit", async function (event) {
            event.preventDefault();

            const formData = {
                username: document.getElementById("login-username").value,
                password: document.getElementById("login-password").value
            };

            try {
                const response = await fetch("/login", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(formData)
                });

                const result = await response.json();
                if (result.success) {
                    window.location.href = "/";
                } else {
                    alert("Invalid username or password.");
                }
            } catch (error) {
                console.error("Login Error:", error);
                alert("Something went wrong. Try again later.");
            }
        });
    }

    // Handle signup form submission
    const signupForm = document.getElementById("signup-form");
    if (signupForm) {
        signupForm.addEventListener("submit", async function (event) {
            event.preventDefault();

            const formData = {
                username: document.getElementById("signup-username").value,
                password: document.getElementById("signup-password").value
            };

            try {
                const response = await fetch("/signup", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(formData)
                });

                const result = await response.json();
                if (result.success) {
                    alert("Signup successful! Please log in.");
                    window.location.href = "/login";
                } else {
                    alert("Signup failed: " + result.message);
                }
            } catch (error) {
                console.error("Signup Error:", error);
                alert("Something went wrong. Try again later.");
            }
        });
    }

    // Handle contact form submission
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();
            alert("Your message has been sent successfully!");
            contactForm.reset();
        });
    }
});
