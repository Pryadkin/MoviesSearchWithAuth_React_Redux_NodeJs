import React, { useState, useEffect } from 'react';
import { useHttp } from '../../hooks/http.hook';
import { useMessage } from '../../hooks/message.hook';
import Registration from './Registration';
import Login from './Login';
import { useAuth } from '../../hooks/auth.hook';

export const AuthPage = () => {
  const message = useMessage();
  const { login } = useAuth();
  const { loading, request, error, clearError } = useHttp();
  const [loginPageActive, isloginPageActive] = useState(true);
  const [form, setForm] = useState({
    name: '2', email: 'q@q.qq', password: 'qqqqqq'
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
      const data = await request('http://localhost:5000/api/auth/register', 'POST', { ...form });
      message(data.message);
    } catch (err) { }
  }

  const loginHandler = async () => {
    try {
      const data = await request('http://localhost:5000/api/auth/login', 'POST', { ...form });
      login(data.token, data.payload)
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
