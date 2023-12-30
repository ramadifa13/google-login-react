import React from "react";
import { useUserProfile } from "../../utils/services";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const { data, isError, isLoading } = useUserProfile(
    localStorage.getItem("token")
  );
  const navigate = useNavigate();

  if (isError) {
    localStorage.clear();
    navigate("/login");
  }
  const userData = data;

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-gray-200 via-gray-400 to-gray-600">
      <div className="bg-white bg-opacity-25 p-5 rounded-lg shadow-lg w-max-content  flex flex-col items-center justify-center">
        {isLoading ? (
          <div class="animate-pulse flex flex-col w-full items-center">
            <div class="rounded-full bg-slate-200 h-28 w-28 mb-3"></div>
            <div class="h-8 bg-slate-200 rounded w-full mb-2"></div>
            <div class="h-8 bg-slate-200 rounded w-full"></div>
          </div>
        ) : (
          <>
            <img
              src={userData.user.image}
              alt="User Avatar"
              class="rounded-full w-28 shadow-2xl mb-3"
            />
            <h2 className="text-3xl font-serif font-bold text-slate">
              {userData.user.name}
            </h2>
            <h2 className="text-xl font-serif text-slate-700">
              {userData.user.email}
            </h2>
          </>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
