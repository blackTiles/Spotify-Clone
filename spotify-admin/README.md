# Spotify Admin Panel

A React-based admin panel for managing songs and albums in the Spotify application. Features a secure authentication system and content management interface.

## Features

- 🔐 JWT-based authentication
- 🎵 Song management (add, list, remove)
- 💿 Album management (add, list, remove)
- 📁 File upload support for audio and images
- 🎨 Responsive design with Tailwind CSS
- 🔔 Toast notifications for user feedback
- 🛡️ Protected routes for admin-only access

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

The admin panel will be available at `http://localhost:5173`

## Login Credentials

- **Email**: `youremail@gmail.com`
- **Password**: `password`

## Usage

1. Navigate to the admin panel URL
2. Login with the provided credentials
3. Use the sidebar to navigate between different sections:
   - **Add Song**: Upload new songs with metadata and cover art
   - **List Songs**: View and manage existing songs
   - **Add Album**: Create new albums with cover art
   - **List Albums**: View and manage existing albums

## Key Components

- `AuthContext`: Manages authentication state and API calls
- `Login`: Secure login component
- `AddSong/AddAlbum`: Forms for adding new content
- `ListSong/ListAlbum`: Tables for viewing and managing content
- `Navbar`: Header with user info and logout
- `Sidebar`: Navigation menu

## Technologies Used

- React 18
- Vite (build tool)
- React Router DOM (routing)
- Axios (HTTP client)
- React Toastify (notifications)
- Tailwind CSS (styling)

## File Structure

```
src/
├── components/          # Reusable components
│   ├── Navbar/
│   └── Sidebar/
├── pages/              # Page components
│   ├── AddSong/
│   ├── AddAlbum/
│   ├── ListSong/
│   ├── ListAlbum/
│   └── Login/
├── context/            # React context
│   └── AuthContext.jsx
├── assets/             # Static assets
└── App.jsx             # Main app component
```
