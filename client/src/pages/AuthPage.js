import React, { useState, useEffect } from 'react';
import { useHttp } from '../hooks/http.hook';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { useMessage } from '../hooks/message.hook';

export const AuthPage = () => {
  const message = useMessage();
  const { loading, request, error, clearError } = useHttp();
  const [form, setForm] = useState({
    email: '', password: ''
  })

  useEffect(() => {
    message(error);
    clearError()
  }, [error, useMessage, clearError])

  const changeHandler = event => {
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  const registerHandler = async (e) => {
    e.preventDefault();
    try {
      const data = await request('http://localhost:5000/api/auth/register', 'POST', { ...form })
      message(data.message);
    } catch (e) { }
  }

  const loginHandler = async (e) => {
    e.preventDefault();
    try {
      const data = await request('http://localhost:5000/api/auth/login', 'POST', { ...form })
      message(data.message);
    } catch (e) { }
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>
            Сократи Ссылку
          </h1>

          <Form style={{ width: 300 }}>
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
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
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
