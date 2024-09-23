import React from 'react';
import { Link } from 'react-router-dom';
import GitHubRepo from '../components/GitHubRepo';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Welcome to Your E-commerce App</h1>
        <p className="text-xl text-gray-600 mb-8">Upload your .wpress file to get started!</p>
        <Link 
          to="/upload" 
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Go to Upload Page
        </Link>
      </div>
      <div className="w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Featured GitHub Repository</h2>
        <GitHubRepo repo="facebook/react" />
      </div>
    </div>
  );
};

export default Index;
