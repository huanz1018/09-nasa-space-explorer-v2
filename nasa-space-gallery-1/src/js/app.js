// This is the entry point for the JavaScript application.
// It handles fetching data from the NASA API and manages the loading message.

const galleryContainer = document.getElementById('gallery'); // Get the gallery container element
const loadingMessage = document.getElementById('loading'); // Get the loading message element

// Function to fetch space images from the API
const fetchSpaceImages = async () => {
    try {
        loadingMessage.textContent = 'Loading images...'; // Show loading message
        const response = await fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=10'); // Fetch images from NASA API
        const data = await response.json(); // Parse the JSON response
        loadingMessage.textContent = ''; // Clear loading message
        renderGallery(data); // Render the gallery with fetched data
    } catch (error) {
        console.error('Error fetching images:', error); // Log any errors
        loadingMessage.textContent = 'Failed to load images. Please try again later.'; // Show error message
    }
};

// Function to render the gallery with images
const renderGallery = (images) => {
    images.forEach(image => {
        const imageElement = document.createElement('div'); // Create a new div for each image
        imageElement.classList.add('gallery-item'); // Add class for styling
        imageElement.innerHTML = `
            <img src="${image.url}" alt="${image.title}" class="gallery-image" />
            <h3>${image.title}</h3>
        `; // Set the inner HTML with image and title
        galleryContainer.appendChild(imageElement); // Append the image element to the gallery
    });
};

// Initialize the application
const init = () => {
    fetchSpaceImages(); // Fetch space images on load
};

// Call the init function to start the app
init();