import React, { useState, useEffect} from 'react';
import useSWR from 'swr';
import EditableProfileAttribute from '../components/EditableProfileAttribute';

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
    <div className="w-full p-4">
      <p className="text-center">Edit Profile</p>
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
  );
};

export default EditProfileScreen;
