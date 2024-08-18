import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Search, PlusSquare, Heart, UserCircleIcon } from 'lucide-react';

function BottomNavBar() {
  
  return (
    <nav className="fixed bottom-0 left-0 right-0 border-t border-gray-100 bg-white">
      <div className="flex justify-around items-center h-16">
        <Link to="/"><Home /></Link>
        <Link to="/explore"><Search /></Link>
        <PlusSquare />
        <Heart />
        <Link to="/profile"><UserCircleIcon /></Link>
      </div>
    </nav>
  );
}

export default BottomNavBar;