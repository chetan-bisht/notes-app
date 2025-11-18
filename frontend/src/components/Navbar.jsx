import { Link } from 'react-router-dom';
import {PlusIcon} from 'lucide-react'

const Navbar = () => {
  return (
    <header className="bg-amber-50 border-y-2 border-white shadow-lg shadow-cyan-500/50">
        <div className="mx-auto max-w-6xl p-4">
            <div className="flex items-center justify-between">
                <h1 className="text-3xl text-primary font-mono tracking-tight">MyNotes</h1>
                <div className="flex items-center gap-4">
                    <Link to={"/create"} className="btn btn-primary btn-sm">
                        <PlusIcon className='size-5'/>
                        <span>
                            New Note
                        </span>
                    </Link>
                </div>
            </div>

        </div>
    </header>
    


  )
};

export default Navbar;
