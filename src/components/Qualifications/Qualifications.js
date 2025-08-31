import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import QualificationCards from "./QualificationCards";
import "./qualification.css"; // Optional, for page-specific styles

function Qualification() {
  return (
    <Container fluid className="project-section">
      <h1 className="project-heading">My <strong className="purple">Qualifications</strong></h1>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col md={4} className="project-card">
          <QualificationCards
            degree="B.Sc. (Hons) in Information Technology"
            institution="School of Computing, BCI Campus, Sri Lanka"
            results="GPA:2.98"
            description="Focused on algorithms, software development, and AI. Completed a final year project on multimodal sentiment 
            analysis for mental health detection, developing deep learning models that analyze Facebook text posts with personality-trait 
            modeling and explainable AI to identify early signs of depression and anxiety."
            timeline="2021 - 2025"
          />
        </Col>

        <Col md={4} className="project-card">
          <QualificationCards
            degree="G.C.E. Advanced Level"
            institution="Sirimavo Bandarayake Vidyalaya, Colombo 07" 
            results="2018 - 2020"
            description ="Art Stream - specializing in Sinhala, Communication & Media Studies, and Japanese."
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Qualification;