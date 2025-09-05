# 🎵 Spotify Full Stack Application

A complete Spotify clone application built with the MERN stack featuring a user-facing music streaming platform, an admin panel for content management, and secure JWT-based authentication.

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Application](#running-the-application)
- [API Documentation](#api-documentation)
- [Authentication](#authentication)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## ✨ Features

### 🎧 Spotify Clone (User Interface)

- Browse and play music
- Album and song listings
- Music player with play/pause/skip functionality
- Responsive design
- Real-time music streaming

### 🛠 Admin Panel

- **Secure Authentication**: JWT-based login system
- **Song Management**: Add, list, and remove songs
- **Album Management**: Add, list, and remove albums
- **File Upload**: Support for audio files and cover images
- **Protected Routes**: Admin-only access to management features

### 🔧 Backend API

- RESTful API design
- MongoDB database integration
- Cloudinary integration for media storage
- JWT authentication middleware
- CORS enabled for cross-origin requests

## 🛠 Tech Stack

### Frontend

- **React** 18.2.0 - UI library
- **Vite** - Build tool and dev server
- **React Router DOM** - Client-side routing
- **Axios** - HTTP client
- **React Toastify** - Toast notifications
- **Tailwind CSS** - Utility-first CSS framework

### Backend

- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - MongoDB object modeling
- **JWT** - Authentication
- **Cloudinary** - Media storage
- **Multer** - File upload middleware

## 📁 Project Structure

```
spotify-full-stack/
├── spotify-backend/           # Backend API server
│   ├── src/
│   │   ├── config/           # Database and Cloudinary config
│   │   ├── controllers/      # Route controllers
│   │   ├── middleware/       # Authentication and file upload
│   │   ├── models/          # Database models
│   │   └── routes/          # API routes
│   ├── index.js             # Main server file
│   ├── package.json
│   └── .env                 # Environment variables
├── spotify-admin/            # Admin panel (React)
│   ├── src/
│   │   ├── components/      # React components
│   │   ├── pages/          # Page components
│   │   ├── context/        # Authentication context
│   │   └── assets/         # Static assets
│   ├── package.json
│   └── vite.config.js
├── spotify-clone/            # User interface (React)
│   ├── src/
│   │   ├── components/      # React components
│   │   ├── context/        # Player context
│   │   └── assets/         # Static assets
│   ├── package.json
│   └── vite.config.js
└── README.md               # This file
```

## 📋 Prerequisites

Before running this application, make sure you have the following installed:

- **Node.js** (v16.0 or higher)
- **npm** or **yarn**
- **MongoDB** (local installation or MongoDB Atlas account)
- **Cloudinary** account for media storage

## 🚀 Installation

### 1. Clone the Repository

```bash
git clone <repository-url>
cd spotify-full-stack-master
```

### 2. Install Backend Dependencies

```bash
cd spotify-backend
npm install
```

### 3. Install Admin Panel Dependencies

```bash
cd ../spotify-admin
npm install
```

### 4. Install Spotify Clone Dependencies

```bash
cd ../spotify-clone
npm install
```

## ⚙️ Configuration

### Backend Configuration

1. Create a `.env` file in the `spotify-backend` directory:

```env
# Database
MONGODB_URI=your_mongodb_connection_string

# Cloudinary Configuration
CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_SECRET_KEY=your_cloudinary_secret_key

# Authentication
JWT_SECRET=your_jwt_secret_key
ADMIN_EMAIL=youremail@gmail.com
ADMIN_PASSWORD=password
```

### Frontend Configuration

The frontend applications are configured to connect to `http://localhost:4000` for local development. Update the API URLs in the following files if needed:

- `spotify-admin/src/main.jsx`
- `spotify-clone/src/context/PlayerContext.jsx`

## 🏃‍♂️ Running the Application

### 1. Start the Backend Server

```bash
cd spotify-backend
npm run dev
```

The backend server will start on `http://localhost:4000`

### 2. Start the Admin Panel

```bash
cd spotify-admin
npm run dev
```

The admin panel will start on `http://localhost:5173`

### 3. Start the Spotify Clone

```bash
cd spotify-clone
npm run dev
```

The user interface will start on `http://localhost:5174` (or another port if 5173 is in use)

## 📚 API Documentation

### Authentication Endpoints

| Method | Endpoint          | Description |
| ------ | ----------------- | ----------- |
| POST   | `/api/auth/login` | Admin login |

### Song Endpoints

| Method | Endpoint           | Description   | Auth Required |
| ------ | ------------------ | ------------- | ------------- |
| GET    | `/api/song/list`   | Get all songs | No            |
| POST   | `/api/song/add`    | Add new song  | Yes           |
| POST   | `/api/song/remove` | Remove song   | Yes           |

### Album Endpoints

| Method | Endpoint            | Description    | Auth Required |
| ------ | ------------------- | -------------- | ------------- |
| GET    | `/api/album/list`   | Get all albums | No            |
| POST   | `/api/album/add`    | Add new album  | Yes           |
| POST   | `/api/album/remove` | Remove album   | Yes           |

## 🔐 Authentication

### Admin Access

- **Email**: `youremail@gmail.com`
- **Password**: `password`

### Security Features

- JWT token-based authentication
- 24-hour token expiration
- Protected admin routes
- Automatic token refresh handling
- Logout functionality

## 📖 Usage

### For Administrators

1. Navigate to `http://localhost:5173`
2. Login with the provided credentials
3. Use the admin panel to:
   - Add new songs with audio files and cover images
   - Add new albums with cover images
   - View and manage existing content
   - Remove songs and albums

### For Users

1. Navigate to `http://localhost:5174`
2. Browse available music and albums
3. Play songs using the built-in music player
4. Navigate through different albums and tracks

## 🐛 Troubleshooting

### Common Issues

1. **Port already in use**: If you get port conflicts, the applications will automatically try alternative ports.

2. **Database connection issues**: Make sure your MongoDB URI is correct in the `.env` file.

3. **Cloudinary upload issues**: Verify your Cloudinary credentials in the `.env` file.

4. **Authentication issues**: Ensure the JWT_SECRET is set in your `.env` file.

### Development Tips

- Use `npm run dev` for hot reload during development
- Check browser console for frontend errors
- Check terminal output for backend errors
- Ensure all three applications are running for full functionality

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Swayam Panda**

- Email: youremail@gmail.com

## 🙏 Acknowledgments

- React team for the amazing frontend library
- Express.js team for the backend framework
- MongoDB team for the database
- Cloudinary for media storage solutions
- All open source contributors

---

**Happy Coding! 🎵**
