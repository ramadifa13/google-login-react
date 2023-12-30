import React from "react";

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-b from-gray-200 via-gray-400 to-gray-600">
      <span class="w-4 h-4 my-12 mx-1 bg-blue-700 rounded-full animate-loader"></span>
      <span class="w-4 h-4 my-12 mx-1 bg-blue-700 rounded-full animate-loader" style={{animationDelay:'0.2s'}}></span>
      <span class="w-4 h-4 my-12 mx-1 bg-blue-700 rounded-full animate-loader" style={{animationDelay:'0.4s'}}></span>
    </div>
  );
};

export default Loading;
