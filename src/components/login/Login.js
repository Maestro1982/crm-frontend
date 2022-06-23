import React from 'react';
import PropTypes from 'prop-types';
import { Container, Col, Row, Form, Button } from 'react-bootstrap';
import './login.css';

const Login = ({
  handleOnChange,
  handleOnSubmit,
  email,
  password,
  handleLoginFormSwitch,
}) => {
  return (
    <Container className='login-container'>
      <Row>
        <Col>
          <h2 className='login-title'>Client Login</h2>
          <hr className='horizontal-line' />
          <Form autoComplete='off' onSubmit={handleOnSubmit}>
            <Form.Group>
              <Form.Label className='login-lbl-text'>Email Address</Form.Label>
              <Form.Control
                className='login-input'
                type='email'
                name='email'
                value={email}
                placeholder='Enter your email address'
                required
                onChange={handleOnChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label className='login-lbl-text'>Password</Form.Label>
              <Form.Control
                className='login-input'
                type='password'
                name='password'
                value={password}
                placeholder='Enter your password'
                required
                onChange={handleOnChange}
              />
            </Form.Group>
            <Button type='submit'>Login</Button>
          </Form>
          <hr className='horizontal-line' />
        </Col>
      </Row>
      <Row>
        <Col>
          <a
            className='link-forget-password'
            href='#!'
            onClick={() => handleLoginFormSwitch('reset')}
          >
            Forget Password?
          </a>
        </Col>
      </Row>
    </Container>
  );
};

/* We use this so that on runtime it checks if the props are the sameone we passed in the component => Login */
Login.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
  handleOnSubmit: PropTypes.func.isRequired,
  handleLoginFormSwitch: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
};

export default Login;
