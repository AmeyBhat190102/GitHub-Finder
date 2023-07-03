import React, { useState } from 'react';
import axios from 'axios';
import avbar from './Components/navbar';
import ProfileCard from './Components/ProfileCard';
import RepositoryList from './Components/RepositoryList';
import UserDetails from './Components/UserDetails';
import './App.css';

const App = () => {
  const [username, setUsername] = useState('');
  const [profileData, setProfileData] = useState(null);
  const [repositories, setRepositories] = useState([]);
  const [error, setError] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(`https://api.github.com/users/${username}`);
      setProfileData(response.data);

      const reposResponse = await axios.get(`https://api.github.com/users/${username}/repos`);
      setRepositories(reposResponse.data);

      setError('');
    } catch (error) {
      setProfileData(null);
      setRepositories([]);
      setError('User not found. Please enter a valid GitHub username.');
    }
  };

  return (
    <div>
        
        <div className="bg-gray-400 min-h-screen">
          <navbar />
          <div className="container mx-auto p-4">
            <div className="max-w-2xl mx-auto">
              <h1 className="text-4xl font-bold text-center mt-8 mb-4">GitHub Finder</h1>
              <form onSubmit={handleSearch} className="text-center">
                <input
                  type="text"
                  placeholder="Enter GitHub username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full max-w-sm p-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button
                  type="submit"
                  className="mt-4 px-4 py-2 rounded-md bg-primary text-white hover:bg-primary-dark focus:outline-none focus:bg-primary-dark"
                >
                  Search
                </button>
              </form>
              {error && <p className="text-red-500 text-center mt-4">{error}</p>}
              {profileData && (
                <div className="mt-8">
                  <div className="md:flex md:gap-4">
                    <div className="w-full md:w-1/3">
                      <ProfileCard profileData={profileData} />
                    </div>
                    <div className="w-full md:w-2/3">
                      <UserDetails profileData={profileData} />
                      <RepositoryList repositories={repositories} />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

    </div>
  );
};

export default App;
