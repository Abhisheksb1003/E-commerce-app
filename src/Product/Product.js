import React, { Fragment } from "react";
import { Container, Row, Col, Card , Button} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Product = () => {
  const productsArr = [
    {
      title: "Colors",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },
    {
      title: "Black and white Colors",
      price: 50,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },
    {
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },
    {
      title: "Blue Color",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];

 
 
  return (
    <Fragment>
    <Container className="mt-3">
      <Row>
        {productsArr.map((product) => (
          <Col key={product.id} style={{ margin: "2.5rem" , marginBottom:'10px' }} >
            <Card className="shadow-lg , mt-2 mb-0">
            
                <Card.Img variant="top" src={product.imageUrl} />
            
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>Price: ${product.price}</Card.Text>
                <Button>
                  Add To Cart
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  </Fragment>
  );
};
export default Product;
