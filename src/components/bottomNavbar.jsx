import React from 'react';
import { Home, Search, PlusSquare, Heart, UserCircleIcon } from 'lucide-react';

function BottomNavBar() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 border-t border-gray-100 bg-white">
      <div className="flex justify-around items-center h-16">
        <Home />
        <Search />
        <PlusSquare />
        <Heart />
        <UserCircleIcon />
      </div>
    </nav>
  );
}

export default BottomNavBar;