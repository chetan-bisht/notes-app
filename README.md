# Notes App

A full-stack notes application that allows users to create, view, edit, and delete notes. Built with a React frontend and a Node.js/Express backend, featuring rate limiting and MongoDB for data storage.

## Features

- Create new notes
- View all notes on the homepage
- Edit and delete existing notes
- Responsive design with Tailwind CSS
- Rate limiting to prevent abuse
- RESTful API with Express.js

## Tech Stack

### Frontend

- React 18
- Vite (build tool)
- Tailwind CSS (styling)
- Axios (HTTP client)
- React Router (navigation)

### Backend

- Node.js
- Express.js
- MongoDB with Mongoose
- Upstash Redis (rate limiting)
- CORS enabled

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- MongoDB instance (local or cloud)
- Upstash account for Redis (optional, for rate limiting)

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd notes-app
   ```

2. **Install backend dependencies**

   ```bash
   cd backend
   npm install
   ```

3. **Install frontend dependencies**

   ```bash
   cd ../frontend
   npm install
   cd ..
   ```

4. **Set up environment variables**

   Create a `.env` file in the `backend` directory:

   ```
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/notesapp
   UPSTASH_REDIS_REST_URL=your-upstash-url
   UPSTASH_REDIS_REST_TOKEN=your-upstash-token
   ```

5. **Start the backend server**

   ```bash
   cd backend
   npm run dev
   ```

6. **Start the frontend development server**

   ```bash
   cd frontend
   npm run dev
   ```

7. Open [http://localhost:5173](http://localhost:5173) to view the app.

## API Endpoints

- `GET /api/notes` - Get all notes
- `GET /api/notes/:id` - Get a specific note
- `POST /api/notes` - Create a new note
- `PUT /api/notes/:id` - Update a note
- `DELETE /api/notes/:id` - Delete a note

## Project Structure

```
notes-app/
├── backend/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── routes/
│   │   └── server.js
│   ├── package.json
│   └── .env
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── lib/
│   │   └── App.jsx
│   ├── package.json
│   └── tailwind.config.js
├── .gitignore
├── README.md
└── LICENSE
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
