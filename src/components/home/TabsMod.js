import React from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function TabsMod() {
  return (
    <div>
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
                  justo, a ullamcorper turpis. Cras vehicula pharetra lectus non
                  maximus. Sed condimentum mattis rhoncus.
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
                  justo, a ullamcorper turpis. Cras vehicula pharetra lectus non
                  maximus. Sed condimentum mattis rhoncus.
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
                  justo, a ullamcorper turpis. Cras vehicula pharetra lectus non
                  maximus. Sed condimentum mattis rhoncus.
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
    </div>
  );
}

export default TabsMod;
