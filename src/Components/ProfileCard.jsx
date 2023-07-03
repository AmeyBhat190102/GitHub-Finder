import React from 'react';

const ProfileCard = ({ profileData }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <img
        src={profileData.avatar_url}
        alt="Profile"
        className="w-32 h-32 rounded-full mx-auto mb-4"
      />
      <h2 className="text-xl font-semibold">{profileData.name}</h2>
      <p className="text-gray-600">{profileData.bio}</p>
      <div className="mt-4">
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-1 text-gray-600"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 2a8 8 0 100 16 8 8 0 000-16zM9 12a1 1 0 011-1h1a1 1 0 110 2H9a1 1 0 01-1-1zm0-4a1 1 0 011-1h1a1 1 0 110 2H9a1 1 0 01-1-1zm0 8a1 1 0 011-1h1a1 1 0 110 2H9a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
          <p className="text-gray-600">{profileData.location}</p>
        </div>
        <div className="flex items-center mt-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-1 text-gray-600"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 2a8 8 0 100 16 8 8 0 000-16zM7.707 8.707a1 1 0 011.414 0L10 10.586l1.879-1.879a1 1 0 011.414 1.414l-2.586 2.586a1 1 0 01-1.414 0L8.293 11.707 6.414 13.586a1 1 0 11-1.414-1.414l2.586-2.586zM4 10a6 6 0 1112 0 6 6 0 01-12 0z"
              clipRule="evenodd"
            />
          </svg>
          <a
            href={profileData.blog}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            {profileData.blog}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
