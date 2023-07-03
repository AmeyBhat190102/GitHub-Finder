import React from 'react';

const RepositoryList = ({ repositories }) => {
  return (
    <div className="bg-white rounded-lg p-6">
      <h3 className="text-xl font-bold mb-4">Repositories</h3>
      <ul className="grid grid-cols-1 gap-4">
        {repositories.map((repo) => (
          <li key={repo.id} className="bg-gray-200 p-4 rounded">
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              {repo.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RepositoryList;
