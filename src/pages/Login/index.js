import React, { useEffect, useState } from "react";
import GoogleLoginButton from "../../components/GoogleLoginButton";
import { useSelector } from "react-redux";
import { selectAuth } from "../../slice/authSlice";
import { useGoogleLogin } from "../../utils/services";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/Loading";
import { toast } from 'react-toastify';

const LoginPage = () => {
  const { data, isError, isLoading } = useGoogleLogin();
  const { isAuthenticated } = useSelector(selectAuth);
  const navigate = useNavigate();

  const [countdown, setCountdown] = useState(5);

  const handleLoginButton = () => {
    if (data) {
      window.location.href = data.url;
    }
  };

  useEffect(() => {
    let timer;

    if (isAuthenticated) {
      timer = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);
    }

    return () => {
      clearInterval(timer);
    };
  }, [isAuthenticated]);

  useEffect(() => {
    if (isAuthenticated && countdown === 0) {
      navigate("/");
    }
  }, [isAuthenticated, countdown, navigate]);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return toast.error("Error initiating Google Sign-In");
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-gray-200 via-gray-400 to-gray-600">
      <div className="bg-white bg-opacity-25 p-8 rounded-lg shadow-lg w-max-content min-w-96 flex flex-col items-center justify-center">
        <img
          className="mb-4"
          src="./google-logo.png"
          alt="google"
          width={100}
        />
        <h2 className="text-2xl font-bold mb-4 text-white">Sign In</h2>
        {!isAuthenticated && (
          <GoogleLoginButton handleLoginButton={handleLoginButton} />
        )}
        {isAuthenticated && (
          <h2 className="text-md font-bold text-white">
            You are already <a href="/" className="underline">logged in</a>. Redirecting in {countdown} seconds...
          </h2>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
