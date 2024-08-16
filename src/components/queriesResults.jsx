import React from 'react';
import QueriedUsers from './queriedUser';

const QueriedResults = ({ searchResults }) => {
  return (
    <div>
      {searchResults.map((user, index) => (
        <QueriedUsers
          key={index}
          profilePicUrl={user.profile_pic_url}
          username={user.username}
          name={user.name}
        />
      ))}
    </div>
  );
};

export default QueriedResults;
