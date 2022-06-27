import React from 'react';
import { Table } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const TicketTable = ({ tickets }) => {
  if (tickets.length)
    return (
      <Table bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Subjects</th>
            <th>Status</th>
            <th>Opening Date</th>
          </tr>
        </thead>
        <tbody>
          {tickets.length ? (
            tickets.map((row) => (
              <tr key={row.id}>
                <td>{row.id}</td>
                <td style={{ paddingTop: '9px' }}>
                  <Link to={`/ticket/${row.id}`}>{row.subject}</Link>
                </td>
                <td>{row.status}</td>
                <td>{row.addedAt}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={4} className='text-center'>
                There are no tickets
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    );
};

TicketTable.propTypes = {
  tickets: PropTypes.array.isRequired,
};

export default TicketTable;
