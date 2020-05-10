import { useState, useCallback, useEffect } from 'react';

const storageName = 'userData';

export const useAuth = () => {
  const [token, setToken] = useState(null);
  const [userData, setUserData] = useState(null);

  const login = useCallback((jwtToken, data) => {
    setToken(jwtToken);
    setUserData(data);

    try {
      localStorage.setItem(storageName, JSON.stringify({
        userData: data, token: jwtToken
      }));
    } catch (e) {
      if (e == 'QUOTA_EXCEEDED_ERR') {
        alert('Quota exceeded in local storage!');
      }
    }
  }, []);

  const logout = useCallback(() => {
    setToken(null);
    setUserData(null);
    localStorage.removeItem(storageName);
  }, []);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem(storageName));
    if (data && data.token) {
      login(data.token, data.userData);
    }
  }, [login])

  return { login, logout, token, userData }
}