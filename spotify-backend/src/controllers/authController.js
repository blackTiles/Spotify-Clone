import jwt from "jsonwebtoken";

// Get admin credentials from environment variables
const ADMIN_EMAIL = process.env.ADMIN_EMAIL;
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;

// Generate JWT token
const generateToken = (email) => {
  return jwt.sign({ email }, process.env.JWT_SECRET || "fallback_secret_key", {
    expiresIn: "24h",
  });
};

// Admin login controller
const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validate input
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required",
      });
    }

    // Check credentials
    if (email !== ADMIN_EMAIL || password !== ADMIN_PASSWORD) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    // Generate token
    const token = generateToken(email);

    res.json({
      success: true,
      message: "Login successful",
      token,
      user: {
        email: ADMIN_EMAIL,
      },
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

// Verify token middleware
const verifyToken = (req, res, next) => {
  try {
    const token = req.header("Authorization")?.replace("Bearer ", "");

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Access denied. No token provided",
      });
    }

    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET || "fallback_secret_key"
    );

    // Verify the email is the admin email
    if (decoded.email !== ADMIN_EMAIL) {
      return res.status(403).json({
        success: false,
        message: "Access denied. Invalid token",
      });
    }

    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({
      success: false,
      message: "Invalid token",
    });
  }
};

export { adminLogin, verifyToken };
