import React from 'react';
import { Container, Col, Row, Button } from 'react-bootstrap';
import TicketTable from '../../components/ticket-table/TicketTable';
import tickets from '../../assets/data/dummy-tickets.json';
import BreadcrumbBootstrap from '../../components/breadcrumb/BreadcrumbBootstrap';

const DashboardPage = () => {
  return (
    <Container>
      <Row>
        <Col>
          <BreadcrumbBootstrap page='dashboard' />
        </Col>
      </Row>
      <Row>
        <Col className='text-center mt-3 mb-2'>
          <Button
            style={{
              fontSize: '1rem',
              padding: '10px',
            }}
          >
            Add New Ticket
          </Button>
        </Col>
      </Row>
      <Row>
        <Col className='text-center mb-2'>
          <div>Total tickets: 30</div>
          <div>Pending tickets: 3</div>
        </Col>
      </Row>
      <Row>
        <Col
          className='mt-2'
          style={{ fontWeight: 'bold', fontSize: '20px', color: '#F6AE2D' }}
        >
          Recently added tickets
        </Col>
      </Row>
      <hr />
      <Row>
        <Col className='recent-ticket'>
          <TicketTable tickets={tickets} />
        </Col>
      </Row>
    </Container>
  );
};

export default DashboardPage;
