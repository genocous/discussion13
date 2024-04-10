// Get the checkbox element
const checkbox = document.getElementById('toggle');

// Get the email field element
const emailField = document.getElementById('emailBox');

// Add an event listener to the checkbox
checkbox.addEventListener('change', function() {
    // Check if the checkbox is checked
    if (checkbox.checked) {
        // Display the email field
        emailField.style.display = 'block';
    } else {
        // Hide the email field
        emailField.style.display = 'none';
    }
});