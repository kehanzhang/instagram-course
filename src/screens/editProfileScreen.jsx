import React, { useState, useEffect } from 'react';
import useSWR from 'swr';
import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import EditableProfileAttribute from '../components/EditableProfileAttribute';
import Avatar from '../components/avatar';

const fetcher = (url) => fetch(url).then((res) => res.json());

const EditProfileScreen = () => {
  const { data: profileData, error } = useSWR(
    `https://instagram.athensapi.com/api/user?accessKey=${import.meta.env.VITE_APIaccessKey}`,
    fetcher
  );

  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [bio, setBio] = useState('');

  useEffect(() => {
    if (profileData) {
      setName(profileData.name || '');
      setUsername(profileData.username || '');
      setBio(profileData.bio || '');
    }
  }, [profileData]);

  if (error) return <div>Failed to load profile data</div>;
  if (!profileData) return <div>Loading...</div>;

  return (
    <div className="w-full">
      <div className="flex items-center p-4 border-b border-gray-100">
        <Link to="/profile" className='absolute left-4'>
          <ChevronLeft />
        </Link>
        <p className="flex-grow text-center font-bold">Edit Profile</p>
      </div>
      <div className="flex flex-col items-center py-2 border-b border-gray-100">
        <Avatar src={profileData.profile_pic_url} size="large" />
        <p className="mt-2 text-blue-500 text-sm font-semibold">Edit Picture</p>
      </div>
      <div className="p-4 space-y-2">
        <EditableProfileAttribute
          attribute="Name"
          state={name}
          updateState={setName}
        />
        <EditableProfileAttribute
          attribute="Username"
          state={username}
          updateState={setUsername}
        />
        <EditableProfileAttribute
          attribute="Bio"
          state={bio}
          updateState={setBio}
        />
      </div>
    </div>
  );
};

export default EditProfileScreen;
