import React from 'react';

const UserDetails = ({ profileData }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-8">
      <h2 className="text-2xl font-semibold mb-4">User Details</h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="font-semibold">Followers:</p>
          <p className="text-gray-600">{profileData.followers}</p>
        </div>
        <div>
          <p className="font-semibold">Following:</p>
          <p className="text-gray-600">{profileData.following}</p>
        </div>
        <div>
          <p className="font-semibold">Public Repos:</p>
          <p className="text-gray-600">{profileData.public_repos}</p>
        </div>
        <div>
          <p className="font-semibold">Public Gists:</p>
          <p className="text-gray-600">{profileData.public_gists}</p>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
