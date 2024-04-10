// Get the display div
const displayDiv = document.getElementById('display');

// Get all the thumbnail images
const thumbnails = document.querySelectorAll('.thumbnail');

// Add a 'mouseover' event listener to each thumbnail
thumbnails.forEach(function(thumbnail) {
    thumbnail.addEventListener('mouseover', function() {
        // Create a new image element
        const newImage = document.createElement('img');
        newImage.src = thumbnail.src;

        // Get the alt text
        const altText = document.createTextNode(thumbnail.alt);

        // Clear the display div
        displayDiv.innerHTML = '';

        // Add the new image and alt text to the display div
        displayDiv.appendChild(newImage);
        displayDiv.appendChild(altText);
    });
});