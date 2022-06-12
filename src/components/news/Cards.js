import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function Cards() {
  return (
    <div>
      <Row xs={1} md={2} lg={4} className="g-4 mb-3">
        <Col>
          <Card className="card">
            <Card.Img
              className="card__img"
              variant="top"
              src="images/news/news-1.jpg"
            />
            <Card.Body>
              <Card.Title className="card__title">
                Nunc porttitor vel
              </Card.Title>
              <Card.Text>Nunc malesuada eget est fringilla dapibus.</Card.Text>
              <Button className="card__button" variant="primary">
                MORE
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="card">
            <Card.Img
              className="card__img"
              variant="top"
              src="images/news/news-2.jpg"
            />
            <Card.Body>
              <Card.Title className="card__title">
                Nunc porttitor vel
              </Card.Title>
              <Card.Text>Nunc malesuada eget est fringilla dapibus.</Card.Text>
              <Button className="card__button" variant="primary">
                MORE
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="card">
            <Card.Img
              className="card__img"
              variant="top"
              src="images/news/news-3.jpg"
            />
            <Card.Body>
              <Card.Title className="card__title">
                Nunc porttitor vel
              </Card.Title>
              <Card.Text>Nunc malesuada eget est fringilla dapibus.</Card.Text>
              <Button className="card__button" variant="primary">
                MORE
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="card">
            <Card.Img
              className="card__img"
              variant="top"
              src="images/news/news-4.jpg"
            />
            <Card.Body>
              <Card.Title className="card__title">
                Nunc porttitor vel
              </Card.Title>
              <Card.Text>Nunc malesuada eget est fringilla dapibus.</Card.Text>
              <Button className="card__button" variant="primary">
                MORE
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="card">
            <Card.Img
              className="card__img"
              variant="top"
              src="images/news/news-5.jpg"
            />
            <Card.Body>
              <Card.Title className="card__title">
                Nunc porttitor vel
              </Card.Title>
              <Card.Text>Nunc malesuada eget est fringilla dapibus.</Card.Text>
              <Button className="card__button" variant="primary">
                MORE
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="card">
            <Card.Img
              className="card__img"
              variant="top"
              src="images/news/news-6.jpg"
            />
            <Card.Body>
              <Card.Title className="card__title">
                Nunc porttitor vel
              </Card.Title>
              <Card.Text>Nunc malesuada eget est fringilla dapibus.</Card.Text>
              <Button className="card__button" variant="primary">
                MORE
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="card">
            <Card.Img
              className="card__img"
              variant="top"
              src="images/news/news-7.jpg"
            />
            <Card.Body>
              <Card.Title className="card__title">
                Nunc porttitor vel
              </Card.Title>
              <Card.Text>Nunc malesuada eget est fringilla dapibus.</Card.Text>
              <Button className="card__button" variant="primary">
                MORE
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="card">
            <Card.Img
              className="card__img"
              variant="top"
              src="images/news/news-8.jpg"
            />
            <Card.Body>
              <Card.Title className="card__title">
                Nunc porttitor vel
              </Card.Title>
              <Card.Text>Nunc malesuada eget est fringilla dapibus.</Card.Text>
              <Button className="card__button" variant="primary">
                MORE
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Cards;
