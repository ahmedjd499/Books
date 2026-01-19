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

### Installation
1. Open `index.html` in a web browser (Chrome/Edge recommended for best PDF support)
2. On Android: Tap the browser menu and select "Add to Home Screen" or "Install App"
3. The app will work offline after the first load

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
- Uses [PDF.js](https://mozilla.github.io/pdf.js/) library from CDN
- Requires internet connection on first load to fetch PDF.js
- After first load, works completely offline

## File Structure

This is a **single-file PWA** - everything is contained in `index.html`:
- HTML structure
- Embedded CSS styles
- Embedded JavaScript code
- Dynamic service worker generation
- Dynamic manifest generation

## Privacy & Security

- **All data stays local** - No data is sent to any server
- **No tracking** - No analytics or external services
- **No authentication** - No accounts or login required
- **Fully offline** - Works without internet after initial load

## Development

To run locally:
```bash
# Serve the file using any HTTP server
python3 -m http.server 8080

# Or use Node.js
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