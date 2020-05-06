import React from 'react';

import { Form, Button, ButtonGroup } from 'react-bootstrap';

const Login = ({
  email,
  password,
  changeHandler,
  loginHandler,
  loading,
  isloginPageActive
}) => {

  const getRegistrationPage = () => {
    isloginPageActive(false);
  };

  return (
    <>
      <h1>
        Login
      </h1>

      <Form style={{ width: 300, margin: "auto" }}>
        <Form.Group controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            className="validate"
            value={email}
            onChange={changeHandler}
          />
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            className="validate"
            value={password}
            onChange={changeHandler}
          />
        </Form.Group>

        <ButtonGroup>
          <Button
            variant="primary"
            type="submit"
            onClick={getRegistrationPage}
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
    </>
  )
}

export default Login;