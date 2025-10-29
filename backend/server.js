// server.js
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(
  cors({
    origin: process.env.ALLOWED_ORIGIN || "https://alankrithanaturals.vercel.app",
  })
);
app.use(express.json());
// ✅ Connect to MongoDB Atlas or local DB
const mongoURI =
  process.env.MONGO_URI || "mongodb://127.0.0.1:27017/beauty_salon";

mongoose
  .connect(mongoURI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// Schema
const bookingSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  service: String,
  date: String,
  notes: String,
});

const Booking = mongoose.model("Booking", bookingSchema);

// Routes
app.get("/api", (req, res) => {
  res.send("✅ Backend is running!");
});

app.post("/api/bookings", async (req, res) => {
  try {
    const booking = new Booking(req.body);
    await booking.save();
    res.status(200).json({ message: "Booking Successful!" });
  } catch (err) {
    console.error("❌ Error saving booking:", err);
    res.status(500).json({ error: "Failed to save booking" });
  }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`🚀 Server running on port ${PORT}`)
);
