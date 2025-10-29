// ui.js
// This file manages the user interface elements for the NASA Space Gallery application.

// Function to display a loading message while fetching data
const showLoadingMessage = () => {
    const loadingMessage = document.createElement('div');
    loadingMessage.textContent = 'Loading space images...';
    loadingMessage.classList.add('loading-message');
    document.body.appendChild(loadingMessage);
};

// Function to hide the loading message
const hideLoadingMessage = () => {
    const loadingMessage = document.querySelector('.loading-message');
    if (loadingMessage) {
        loadingMessage.remove();
    }
};

// Function to render the gallery of space images
const renderGallery = (images) => {
    const gallery = document.getElementById('gallery');
    gallery.innerHTML = ''; // Clear existing content

    images.forEach(image => {
        const imgElement = document.createElement('img');
        imgElement.src = image.url; // Assuming image object has a url property
        imgElement.alt = image.title; // Assuming image object has a title property
        imgElement.classList.add('gallery-image');

        // Add hover effect
        imgElement.addEventListener('mouseover', () => {
            imgElement.classList.add('zoom');
        });
        imgElement.addEventListener('mouseout', () => {
            imgElement.classList.remove('zoom');
        });

        // Click event to open modal with image details
        imgElement.addEventListener('click', () => {
            openModal(image);
        });

        gallery.appendChild(imgElement);
    });
};

// Function to open the modal (defined in modal.js)
const openModal = (image) => {
    // Logic to open modal and display image details
};

// Exporting functions for use in other modules
export { showLoadingMessage, hideLoadingMessage, renderGallery };