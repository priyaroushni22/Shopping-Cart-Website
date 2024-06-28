import React from "react";
import "./style.css";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row className="footer-row">
          <Col md={3} sm={5} className="box">
            <div className="logo">
              <ion-icon name="bag"></ion-icon>
              <h1>VmarT</h1>
            </div>
            <p>
              Welcome to VmarT, your ultimate destination for a seamless and
              delightful online shopping experience. At VmarT, we pride
              ourselves on offering a diverse range of high-quality products
              across various categories, including electronics, fashion, home
              essentials, and more. Our mission is to provide our customers with
              the best value, exceptional service, and a user-friendly shopping
              platform that caters to all their needs.
            </p>
          </Col>
          <Col md={3} sm={5} className="box">
            <h2>About Us</h2>
            <ul>
              <li>Careers</li>
              <li>Our Stores</li>
              <li>Our Cares</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </Col>
          <Col md={3} sm={5} className="box">
            <h2>Customer Care</h2>
            <ul>
              <li>Help Center </li>
              <li>How to Buy </li>
              <li>Track Your Order </li>
              <li>Corporate & Bulk Purchasing </li>
              <li>Returns & Refunds </li>
            </ul>
          </Col>
          <Col md={3} sm={5} className="box">
            <h2>Contact Us</h2>
            <ul>
              <li>
                NawaNagar,Harshingpur,Benipur,Darbhnaga,Bihar,India - 847103{" "}
              </li>
              <li>Email: priyaroushni0@gmail.com</li>
              <li>Phone: +91 9576826402</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
