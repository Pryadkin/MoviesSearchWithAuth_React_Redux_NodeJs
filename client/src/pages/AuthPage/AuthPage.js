import React, { useState, useEffect, useContext } from 'react';
import { useHttp } from '../../hooks/http.hook';
import { useMessage } from '../../hooks/message.hook';
import { AuthContext } from '../../context/AuthContext';
import Registration from './Registration';
import Login from './Login';

export const AuthPage = () => {
  console.log('hey')
  const auth = useContext(AuthContext);
  const message = useMessage();
  const { loading, request, error, clearError } = useHttp();
  const [loginPageActive, isloginPageActive] = useState(true);
  const [form, setForm] = useState({
    name: 'Anton', email: 'q@q.qq', password: 'qqqqqq'
  });

  useEffect(() => {
    message(error);
    clearError();
  }, [error, useMessage, clearError]);

  const changeHandler = event => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const registerHandler = async () => {
    try {
      const data = await request('http://localhost:5000/api/auth/register', 'POST', { ...form })
      message(data.message);
    } catch (err) { }
  }

  const loginHandler = async () => {
    try {
      const data = await request('http://localhost:5000/api/auth/login', 'POST', { ...form });
      auth.login(data.token, data.userId);
    } catch (err) { }
  };

  return (
    <div className="container">
      {loginPageActive
        ?
        <Login
          email={form.email}
          password={form.password}
          changeHandler={changeHandler}
          registerHandler={registerHandler}
          loginHandler={loginHandler}
          loading={loading}
          isloginPageActive={isloginPageActive}
        />
        :
        <Registration
          name={form.name}
          email={form.email}
          password={form.password}
          changeHandler={changeHandler}
          registerHandler={registerHandler}
          loginHandler={loginHandler}
          loading={loading}
          isloginPageActive={isloginPageActive}
        />
      }
    </div>
  )
};
