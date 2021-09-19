import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Accordion from "react-bootstrap/Accordion";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CarouselMod from "./modules/CarouselMod";

function Home() {
  return (
    <>
      <CarouselMod />
      <Container fluid="lg" className="my-5">
        <h2>We do YAY things</h2>
        <p>
          Nam tincidunt, sapien nec congue porta, tellus risus ullamcorper mi, a
          rutrum justo eros pretium libero. Nullam vel enim id mauris eleifend
          finibus et ac orci. Aliquam metus massa, aliquam quis arcu sit amet,
          consectetur faucibus urna. Suspendisse massa diam, efficitur eu massa
          euismod, pretium lacinia magna. Donec mi orci, sollicitudin in luctus
          a, varius eget massa.
        </p>

        <Tabs className="tabs" defaultActiveKey="first">
          <Tab className="tab shadow" eventKey="first" title="First">
            <div className="tab__wrapper p-3">
              <Row>
                <Col sm={3}>
                  <img
                    className="img-fluid mb-3"
                    src="images/tabs/tab-1.jpg"
                    alt="Tab image"
                  />
                </Col>
                <Col sm={9}>
                  <p className="mb-4">
                    Morbi eget efficitur turpis. Vivamus pellentesque tortor
                    massa, venenatis pharetra leo laoreet a. Nullam non eleifend
                    justo, a ullamcorper turpis. Cras vehicula pharetra lectus
                    non maximus. Sed condimentum mattis rhoncus.
                  </p>
                  <div>
                    <p className="tab__share">SHARE</p>
                    <img
                      className="tab__icon"
                      src="images/icons/facebook.svg"
                    ></img>
                    <img
                      className="tab__icon"
                      src="images/icons/twitter.svg"
                    ></img>
                  </div>
                </Col>
              </Row>
            </div>
          </Tab>
          <Tab className="tab shadow" eventKey="second" title="Second">
            <div className="tab__wrapper p-3">
              <Row>
                <Col sm={3}>
                  <img
                    className="img-fluid mb-3"
                    src="images/tabs/tab-2.jpg"
                    alt="Tab image"
                  />
                </Col>
                <Col sm={9}>
                  <p className="mb-4">
                    Morbi eget efficitur turpis. Vivamus pellentesque tortor
                    massa, venenatis pharetra leo laoreet a. Nullam non eleifend
                    justo, a ullamcorper turpis. Cras vehicula pharetra lectus
                    non maximus. Sed condimentum mattis rhoncus.
                  </p>
                  <div>
                    <p className="tab__share">SHARE</p>
                    <img
                      className="tab__icon"
                      src="images/icons/facebook.svg"
                    ></img>
                    <img
                      className="tab__icon"
                      src="images/icons/twitter.svg"
                    ></img>
                  </div>
                </Col>
              </Row>
            </div>
          </Tab>
          <Tab className="tab shadow" eventKey="third" title="Third">
            <div className="tab__wrapper p-3">
              <Row>
                <Col sm={3}>
                  <img
                    className="img-fluid mb-3"
                    src="images/tabs/tab-3.jpg"
                    alt="Tab image"
                  />
                </Col>
                <Col sm={9}>
                  <p className="mb-4">
                    Morbi eget efficitur turpis. Vivamus pellentesque tortor
                    massa, venenatis pharetra leo laoreet a. Nullam non eleifend
                    justo, a ullamcorper turpis. Cras vehicula pharetra lectus
                    non maximus. Sed condimentum mattis rhoncus.
                  </p>
                  <div>
                    <p className="tab__share">SHARE</p>
                    <img
                      className="tab__icon"
                      src="images/icons/facebook.svg"
                    ></img>
                    <img
                      className="tab__icon"
                      src="images/icons/twitter.svg"
                    ></img>
                  </div>
                </Col>
              </Row>
            </div>
          </Tab>
        </Tabs>
      </Container>
    </>
  );
}

export default Home;
