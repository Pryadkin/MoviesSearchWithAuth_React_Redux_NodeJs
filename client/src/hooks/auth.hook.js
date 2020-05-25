import { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addLoginData, removeLoginData, cleanProfileMovies } from '../redux/actions';

const storageName = 'userData';

export const useAuth = () => {
  const dispatch = useDispatch();
  const token = useSelector(state => state.authReducer.token);
  const userData = useSelector(state => state.authReducer.userData);

  const login = useCallback((token, payload) => {
    dispatch(addLoginData(token, payload))
  }, []);

  const logout = () => {
    dispatch(removeLoginData());
    localStorage.removeItem(storageName);
    setTimeout(() => {
      dispatch(cleanProfileMovies());
    });
  }

  useEffect(() => {
    if (token && userData) {
      localStorage.setItem(storageName, JSON.stringify({
        userData, token
      }));
    } else {
      const data = JSON.parse(localStorage.getItem(storageName));
      if (data && data.token) {
        login(data.token, data.userData);
      }
    }

  }, [login])

  return { login, logout, userData };
}