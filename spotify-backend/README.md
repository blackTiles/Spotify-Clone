# Spotify Backend API

This is the backend server for the Spotify Full Stack application, built with Node.js, Express.js, and MongoDB.

## Features

- RESTful API for songs and albums management
- JWT-based authentication system
- File upload handling with Multer
- Cloudinary integration for media storage
- MongoDB database integration
- CORS enabled for cross-origin requests

## Installation

1. Install dependencies:

```bash
npm install
```

2. Create a `.env` file with the following variables:

```env
MONGODB_URI=your_mongodb_connection_string
CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_SECRET_KEY=your_cloudinary_secret_key
JWT_SECRET=your_jwt_secret_key
ADMIN_EMAIL=youremail@gmail.com
ADMIN_PASSWORD=password
```

## Running the Server

### Development Mode

```bash
npm run dev
```

### Production Mode

```bash
npm start
```

The server will start on `http://localhost:4000`

## API Endpoints

### Authentication

- `POST /api/auth/login` - Admin login

### Songs

- `GET /api/song/list` - Get all songs
- `POST /api/song/add` - Add new song (requires authentication)
- `POST /api/song/remove` - Remove song (requires authentication)

### Albums

- `GET /api/album/list` - Get all albums
- `POST /api/album/add` - Add new album (requires authentication)
- `POST /api/album/remove` - Remove album (requires authentication)

## Dependencies

- express: Web framework
- mongoose: MongoDB object modeling
- jsonwebtoken: JWT authentication
- multer: File upload middleware
- cloudinary: Cloud-based image and video management
- cors: Cross-origin resource sharing
- dotenv: Environment variable management
- nodemon: Development server with hot reload
