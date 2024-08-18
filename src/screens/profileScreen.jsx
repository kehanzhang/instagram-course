import React from 'react';
import useSWR from 'swr';
import Avatar from '../components/avatar';
import ProfileStat from '../components/profileStat';

const fetcher = (url) => fetch(url).then((res) => res.json());

function ProfileScreen() {
  const { data: profileData, error } = useSWR(
    `https://instagram.athensapi.com/api/user?accessKey=${import.meta.env.VITE_APIaccessKey}`,
    fetcher
  );

  if (error) return <div>Failed to load profile data</div>;
  if (!profileData) return <div>Loading...</div>;

  return (
    <div className="w-full p-4">
      <p className="text-xl font-bold mb-6">{profileData.username}</p>
      <div className="flex items-center mb-4">
        <Avatar src={profileData.profile_pic_url} size="large" />
        <div className="flex w-full pl-4 justify-evenly">
          <ProfileStat name="posts" count={profileData.posts.length} />
          <ProfileStat name="followers" count={profileData.follower_count} />
          <ProfileStat name="following" count={profileData.following_count} />
        </div>
      </div>
      <div>
        <p className="font-semibold">{profileData.name}</p>
        <p>{profileData.bio}</p>
      </div>
    </div>
  );
}

export default ProfileScreen;
