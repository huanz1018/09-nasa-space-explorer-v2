import { openModal } from './modal.js';

// ui.js
// This file manages the user interface elements for the NASA Space Gallery application.

// Show the loading message element (unhide)
const showLoadingMessage = () => {
    const el = document.getElementById('loading-message');
    if (el) {
        el.classList.remove('hidden');
    }
};

// Hide the loading message element
const hideLoadingMessage = () => {
    const el = document.getElementById('loading-message');
    if (el) {
        el.classList.add('hidden');
    }
};

// Render the gallery of space items
const renderGallery = (items) => {
    const gallery = document.getElementById('gallery');
    gallery.innerHTML = ''; // Clear existing content

    items.forEach(item => {
        const container = document.createElement('div');
        container.classList.add('gallery-item');

        const mediaWrapper = document.createElement('div');
        mediaWrapper.classList.add('media-wrapper');

        if (item.mediaType === 'video') {
            // For videos show thumbnail if available or a placeholder
            if (item.thumbnail) {
                const img = document.createElement('img');
                img.src = item.thumbnail;
                img.loading = 'lazy';
                img.alt = item.title;
                img.classList.add('gallery-image');
                mediaWrapper.appendChild(img);
            } else {
                const placeholder = document.createElement('div');
                placeholder.classList.add('video-placeholder');
                placeholder.textContent = '▶ Video';
                mediaWrapper.appendChild(placeholder);
            }
        } else {
            const img = document.createElement('img');
            img.src = item.url || item.thumbnail || '';
            img.loading = 'lazy';
            img.alt = item.title;
            img.classList.add('gallery-image');
            mediaWrapper.appendChild(img);
        }

    // Title and date
    const meta = document.createElement('div');
    meta.classList.add('gallery-meta');

    const metaRow = document.createElement('div');
    metaRow.classList.add('meta-row');

    const titleEl = document.createElement('div');
    titleEl.classList.add('title');
    const h3 = document.createElement('h3');
    h3.textContent = item.title || '';
    titleEl.appendChild(h3);

        const dateEl = document.createElement('div');
        dateEl.classList.add('date');
        dateEl.textContent = item.date || '';

        // small credit line under title if available
        if (item.credit) {
            const creditEl = document.createElement('div');
            creditEl.classList.add('credit');
            creditEl.textContent = item.credit;
            titleEl.appendChild(creditEl);
        }

    metaRow.appendChild(titleEl);
    metaRow.appendChild(dateEl);

    meta.appendChild(metaRow);

        container.appendChild(mediaWrapper);
        container.appendChild(meta);

        // Hover zoom effect via CSS; add pointer cursor and click handler
        container.classList.add('clickable');
        container.addEventListener('click', () => openModal(item));

        gallery.appendChild(container);
    });
};

export { showLoadingMessage, hideLoadingMessage, renderGallery };