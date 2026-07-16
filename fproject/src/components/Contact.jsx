import React, { useState } from "react";
import { Form, Col, Row, Button, Container } from "react-bootstrap";
import { FaPhone, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import "../CSS/Style.css";

function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const Changehandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const Submithandler = (e) => {

    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
      alert("Please fill in all required fields.");
      return;
    }

    if (!formData.email.includes("@")) {
      alert("Please enter a valid email address.");
      return;
    }

    alert("Message sent successfully!");
  };

  return (
    <div
      style={{ backgroundColor: "#fffdfdff", color: "#d64064", padding: "60px 0" }}
    >
      <Container>
        <h1 className="text-center fw-bold mb-5" style={{ fontSize: "60px" }}>
          Contact
        </h1>

        <Row>
          
          <Col md={9}>
            <Form onSubmit={Submithandler}>
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3" controlId="formFirstName">
                    <Form.Label className="fw-bold">First Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="firstName"
                      placeholder="Enter first name"
                      className="contact-input"
                      value={formData.firstName}
                      onChange={Changehandler}
                    />
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group className="mb-3" controlId="formLastName">
                    <Form.Label className="fw-bold">Last Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="lastName"
                      placeholder="Enter last name"
                      className="contact-input"
                      value={formData.lastName}
                      onChange={Changehandler}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label className="fw-bold">Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="contact-input"
                  value={formData.email}
                  onChange={Changehandler}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formMessage">
                <Form.Label className="fw-bold">Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  name="message"
                  placeholder="Write your notes or questions here..."
                  className="contact-input"
                  value={formData.message}
                  onChange={Changehandler}
                />
              </Form.Group>

              <Button
                type="submit"
                variant="success"
                className="px-4 py-2 fw-bold"
                style={{ backgroundColor: "#d64064", borderColor: "#d64064" }}
              >
                Send Message
              </Button>
            </Form>
          </Col>

          
          <Col md={3} className="mt-5 mt-md-0">
            <h4>
              <FaMapMarkerAlt /> Address
            </h4>
            <p>Shebien Elkom , Menofia , Egypt</p>

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019578094636!2d-122.08560868468121!3d37.42199977982544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb0a6d0edc8b5%3A0x6d6c88f62187f169!2sGoogleplex!5e0!3m2!1sen!2sus!4v1695000000000!5m2!1sen!2sus"
              width="100%"
              height="150"
              style={{ border: 0, marginBottom: "15px" }}
            ></iframe>

            <h4>
              <FaPhone /> Phone
            </h4>
            <p style={{ color: "#d64064" }}>020123456789</p>

            <h4>
              <FaEnvelope /> Email Address
            </h4>
            <p style={{ color: "#d64064" }}>youremail@domain.com</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contact;
