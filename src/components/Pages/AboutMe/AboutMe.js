import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./AboutMe.css";
const AboutMe = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col></Col>
          <Col>
            <h1 className="my-About">About Me</h1>
            <div className="my-details">
              <p>
                I am Raju Ahammed Roton. I am a web designer and developer both
                front-end and back-end. I have several kinds of skills. I am
                very capable to turn your thought and dream into a modern and
                responsive website. You can fully depend on my task because I
                never give up and never keep any project incomplete.
              </p>
            </div>
            
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutMe;
