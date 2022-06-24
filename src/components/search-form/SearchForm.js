import React from 'react';
import { Form, Col, Row } from 'react-bootstrap';
import searchIcon from '../../assets/images/search-icon.png';
import './searchForm.css';
import PropTypes from 'prop-types';

const SearchForm = ({ handleOnChange, str }) => {
  return (
    <Form>
      <Form.Group as={Row}>
        <Col sm={2} style={{ padding: '0' }}>
          <img
            className='search-icon'
            src={searchIcon}
            alt='Search Icon'
            width={24}
          />
        </Col>
        <Col sm={10}>
          <Form.Control
            name='searchStr'
            placeholder='Search...'
            onChange={handleOnChange}
            value={str}
          />
        </Col>
      </Form.Group>
    </Form>
  );
};

SearchForm.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
  str: PropTypes.string.isRequired,
};

export default SearchForm;
