import { fetchSpaceImages } from './api.js';
import { getRandomFact } from './facts.js';
import { showLoadingMessage, hideLoadingMessage, renderGallery } from './ui.js';

// Entry point for the app: wire button and show random fact
const init = () => {
    const btn = document.getElementById('get-images-btn');
    const factEl = document.getElementById('random-fact');

    // Show a random fact on load
    if (factEl) {
        factEl.textContent = `Did you know? ${getRandomFact()}`;
    }

    if (btn) {
        btn.addEventListener('click', async () => {
            showLoadingMessage();
            btn.disabled = true;
            btn.textContent = 'Fetching...';
            try {
                const items = await fetchSpaceImages();
                renderGallery(items);
            } catch (err) {
                console.error('Error loading images', err);
                // show simple error in gallery area
                const gallery = document.getElementById('gallery');
                if (gallery) gallery.innerHTML = '<p class="error">Failed to load images. Please try again later.</p>';
            } finally {
                hideLoadingMessage();
                btn.disabled = false;
                btn.textContent = 'Get Space Images';
            }
        });
    }
};

// If the document is already parsed, run init immediately; otherwise wait for DOMContentLoaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}