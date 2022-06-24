import React from 'react';
import { Form, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

const UpdateTicket = ({ message, handleOnChange, handleOnSubmit }) => {
  return (
    <Form onSubmit={handleOnSubmit}>
      <Form.Label style={{ color: '#2F4858', fontWeight: 'bold' }}>
        Reply
      </Form.Label>
      <Form.Control
        as='textarea'
        name='detail'
        rows={5}
        value={message}
        onChange={handleOnChange}
      />
      <div className='text-end mt-3 mb-3'>
        <Button variant='primary' type='submit'>
          Reply
        </Button>
      </div>
    </Form>
  );
};

UpdateTicket.propTypes = {
  message: PropTypes.string.isRequired,
  handleOnChange: PropTypes.func.isRequired,
  handleOnSubmit: PropTypes.func.isRequired,
};

export default UpdateTicket;
