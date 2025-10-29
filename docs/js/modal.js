// modal.js
// This file handles the modal functionality for displaying image details.

const modal = document.getElementById('modal');
const closeModalButton = document.getElementById('close-modal');
const contentContainer = document.getElementById('modal-content-container');
const captionEl = document.getElementById('modal-caption');

// Helper to clear modal content
const clearModal = () => {
    contentContainer.innerHTML = '';
    captionEl.textContent = '';
};

// Function to open the modal and display the selected image or video details
const openModal = (item) => {
    clearModal();

    if (!item) return;

    // If it's a video, try to embed if it's a YouTube URL; otherwise provide a link
    if (item.mediaType === 'video') {
        // Attempt to detect YouTube and embed
        const youTubeMatch = item.url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([A-Za-z0-9_-]{6,})/);
        if (youTubeMatch) {
            const videoId = youTubeMatch[1];
            const iframe = document.createElement('iframe');
            iframe.src = `https://www.youtube.com/embed/${videoId}`;
            iframe.width = '100%';
            iframe.height = '480';
            iframe.frameBorder = '0';
            iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
            iframe.allowFullscreen = true;
            contentContainer.appendChild(iframe);
        } else {
            // Not a YouTube video - show a link and optionally a thumbnail
            if (item.thumbnail) {
                const thumb = document.createElement('img');
                thumb.src = item.thumbnail;
                thumb.alt = item.title;
                thumb.classList.add('modal-thumb');
                contentContainer.appendChild(thumb);
            }
            const link = document.createElement('a');
            link.href = item.url;
            link.target = '_blank';
            link.rel = 'noopener noreferrer';
            link.textContent = 'Open video in new tab';
            link.classList.add('video-link');
            contentContainer.appendChild(link);
        }
    } else {
        // Image: show a large image
        const img = document.createElement('img');
        img.src = item.url || item.thumbnail || '';
        img.alt = item.title;
        img.classList.add('modal-image');
        contentContainer.appendChild(img);
    }

    // Caption with title, date, credit and explanation
    const title = document.createElement('h2');
    title.textContent = item.title || '';

    const metaWrap = document.createElement('div');
    metaWrap.classList.add('modal-meta-wrap');

    const date = document.createElement('div');
    date.classList.add('modal-date');
    date.textContent = item.date ? `Date: ${item.date}` : '';

    const credit = document.createElement('div');
    credit.classList.add('modal-credit');
    credit.textContent = item.credit ? `Credit: ${item.credit}` : '';

    metaWrap.appendChild(date);
    if (credit.textContent) metaWrap.appendChild(credit);

    const explanation = document.createElement('p');
    explanation.classList.add('modal-explanation');
    explanation.textContent = item.explanation || '';

    captionEl.appendChild(title);
    captionEl.appendChild(metaWrap);
    captionEl.appendChild(explanation);

    // Show modal and trigger transitions
    modal.style.display = 'flex';
    // allow the browser to render the display change, then add the class to start CSS transitions
    requestAnimationFrame(() => modal.classList.add('open'));
};

// Function to close the modal
const closeModal = () => {
    // remove open class to trigger closing transitions, then hide after transition
    modal.classList.remove('open');
    // wait for CSS transition to finish before setting display none and clearing content
    setTimeout(() => {
        modal.style.display = 'none';
        clearModal();
    }, 260);
};

// Close when clicking the close button or the overlay (outside inner content)
closeModalButton.addEventListener('click', closeModal);
modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
});

// Close on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.style.display === 'flex') {
        closeModal();
    }
});

export { openModal, closeModal };