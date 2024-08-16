import React from 'react';
import Avatar from './avatar';

function QueriedUsers({ profilePicUrl, username, name}) {
  return (
    <div className="flex items-center p-2">
      <Avatar profilePicUrl={profilePicUrl} isForPost={false}/>
      <div className="ml-3">
        <p className="font-semibold">{username}</p>
        <p className="text-gray-500">{name}</p>
      </div>
    </div>
  );
}

export default QueriedUsers;
