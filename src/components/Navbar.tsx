import { FC } from 'react';
import { Link, useLocation } from 'wouter';
import { Home, Search, PlusSquare, Heart, User } from 'lucide-react';

const Navbar: FC = () => {
  const [location] = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-background border-t md:top-0 md:bottom-auto">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="hidden md:block font-bold text-xl">
            Instagram Clone
          </Link>
          
          <div className="flex items-center justify-around w-full md:w-auto md:space-x-6">
            <Link to="/"
              className={`p-2 hover:text-primary ${location === '/' ? 'text-primary' : ''}`}>
                <Home className="w-6 h-6" />
            </Link>
            
            <Link to="/explore"
              className={`p-2 hover:text-primary ${location === '/explore' ? 'text-primary' : ''}`}>
                <Search className="w-6 h-6" />
            </Link>
            
            <button className="p-2 hover:text-primary">
              <PlusSquare className="w-6 h-6" />
            </button>
            
            <button className="p-2 hover:text-primary">
              <Heart className="w-6 h-6" />
            </button>
            
            <Link to="/profile/me"
              className={`p-2 hover:text-primary ${location.startsWith('/profile') ? 'text-primary' : ''}`}>
                <User className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;