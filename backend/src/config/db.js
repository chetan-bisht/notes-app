import mongoose from "mongoose";

const connectDB = async () => {
    try {
        console.log("Attempting to connect to MongoDB...");
        // Database connection logic here
        await mongoose.connect(process.env.MONGO_URI);

        console.log("Database connected successfully");
    } catch (error) {
        console.error("Database connection failed:", error.message);
        console.error("Full error details:", error);
        process.exit(1);
    }
};

export default connectDB;