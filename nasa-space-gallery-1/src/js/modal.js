// modal.js
// This file handles the modal functionality for displaying image details.

// Select the modal element and the close button
const modal = document.getElementById('image-modal');
const closeModalButton = document.getElementById('close-modal');

// Function to open the modal and display the selected image details
const openModal = (image) => {
    // Set the modal content with the image details
    const modalContent = `
        <img src="${image.url}" alt="${image.title}" />
        <h2>${image.title}</h2>
        <p>${image.description}</p>
    `;
    modal.innerHTML = modalContent;
    modal.style.display = 'block'; // Show the modal
};

// Function to close the modal
const closeModal = () => {
    modal.style.display = 'none'; // Hide the modal
};

// Event listener for the close button
closeModalButton.addEventListener('click', closeModal);

// Export the functions for use in other modules
export { openModal, closeModal };