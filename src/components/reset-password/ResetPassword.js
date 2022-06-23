import React from 'react';
import PropTypes from 'prop-types';
import { Container, Col, Row, Form, Button } from 'react-bootstrap';
import './resetPassword.css';

const ResetPassword = ({
  handleOnChange,
  handleOnResetSubmit,
  email,
  handleLoginFormSwitch,
}) => {
  return (
    <div>
      <Container className='reset-container'>
        <Row>
          <Col>
            <h2 className='reset-title'>Change Password</h2>
            <hr className='horizontal-line' />
            <Form autoComplete='off' onSubmit={handleOnResetSubmit}>
              <Form.Group>
                <Form.Label className='email-lbl-text'>
                  Email Address
                </Form.Label>
                <Form.Control
                  className='reset-input'
                  type='email'
                  name='email'
                  value={email}
                  placeholder='Enter your email address'
                  required
                  onChange={handleOnChange}
                />
              </Form.Group>
              <Button type='submit'>Change Password</Button>
            </Form>
            <hr className='horizontal-line' />
          </Col>
        </Row>
        <Row>
          <Col>
            <a
              className='link-forget-password'
              href='#!'
              onClick={() => handleLoginFormSwitch('login')}
            >
              Login now
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

/* We use this so that on runtime it checks if the props are the sameone we passed in the component => Login */
ResetPassword.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
  handleOnResetSubmit: PropTypes.func.isRequired,
  handleLoginFormSwitch: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
};

export default ResetPassword;
