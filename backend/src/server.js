import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
import rateLimiter from "./middleware/rateLimiter.js";
import cors from "cors";

// Load environment variables
dotenv.config();

// Create an Express app
const app = express();

// Set the port for the server
const PORT = process.env.PORT || 5001;


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


// Connect to the database
connectDB().then(() => {
    // Start the server after successful DB connection
    app.listen(PORT, () => {
    console.log("Server is running on port:",PORT);
});

});

