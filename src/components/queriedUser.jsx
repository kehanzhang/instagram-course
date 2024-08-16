import React from 'react';

function QueriedUsers({ profilePicUrl, username, name}) {
  return (
    <div className="flex items-center p-2">
      <img 
        src={profilePicUrl} 
        alt={`${username}'s profile`} 
        className="w-12 h-12 rounded-full mr-3"
      />
      <div>
        <p className="font-semibold">{username}</p>
        <p className="text-gray-500">{name}</p>
      </div>
    </div>
  );
}

export default QueriedUsers;
