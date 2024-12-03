document.addEventListener("DOMContentLoaded", function() {
    // Get the sign-up form and password fields
    const signupForm = document.querySelector('form[action="#signup"]');
    const passwordField = document.getElementById('signup-password');
    const confirmPasswordField = document.getElementById('confirm-password');
    
    // Create a div for the warning message
    const warningMessage = document.createElement('div');
    warningMessage.style.color = 'red';
    warningMessage.style.marginBottom = '10px';
    warningMessage.style.display = 'none'; // Initially hide the warning message
    signupForm.insertBefore(warningMessage, passwordField); // Insert the warning above the password fields

    // Event listener for form submission
    signupForm.addEventListener('submit', function(event) {
        // Reset the background color for both fields
        passwordField.style.backgroundColor = '';
        confirmPasswordField.style.backgroundColor = '';
        warningMessage.style.display = 'none'; // Hide warning message by default

        // Check if the passwords match
        if (passwordField.value !== confirmPasswordField.value) {
            // Prevent form submission
            event.preventDefault();
            
            // Change background color to light red for both fields
            passwordField.style.backgroundColor = '#f8d7da';
            confirmPasswordField.style.backgroundColor = '#f8d7da';
            
            // Display warning message
            warningMessage.textContent = "Passwords do not match!";
            warningMessage.style.display = 'block'; // Show the warning message
        }
    });
});
