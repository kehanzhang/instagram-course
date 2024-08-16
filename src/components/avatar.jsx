import React from 'react';
import { CircleUserIcon } from 'lucide-react';

function Avatar({ profilePicUrl, isForPost }) {
  const size = isForPost ? 'w-8 h-8' : 'w-12 h-12';

  return profilePicUrl ? (
    <img
      src={profilePicUrl}
      alt="User avatar"
      className={`${size} rounded-full`}
    />
  ) : (
    <CircleUserIcon className={size} />
  );
}

export default Avatar;
