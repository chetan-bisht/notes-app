import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
import rateLimiter from "./middleware/rateLimiter.js";
import cors from "cors";
import path from 'path';

// Load environment variables
dotenv.config();

// Create an Express app
const app = express();

// Set the port for the server
const PORT = process.env.PORT || 5001;

// Get the directory name
const __dirname = path.resolve();


// Trust proxy to get real client IP
app.set('trust proxy', 1);

// CORS configuration for development
if (process.env.NODE_ENV !== "production") {
  app.use(
    cors({
      origin: "http://localhost:5173",
    })
  );
}

// Middleware to parse JSON bodies
app.use(express.json());

// Rate Limiting Middleware
app.use(rateLimiter);


// Routes
app.use("/api/notes", notesRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname,"../frontend/dist")));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend","dist","index.html"));
});
}



// Connect to the database
connectDB().then(() => {
    // Start the server after successful DB connection
    app.listen(PORT, () => {
    console.log("Server is running on port:",PORT);
});

});

