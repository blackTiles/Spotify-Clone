# 🚀 Quick Start Guide

Get the Spotify Community application running in 5 minutes!

## Prerequisites Check

Ensure you have these installed:

```bash
node --version    # Should be v16+
npm --version     # Should be v8+
```

## One-Command Setup

### For Windows (PowerShell)

```powershell
# Navigate to project root
cd spotify-full-stack-master

# Install all dependencies
cd spotify-backend; npm install; cd ../spotify-admin; npm install; cd ../spotify-clone; npm install; cd ..

# Start all servers (run each in separate terminal windows)
# Terminal 1: Backend
cd spotify-backend; npm run dev

# Terminal 2: Admin Panel
cd spotify-admin; npm run dev

# Terminal 3: User Interface
cd spotify-clone; npm run dev
```

### For Mac/Linux (Bash)

```bash
# Navigate to project root
cd spotify-full-stack-master

# Install all dependencies
cd spotify-backend && npm install && cd ../spotify-admin && npm install && cd ../spotify-clone && npm install && cd ..

# Start all servers (run each in separate terminal)
# Terminal 1: Backend
cd spotify-backend && npm run dev

# Terminal 2: Admin Panel
cd spotify-admin && npm run dev

# Terminal 3: User Interface
cd spotify-clone && npm run dev
```

## Environment Setup

Create `spotify-backend/.env` file:

```env
MONGODB_URI=mongodb+srv://swayam:5J68XCWa4eUqTmFB@cluster0.hj8f1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
CLOUDINARY_NAME=dncaqtwae
CLOUDINARY_API_KEY=434163362835966
CLOUDINARY_SECRET_KEY=FpGuvsyXsi52IgBmPCmgeN8cpBs
JWT_SECRET=spotify_admin_jwt_secret_key_2024_secure
ADMIN_EMAIL=youremail@gmail.com
ADMIN_PASSWORD=password
```

## Access URLs

Once all servers are running:

| Application        | URL                   | Purpose                |
| ------------------ | --------------------- | ---------------------- |
| **Backend API**    | http://localhost:4000 | Server & API endpoints |
| **Admin Panel**    | http://localhost:5173 | Manage songs & albums  |
| **User Interface** | http://localhost:5174 | Listen to music        |

## Admin Login

- **Email**: `youremail@gmail.com`
- **Password**: `password`

## Verify Setup

### Test Backend

```bash
curl http://localhost:4000
# Should return: "API Working"
```

### Test Authentication

```powershell
$body = @{ email = "youremail@gmail.com"; password = "password" } | ConvertTo-Json
Invoke-RestMethod -Uri "http://localhost:4000/api/auth/login" -Method POST -ContentType "application/json" -Body $body
# Should return: success: True, token: eyJ...
```

## Common Issues & Solutions

### Port Conflicts

If ports are in use, the applications will automatically use alternative ports. Check the terminal output for the actual URLs.

### Database Connection

The provided MongoDB URI should work out of the box. If you have connection issues, create your own MongoDB Atlas cluster and update the URI.

### File Upload Issues

Make sure the Cloudinary credentials in `.env` are correct for file uploads to work.

## Next Steps

1. **Admin Panel**: Add some songs and albums
2. **User Interface**: Browse and play the uploaded content
3. **Development**: Start customizing the code to your needs

## Need Help?

- Check the main README.md for detailed documentation
- Look at individual README files in each project folder
- Ensure all terminals show "ready" or "started" status

Happy coding! 🎵
