import React from 'react';

function ProfileStat({ name, count }) {
  return (
    <div className="flex flex-col items-center w-1/3">
      <span className="font-bold">{count}</span>
      <span className="text-sm text-gray-500">{name}</span>
    </div>
  );
}

export default ProfileStat;
