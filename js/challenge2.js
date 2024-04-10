// Get the checkbox element
const checkbox = document.querySelector('input[name="useBilling"]');

// Get the billing address field
const billingAddress = document.getElementById('billing');

// Get the home address field
const homeAddress = document.getElementById('home');

// Add an event listener to the checkbox
checkbox.addEventListener('change', function() {
    // Check if the checkbox is checked
    if (checkbox.checked) {
        // Copy the billing address to the home address field
        homeAddress.value = billingAddress.value;
    } else {
        // Clear the home address field
        homeAddress.value = '';
    }
});