import mongoose from 'mongoose';

// Define the Note schema

const noteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
},{timestamps: true} // Automatically manage createdAt and updatedAt fields
);

// Create and export the Note model

const Note = mongoose.model('Note', noteSchema);
export default Note;