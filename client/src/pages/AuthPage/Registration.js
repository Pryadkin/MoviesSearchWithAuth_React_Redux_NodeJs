import React from 'react';

import { Form, Button, ButtonGroup } from 'react-bootstrap';

const Registration = ({
  name,
  email,
  password,
  changeHandler,
  registerHandler,
  loading,
  isloginPageActive
}) => {

  const getLoginPage = () => {
    isloginPageActive(true);
  };

  return (
    <>
      <h1>
        Registration
      </h1>

      <Form style={{ width: 300, margin: "auto" }}>
        <Form.Group controlId="email">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="Name"
            placeholder="Enter name"
            name="Name"
            className="validate"
            value={name}
            onChange={changeHandler}
          />
        </Form.Group>

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
            onClick={registerHandler}
            disabled={loading}
          >
            Registration
          </Button>
          <Button
            variant="primary"
            type="submit"
            onClick={getLoginPage}
          >
            Login
          </Button>
        </ButtonGroup>
      </Form>
    </>
  )
}

export default Registration;