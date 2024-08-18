import React from 'react';
import { Link } from 'react-router-dom';

function ProfileButton({ buttonText, to }) {
  return (
    <Link 
      to={to} 
      className="w-1/2 py-1 text-sm font-semibold bg-gray-100 rounded text-center"
    >
      {buttonText}
    </Link>
  );
}

export default ProfileButton;
