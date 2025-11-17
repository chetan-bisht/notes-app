import { NotebookIcon } from "lucide-react";
import { Link } from "react-router-dom";

const NotesNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16 space-y-6 max-w-md mx-auto text-center">
      <div className="bg-primary/10 rounded-full p-8 shadow-lg animate-bounce">
        <NotebookIcon className="size-10 text-primary" />
      </div>
      <h3 className="text-2xl font-bold text-base-content">No Notes Found</h3>
      <p className="text-base-content/70 text-lg leading-relaxed">
        You haven't created any notes yet. Start capturing your thoughts, ideas, and reminders by creating your first note!
      </p>
      <Link to="/create" className="btn btn-primary btn-lg hover:scale-105 transition-transform duration-200">
        Create Your First Note
      </Link>
    </div>
  );
};
export default NotesNotFound;