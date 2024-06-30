import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";

const ConfirmationPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { formData, cartList, totalPrice } = location.state;

  const handlePayment = () => {
    // Handle payment logic here
    alert("Payment Successful!");
    navigate("/"); // Redirect to homepage after payment
  };

  return (
    <Container className="confirmation-page">
      <Row>
        <Col md={4}>
          <div className="customer-details">
            <h2>Customer Details</h2>
            <p>
              <strong>Name:</strong> {formData.name}
            </p>
            <p>
              <strong>Contact:</strong> {formData.contact}
            </p>
            <p>
              <strong>Email:</strong> {formData.email}
            </p>
            <p>
              <strong>Address:</strong> {formData.Address}
            </p>
          </div>
        </Col>
        <Col md={4}>
          <div className="cart-details">
            <h2>Cart Details</h2>
            {cartList.map((item) => (
              <div key={item.id}>
                <p>
                  {item.productName} - ${item.price} x {item.qty}
                </p>
              </div>
            ))}
          </div>
        </Col>
        <Col md={4}>
          <div className="total-amount">
            <h2>Total Amount</h2>
            <p>${totalPrice}</p>
          </div>
          <Button
            variant="success"
            onClick={handlePayment}
            className="mt-3 float-end pay-btn"
          >
            Pay
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ConfirmationPage;
