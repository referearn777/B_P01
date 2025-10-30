// server.js
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import compression from "compression";
import morgan from "morgan";

// Load environment variables
dotenv.config();

const app = express();

// --------------------
// 🔒 Middleware setup
// --------------------
app.use(helmet());          // Security headers
app.use(compression());     // Gzip compress responses
app.use(express.json());    // Parse JSON requests
app.use(morgan("tiny"));    // Log basic request info

// ✅ CORS Configuration
const allowedOrigins = [
  "https://alankrithanaturals.vercel.app", // production frontend
  "http://localhost:5173",
  "http://localhost:3000",                 // local Vite dev
];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("CORS not allowed for this origin"));
      }
    },
  })
);

// --------------------
// 🗄️ Database setup
// --------------------
const mongoURI =
  process.env.MONGO_URI || "mongodb://127.0.0.1:27017/beauty_salon";

mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    maxPoolSize: 10,
  })
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// --------------------
// 📘 Mongoose Schema
// --------------------
const bookingSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  service: { type: String, required: true },
  date: { type: String, required: true },
  notes: String,
});

const Booking = mongoose.model("Booking", bookingSchema);

// --------------------
// 🌐 Routes
// --------------------

// Health check (for uptime monitoring)
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", time: new Date().toISOString() });
});

// Test route
app.get("/api", (req, res) => {
  res.send("✅ Backend is running!");
});

// Booking route
app.post("/api/bookings", async (req, res, next) => {
  try {
    const { name, email, phone, service, date, notes } = req.body;

    // Basic validation
    if (!name || !email || !phone || !service || !date) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const booking = new Booking({ name, email, phone, service, date, notes });
    await booking.save();

    res.status(201).json({ message: "Booking Successful!" });
  } catch (err) {
    console.error("❌ Error saving booking:", err);
    next(err);
  }
});

// --------------------
// 🚨 Global Error Handler
// --------------------
app.use((err, req, res, next) => {
  console.error("🔥 Unhandled Error:", err.message);
  res.status(500).json({ error: "Server error occurred" });
});

// --------------------
// 🚀 Start Server
// --------------------
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
