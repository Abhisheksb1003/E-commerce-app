import React, { Fragment, useContext } from "react";
import {Col,Button, Card, Container, Row } from "react-bootstrap";
import Modal from "../UI/Modal";
import Itemstore from "../Store/Itemstore";
import Itemprovider from "../Store/Itemprovider";


const Cart = (props) => {
  const cartctx = useContext(Itemstore);

  const removeHandler = (id) => {
    cartctx.removefromCart(id);
  };
  let totalamt=0;
  cartctx.cart.map((cartitem) => {
    totalamt = totalamt + Number(cartitem.price)
  })
  return (
    <Modal>
      <button onClick={props.onClose}>Close</button>
      {/* <Container>
        <Row className="justify-content-center">
          <Col xs lg="12" xl="8">
            <h2>Item</h2>
          </Col>
          <Col>
            <h2>Price</h2>
          </Col>
          <Col>
            <h2>Quantity</h2>
          </Col>
          
        </Row>
      </Container> */}
      <Container>
        <Card className="shadow-lg mb-3">
          <Row>
            <Col md={6}>
              <h3 className="text-center">Item</h3>
              <hr style={{ color: "black" }} />
            </Col>
            <Col md={2}>
              <h3 className="text-center">Price</h3>
              <hr style={{ color: "black" }} />
            </Col>
            <Col md={4}>
              <h3 className="text-center">Quantity</h3>
              <hr style={{ color: "black" }} />
            </Col>
          </Row>
          {cartctx.cart.map((cartitem) => (
            <Row key={cartitem.id} className="align-items-center mb-3">
              <Col>
                <Card.Img
                  variant="top"
                  src={cartitem.imageUrl}
                  style={{ width: "100px" }}
                  className="mx-auto d-block"
                />
              </Col>
              <Col className="text-center">
                <Card.Title>{cartitem.title}</Card.Title>
              </Col>
              <Col className="text-center">
                <Card.Text>${cartitem.price}</Card.Text>
              </Col>
              <Col className="text-center d-flex justify-content-between">
                <Card.Text className="border border-primary p-2">
                  {cartitem.quantity}
                </Card.Text>
                <button
                  variant="danger"
                  onClick={() => {
                    removeHandler(cartitem.deleteid);
                  }}
                >
                  Remove
                </button>
              </Col>
              <hr style={{ color: "black" }} />
            </Row>
          ))}
            <h1>Total Amount :${totalamt}</h1>
        </Card>
      </Container>
    </Modal>
  );
};
export default Cart;