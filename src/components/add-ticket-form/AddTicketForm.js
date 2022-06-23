import React from 'react';
import { Container, Form, Button, Col, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';
import './addTicketForm.css';

const AddTicketForm = ({
  handleOnSubmit,
  handleOnChange,
  formData,
  formDataError,
}) => {
  return (
    <Container className='add-ticket-form-container'>
      <div className='container-fluid bg-light p-5 w-auto'>
        <h3 className='add-new-ticket-title'>Add New Ticket</h3>
        <hr className='horizontal-line' />
        <Form autoComplete='off' onSubmit={handleOnSubmit}>
          <Form.Group as={Row}>
            <Form.Label column sm={3} className='ticket-lbl-text'>
              Subject:
            </Form.Label>
            <Col sm={9}>
              <Form.Control
                className='ticket-input'
                type='text'
                name='subject'
                value={formData.subject}
                placeholder='Enter your subject'
                required
                onChange={handleOnChange}
              />
              <Form.Text className='text-danger'>
                {formDataError.subject &&
                  'Subject: min. of 5 characters is required!'}
              </Form.Text>
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label column sm={3} className='ticket-lbl-text'>
              Date:
            </Form.Label>
            <Col sm={9}>
              <Form.Control
                className='ticket-input'
                type='date'
                name='date'
                value={formData.date}
                required
                onChange={handleOnChange}
              />
            </Col>
          </Form.Group>
          <Form.Group>
            <Form.Label className='ticket-lbl-text'>Message:</Form.Label>
            <Form.Control
              className='text-area'
              as='textarea'
              name='details'
              rows={4}
              value={formData.details}
              required
              onChange={handleOnChange}
            />
          </Form.Group>
          <Button
            type='submit'
            style={{
              width: '100%',
              marginTop: '10px',
            }}
          >
            Send
          </Button>
        </Form>
      </div>
    </Container>
  );
};

AddTicketForm.propTypes = {
  handleOnSubmit: PropTypes.func.isRequired,
  handleOnChange: PropTypes.func.isRequired,
  formData: PropTypes.object.isRequired,
  formDataError: PropTypes.object.isRequired,
};
export default AddTicketForm;
