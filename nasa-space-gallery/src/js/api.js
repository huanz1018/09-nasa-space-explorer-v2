// This file contains functions for interacting with the NASA API.
// It includes a function to fetch space images and handle video entries, returning the data in a usable format.

const API_KEY = 'DEMO_KEY'; // Replace with your NASA API key
const API_URL = `https://api.nasa.gov/planetary/apod?count=10&api_key=${API_KEY}`;

// Function to fetch space images from the NASA API
const fetchSpaceImages = async () => {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();

        // Normalize returned items so UI code has consistent fields
        return data.map(item => {
            const isVideo = item.media_type === 'video';
            return {
                title: item.title || 'Untitled',
                date: item.date || '',
                // For images prefer hdurl, fallback to url. For videos use url.
                url: isVideo ? item.url : (item.hdurl || item.url || ''),
                // Some video entries include a thumbnail_url field
                thumbnail: item.thumbnail_url || (isVideo ? null : (item.url || null)),
                explanation: item.explanation || '',
                mediaType: item.media_type || 'image'
            };
        });
    } catch (error) {
        console.error('Error fetching space images:', error);
        return [];
    }
};

// Export the fetchSpaceImages function for use in other modules
export { fetchSpaceImages };