// Updated signOut function
function signOut() {
    // Perform any necessary sign-out logic here (e.g., clearing session data, etc.)

    // Simulate a successful sign-out for demonstration purposes
    // Replace this with your actual sign-out logic
    const isSignOutSuccessful = true;

    if (isSignOutSuccessful) {
        // Redirect to the login page (index.html)
        window.location.href = "index.html";
    } else {
        // Display an alert for sign-out failure
        alert("Logout error. Please try again.");
    }
}
