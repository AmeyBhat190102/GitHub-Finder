import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './navbar';
import ProfileCard from './ProfileCard';
import RepositoryList from './RepositoryList';
import UserDetails from './UserDetails';

const GitHubProfile = () => {
  const [username, setUsername] = useState('');
  const [profileData, setProfileData] = useState(null);
  const [repositories, setRepositories] = useState([]);
  const [selectedTab, setSelectedTab] = useState('profile');

  useEffect(() => {
    const fetchRepositories = async () => {
      try {
        if (profileData && profileData.repos_url) {
          const response = await axios.get(profileData.repos_url);
          setRepositories(response.data);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchRepositories();
  }, [profileData]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`https://api.github.com/users/${username}`);
      setProfileData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const renderContent = () => {
    switch (selectedTab) {
      case 'profile':
        return <ProfileCard profileData={profileData} />;
      case 'repositories':
        return <RepositoryList repositories={repositories} />;
      case 'details':
        return <UserDetails profileData={profileData} />;
      default:
        return null;
    }
  };

  return (
    <div>
      <Navbar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center mb-4">
          <input
            type="text"
            placeholder="Enter GitHub username"
            className="border border-gray-300 rounded-l py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded-r"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
        {profileData && renderContent()}
      </div>
    </div>
  );
};

export default GitHubProfile;
