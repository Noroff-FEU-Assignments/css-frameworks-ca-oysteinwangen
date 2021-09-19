import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

function Contact() {
  return (
    <div>
      <Container className="my-5">
        <Row className="d-flex flex-column-reverse flex-lg-row g-4">
          <Col>
            <ContactForm />
          </Col>
          <Col className="mb-4">
            <ContactInfo />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contact;
