import React, { useState, useEffect } from 'react';
import { Container, Col, Row, Button } from 'react-bootstrap';
import BreadcrumbBootstrap from '../../components/breadcrumb/BreadcrumbBootstrap';
import tickets from '../../assets/data/dummy-tickets.json';
import './ticketPage.css';
import MessageHistory from '../../components/message-history/MessageHistory';
import UpdateTicket from '../../components/update-ticket/UpdateTicket';

const ticket = tickets[0];

const TicketPage = () => {
  const [message, setMessage] = useState('');

  /* This will run everytime there's a change in the message */
  useEffect(() => {}, [message]);

  const handleOnChange = (e) => {
    setMessage(e.target.value);
  };

  const handleOnSubmit = () => {
    alert('Form has been sent succesfully!');
  };

  return (
    <Container>
      <Row>
        <Col>
          <BreadcrumbBootstrap page='Ticket' />
        </Col>
      </Row>
      <Row>
        <Col>
          <h5>Ticket Conversation</h5>
          <div className='subject'>Subject: {ticket.subject}</div>
          <div className='date'>Ticket Opened: {ticket.addedAt}</div>
          <div className='status'>Status: {ticket.status}</div>
        </Col>
        <Col className='text-end'>
          <Button variant='outline-primary'>Close Ticket</Button>
        </Col>
      </Row>
      <Row className='mt-4'>
        <Col>
          <MessageHistory message={ticket.history} />
        </Col>
      </Row>
      <hr className='horizontal-line' />
      <Row>
        <Col>
          <UpdateTicket
            message={message}
            handleOnChange={handleOnChange}
            handleOnSubmit={handleOnSubmit}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default TicketPage;
