import { useQuery } from 'react-query';


const apiUrl = 'https://api.goprestasi.com';

export const useGoogleLogin = () => {
  return useQuery('googleLogin', async () => {
    const response = await fetch(`${apiUrl}/api/login/google`);
    if (!response.ok) {
      throw new Error('Google login failed');
    }
    return response.json();
  });
};

export const useGoogleCallback = (code) => {
  return useQuery('googleCallback', async () => {
    const response = await fetch(`${apiUrl}/api/auth/google/callback?code=${code}`);
    if (!response.ok) {
      throw new Error('Google callback failed');
    }
    
    return response.json();
  });
};

export const useUserProfile = (token) => {
  return useQuery('userProfile', async () => {
    const response = await fetch(`${apiUrl}/api/setting`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.json();
  });
};
