import React from 'react';
import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

function ProfileScreen() {
  const { data: profileData, error } = useSWR(
    `https://instagram.athensapi.com/api/user?accessKey=${import.meta.env.VITE_APIaccessKey}`,
    fetcher
  );

  if (error) return <div>Failed to load profile data</div>;
  if (!profileData) return <div>Loading...</div>;

  return (
    <div>
      <p>{JSON.stringify(profileData)}</p>
    </div>
  );
}

export default ProfileScreen;
