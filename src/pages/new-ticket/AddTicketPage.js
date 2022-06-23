import React, { useState, useEffect } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import AddTicketForm from '../../components/add-ticket-form/AddTicketForm';
import BreadcrumbBootstrap from '../../components/breadcrumb/BreadcrumbBootstrap';
import { shortText } from '../../utils/validation';

const initialFormData = {
  subject: '',
  date: '',
  details: '',
};

const initialFormDataError = {
  subject: false,
  date: false,
  details: false,
};

const AddTicketPage = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [formDataError, setFormDataError] = useState(initialFormDataError);

  /* This useEffect will run everytime there is a change in the formData */
  useEffect(() => {}, [formData, formDataError]);

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    setFormDataError(initialFormDataError);
    const isSubjectValid = await shortText(formData.subject);

    setFormDataError({
      ...initialFormDataError,
      subject: !isSubjectValid,
    });
  };

  return (
    <Container>
      <Row>
        <Col>
          <BreadcrumbBootstrap page='New Ticket' />
        </Col>
      </Row>
      <Row>
        <Col>
          <AddTicketForm
            handleOnChange={handleOnChange}
            handleOnSubmit={handleOnSubmit}
            formData={formData}
            formDataError={formDataError}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default AddTicketPage;
