import React from 'react';
import { CircleUserIcon } from 'lucide-react';

function Avatar({ src, size = 'medium' }) {
  const sizeClasses = {
    small: 'w-8 h-8',
    medium: 'w-12 h-12',
    large: 'w-20 h-20'
  };

  const avatarSize = sizeClasses[size] || sizeClasses.medium;

  return src ? (
    <img
      src={src}
      alt={"User avatar"}
      className={`${avatarSize} rounded-full object-cover`}
    />
  ) : (
    <CircleUserIcon className={avatarSize} />
  );
}

export default Avatar;
