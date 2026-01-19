# 📚 Book Reader PWA

A Progressive Web App for reading and managing PDF books on Android devices with offline support.

## Features

- **📤 Upload PDF Books** - Click or drag-and-drop to upload PDF files
- **📖 Read PDFs** - Built-in PDF reader with page navigation
- **💾 Local Storage** - Books stored locally using IndexedDB (no backend needed)
- **📍 Reading Progress** - Automatically saves and resumes from last read page
- **📊 Progress Tracking** - Visual progress bar for each book
- **🗑️ Manage Library** - Delete books you no longer need
- **🌙 Dark Theme** - Mobile-optimized dark UI for comfortable reading
- **📱 PWA Installable** - Add to home screen for app-like experience
- **✈️ Offline Support** - Service worker enables offline functionality
- **🚫 No Backend** - Everything runs in the browser, no server required
- **🚫 No Frameworks** - Pure HTML, CSS, and JavaScript

## How to Use

### Installation and Setup

**Prerequisites:**
- Node.js and npm installed on your system

**Steps:**
1. Clone the repository
2. Install dependencies: `npm install`
3. Build the project: `npm run build`
4. Start the development server: `npm run serve` (or use `npm start` to build and serve in one command)
5. Open `http://localhost:8080/index.html` in a web browser (Chrome/Edge recommended for best PDF support)
6. On Android: Tap the browser menu and select "Add to Home Screen" or "Install App"
7. The app will work offline after the first load

### Reading Books
1. **Upload a Book**: Click the upload area or drag-and-drop a PDF file
2. **Start Reading**: Click "Start Reading" on any book
3. **Navigate**: Use Previous/Next buttons to move between pages
4. **Resume**: Your progress is automatically saved - click "Continue Reading" to resume

### Managing Books
- **Delete**: Click the red "Delete" button to remove a book from your library
- **Progress**: The progress bar shows how much of each book you've read

## Technical Details

### Storage
- **IndexedDB**: Stores PDF files and reading progress
- **Capacity**: Limited by browser storage (typically several GB on mobile)

### Browser Support
- Chrome/Edge (recommended)
- Firefox
- Safari (iOS 13+)
- Any modern browser with IndexedDB and Service Worker support

### PDF Rendering
- Uses [PDF.js](https://mozilla.github.io/pdf.js/) library (version 3.11.174)
- PDF.js is installed locally as a dependency via npm
- No internet connection required after building the project
- Works completely offline

## File Structure

- **index.html** - Main application file containing:
  - HTML structure
  - Embedded CSS styles
  - Embedded JavaScript code
  - Dynamic service worker generation
  - Dynamic manifest generation
- **build/pdfjs/** - Contains the PDF.js library files (generated during build)
- **package.json** - Node.js project configuration and dependencies

## Privacy & Security

- **All data stays local** - No data is sent to any server
- **No tracking** - No analytics or external services
- **No authentication** - No accounts or login required
- **Fully offline** - Works without internet after initial load

## Development

### Building the Project
```bash
# Install dependencies
npm install

# Build the project (copies PDF.js files to build directory)
npm run build

# Start development server
npm run serve

# Or build and serve in one command
npm start
```

### Running Locally
After building, you can also serve the file using any HTTP server:
```bash
# Using Python
python3 -m http.server 8080

# Using Node.js
npx http-server -p 8080

# Then open http://localhost:8080/index.html
```

## Screenshots

### Home Screen
![Home Screen](https://github.com/user-attachments/assets/59e2974d-624e-4083-8c57-4cf17a2ae22d)

### Mobile View
![Mobile View](https://github.com/user-attachments/assets/a958f072-f325-4ff6-89d0-3405d65fb234)

## License

Open source - feel free to use and modify as needed.