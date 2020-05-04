import React, { useState, useEffect, useContext } from 'react';
import { useHttp } from '../hooks/http.hook';
import { useMessage } from '../hooks/message.hook';
import { AuthContext } from '../context/AuthContext';

import Form from 'react-bootstrap/Form';
import { Button, ButtonGroup } from 'react-bootstrap';

export const AuthPage = () => {
  const auth = useContext(AuthContext);
  const message = useMessage();
  const { loading, request, error, clearError } = useHttp();
  const [form, setForm] = useState({
    email: 'q@q.qq', password: 'qqqqqq'
  })

  useEffect(() => {
    message(error);
    clearError()
  }, [error, useMessage, clearError])

  const changeHandler = event => {
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  const registerHandler = async () => {
    try {
      const data = await request('http://localhost:5000/api/auth/register', 'POST', { ...form })
      message(data.message);
    } catch (err) { }
  }

  const loginHandler = async () => {
    try {
      const data = await request('http://localhost:5000/api/auth/login', 'POST', { ...form })
      auth.login(data.token, data.userId);
    } catch (err) { }
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>
            Авторизация
          </h1>

          <Form style={{ width: 300, margin: "auto" }}>
            <Form.Group controlId="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                type="text"
                className="validate"
                value={form.email}
                onChange={changeHandler}
              />
            </Form.Group>

            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                type="password"
                name="password"
                className="validate"
                value={form.password}
                onChange={changeHandler}
              />
            </Form.Group>

            <ButtonGroup>
              <Button
                variant="primary"
                type="submit"
                onClick={registerHandler}
                disabled={loading}
              >
                Регистрация
              </Button>
              <Button
                variant="primary"
                type="submit"
                onClick={loginHandler}
                disabled={loading}
              >
                Войти
              </Button>
            </ButtonGroup>
          </Form>
        </div>
      </div>
    </div>
  )
};
