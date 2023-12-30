import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1); 
  };

  return (
    <div className='flex flex-col items-center justify-center h-screen bg-gradient-to-b from-gray-200 via-gray-400 to-gray-600 text-white'>
      <h2 className='text-4xl font-bold mb-4'>404 Not Found</h2>
      <p className='mb-8'>Sorry, the page you are looking for does not exist.</p>
      <button onClick={goBack} className='bg-blue-500 text-white px-4 py-2 rounded-md shadow-xl'>
        Go Back
      </button>
    </div>
  );
};

export default NotFoundPage;
