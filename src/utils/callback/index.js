import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { login } from "../../slice/authSlice";
import { useGoogleCallback } from "../services";
import { useDispatch } from 'react-redux';
import Loading from "../../components/Loading";
import { toast } from 'react-toastify';

const HandleGoogleCallback = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const authorizationCode = new URLSearchParams(location.search).get('code');
  const { data, isError, isLoading } = useGoogleCallback(authorizationCode);

  useEffect(() => {
    if (!authorizationCode || isError) {
      navigate('/login');
      return;
    }

    if (!isLoading && data) {
      localStorage.setItem('token', data.authorization.token);
      dispatch(login());
      navigate('/');
    }
  }, [authorizationCode, data, isLoading, isError, dispatch, navigate]);

  if(isError){
    toast.error("Error handling Google Sign-In callback")
  }
  return (
    <div>
      {isLoading && <Loading/>}
    </div>
  );
};

export default HandleGoogleCallback;
