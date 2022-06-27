import React, { useState, useEffect } from 'react';
import { Container, Col, Row, Button } from 'react-bootstrap';
import BreadcrumbBootstrap from '../../components/breadcrumb/BreadcrumbBootstrap';
import SearchForm from '../../components/search-form/SearchForm';
import TicketTable from '../../components/ticket-table/TicketTable';
import tickets from '../../assets/data/dummy-tickets.json';
import { Link } from 'react-router-dom';

const TicketListPage = () => {
  const [str, setStr] = useState('');
  const [displayTicket, setDisplayTicket] = useState(tickets);

  /* Whenever there's a change in the str/displayTicket this useEffect will run */
  useEffect(() => {}, [str, displayTicket]);

  const handleOnChange = (e) => {
    const { value } = e.target;
    setStr(value);
    searchTicket(value);
  };

  const searchTicket = (sstr) => {
    const displayTickets = tickets.filter((row) =>
      row.subject.toLowerCase().includes(sstr.toLowerCase())
    );
    setDisplayTicket(displayTickets);
  };

  return (
    <Container>
      <Row>
        <Col>
          <BreadcrumbBootstrap page='Ticket List' />
        </Col>
      </Row>
      <Row className='mt-4'>
        <Col>
          <Link to='/add-ticket'>
            <Button variant='primary'>Add New Ticket</Button>
          </Link>
        </Col>
        <Col className='text-end'>
          <SearchForm handleOnChange={handleOnChange} str={str} />
        </Col>
      </Row>
      <hr style={{ color: '#F6AE2D' }} />
      <Row>
        <Col>
          <TicketTable tickets={displayTicket} />
        </Col>
      </Row>
    </Container>
  );
};

export default TicketListPage;
