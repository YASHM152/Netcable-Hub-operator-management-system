// Check if the user is logged in
if (!sessionStorage.getItem("loggedIn")) {
    window.location.href = "login.html"; // Redirect to login if not authenticated
    window.location.href = "signup.html";
}
