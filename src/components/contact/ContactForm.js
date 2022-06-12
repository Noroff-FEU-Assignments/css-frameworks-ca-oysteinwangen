import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";

function ContactForm() {
  return (
    <div>
      <h2>Submit your details</h2>
      <div className="my-4 contact-form shadow-sm rounded">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control className="contact-form__input" type="name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control className="contact-form__input" type="email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicWebsite">
            <Form.Label>Website</Form.Label>
            <InputGroup className="contact-form__input">
              <InputGroup.Text
                className="contact-form__prepend"
                id="inputGroupPrepend"
              >
                https://
              </InputGroup.Text>
              <Form.Control type="text" aria-describedby="inputGroupPrepend" />
            </InputGroup>
          </Form.Group>
          <Form.Group className="mb-3" controlId="basicTextarea">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" style={{ height: "150px" }} />
          </Form.Group>
          <Form.Group
            className="mb-3 d-flex align-items-center"
            controlId="formBasicCheckbox"
          >
            <Form.Check
              className="contact-form__checkbox"
              type="checkbox"
              name="checkbox"
            />
            <label for="checkbox" className="contact-form__checkbox-label">
              Allow us to sell your personal details to whomever we want
            </label>
          </Form.Group>

          <Button
            className="contact-form__button"
            variant="primary"
            type="submit"
          >
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default ContactForm;
