# Spotify Clone - User Interface

A React-based music streaming application that replicates the core functionality of Spotify. Users can browse and play music with a modern, responsive interface.

## Features

- 🎵 Music streaming and playback
- 💿 Album browsing and navigation
- 🎮 Audio player controls (play, pause, skip, seek)
- 📱 Responsive design for all device sizes
- 🖼️ Album artwork and metadata display
- ⏱️ Real-time playback progress
- 🔄 Continuous playback between tracks

## Installation

1. Install dependencies:

```bash
npm install
```

2. Ensure the backend server is running on `http://localhost:4000`

## Running the Application

### Development Mode

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

The application will be available at `http://localhost:5174`

## Usage

1. Navigate to the application URL
2. Browse available songs and albums on the homepage
3. Click on any song to start playing
4. Use the player controls at the bottom to:
   - Play/pause the current track
   - Skip to previous/next track
   - Seek to different positions in the track
   - View current playback time and total duration

## Key Components

### Core Components

- `App`: Main application wrapper with conditional rendering
- `Display`: Main content area with routing
- `DisplayHome`: Homepage with featured content
- `DisplayAlbum`: Album detail view
- `Player`: Bottom music player with controls
- `Sidebar`: Navigation sidebar
- `Navbar`: Top navigation bar

### Context

- `PlayerContext`: Manages music playback state, current track, and player controls

### Item Components

- `AlbumItem`: Album card component
- `SongItem`: Song card component

## Technologies Used

- React 18
- Vite (build tool)
- React Router DOM (routing)
- Axios (API calls)
- Tailwind CSS (styling)

## Audio Features

- HTML5 audio element for playback
- Custom seek bar with click-to-seek functionality
- Automatic track progression
- Real-time progress updates
- Audio preloading for smooth playback

## File Structure

```
src/
├── components/          # React components
│   ├── AlbumItem.jsx   # Album card
│   ├── Display.jsx     # Main display area
│   ├── DisplayAlbum.jsx # Album page
│   ├── DisplayHome.jsx # Homepage
│   ├── Navbar.jsx      # Top navigation
│   ├── Player.jsx      # Music player
│   ├── Sidebar.jsx     # Side navigation
│   └── SongItem.jsx    # Song card
├── context/            # React context
│   └── PlayerContext.jsx # Music player state
├── assets/             # Static assets
│   ├── audio files     # Sample music
│   ├── images          # UI icons and artwork
│   └── assets.js       # Asset exports
└── App.jsx             # Main app component
```

## API Integration

The application connects to the backend API to fetch:

- Song listings with metadata
- Album information and artwork
- Audio file URLs for streaming

## Responsive Design

The interface adapts to different screen sizes:

- **Mobile**: Simplified layout with touch-friendly controls
- **Tablet**: Medium layout with adjusted spacing
- **Desktop**: Full layout with all features visible

## Browser Compatibility

Supports modern browsers with HTML5 audio support:

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+
