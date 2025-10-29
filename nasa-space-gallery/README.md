# NASA Space Gallery

Welcome to the NASA Space Gallery project! This application showcases a collection of stunning space images and videos sourced from the NASA API. It features a user-friendly interface with a modal view for image details, a loading message, and random space facts.

## Features

- **Image Gallery**: Displays a grid of space images and videos.
- **Modal View**: Click on an image to view details in a modal.
- **Loading Message**: Shows a loading message while fetching data from the API.
- **Random Space Facts**: Displays a random space fact each time the app loads.
- **Hover Zoom Effect**: Images zoom in slightly when hovered over for an interactive experience.
- **NASA Branding**: The design aligns with NASA's branding guidelines.

## Project Structure

```
nasa-space-gallery
├── src
│   ├── index.html        # Main HTML document
│   ├── css
│   │   └── styles.css    # Styles for the application
│   └── js
│       ├── app.js        # Entry point for the JavaScript application
│       ├── api.js        # Functions for interacting with the NASA API
│       ├── ui.js         # User interface management
│       ├── modal.js      # Modal functionality
│       └── facts.js      # Random space facts
├── package.json          # npm configuration file
├── .gitignore            # Files to ignore by Git
└── README.md             # Project documentation
```

## Setup Instructions

1. **Clone the Repository**: 
   ```bash
   git clone <repository-url>
   cd nasa-space-gallery
   ```

2. **Install Dependencies**: 
   Make sure you have Node.js installed, then run:
   ```bash
   npm install
   ```

3. **Run the Application**: 
   Open `src/index.html` in your web browser to view the gallery.

## Usage Guidelines

- Click on any image to view more details in the modal.
- Refresh the page to see a new random space fact.
- Enjoy exploring the wonders of space!

## Contributing

Feel free to submit issues or pull requests if you have suggestions for improvements or new features. 

## License

This project is open-source and available under the MIT License.