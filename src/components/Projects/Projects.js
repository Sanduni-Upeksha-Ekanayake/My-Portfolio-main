import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import ProjectCard from "./ProjectCards";
import Nattandiya from "../../Assets/Projects/nattandiya.png";
import Dulvin from "../../Assets/Projects/dulvin.png";
import ichurch from "../../Assets/Projects/ichurch.png";
import Library from "../../Assets/Projects/library.jpg";
import Research from "../../Assets/Projects/research.jpeg";
import Skin from "../../Assets/Projects/skin.png";
import user from "../../Assets/Projects/user.png";
import egg from "../../Assets/Projects/egg.webp";
import App from "../../Assets/Projects/app.jpeg";
import Location from "../../Assets/Projects/location.png";


import "./project.css";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="Fluorescent-Blue">Works </strong>
        </h1>
        <p>Here are a few projects I've worked on recently.</p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={Research}
              title="Multimodal Sentiment Analysis for Emotion Detection based on Facebook Posts 2024-2025"
              description="This project was a Multimodal Sentiment Analysis system developed to detect early signs 
              of emotional distress in Facebook posts. It integrated deep learning, personality-trait modeling, and 
              explainable AI to improve accuracy and interpretability, supporting proactive mental health monitoring."
            />
          </Col>


          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={Dulvin}
              title="Dulvin Exporters 2024"
              description="This project was about a Web Application for Dulvin Exporters, a company specializing in 
              exporting Sri Lankan flowers, plants, spices, vegetables, and fruits. It was implemented to streamline 
              product showcasing and ensure a smooth, user-friendly experience for customers. The application was designed 
              with intuitive pages, proper product linking, and functional navigation to enhance usability. 
              Technologies used: HTML, CSS, JavaScript"
              demoLink="https://www.dulvinexporters.com/"
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={Nattandiya}
              title="Nattandiya Electricals 2024"
              description="This project was about an Inventory Management System developed for Nattandiya Electricals, 
              designed to handle inventory, employee administration, supplier management, customer management, sales tracking, 
              and financial management. It was implemented to improve efficiency in stock monitoring and overall business operations, 
              with secure login access provided only to the admin. Technologies used: Angular, MongoDB, Azure, Docker."
              demoLink="https://nattandiyaelectricals.lk/"
              //demoLink="https://rahuljha.tech/"
            />
          </Col>

          
      
        </Row>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={ichurch}
              title="iChurch Management System 2024"
              description="This project was about a Church Management System developed to assist churches and religious 
              organizations in managing their operations and community activities. It included features such as membership 
              management, event scheduling (marriage, baptism, death), financial tracking for donations, and volunteer coordination. 
              It was implemented to ensure smooth administration and efficient handling of ceremonies through a user-friendly interface. 
              Technologies used: Angular, SCSS, MongoDB."
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={Skin}
              title="Mobile Application for Skin Care Products 2024"
              description="This project was about a Mobile Application for Skin Care Products, developed to provide users with a smooth 
              and responsive shopping experience. The app included features such as splash screen, login, registration, home page with 
              featured products, organized categories, detailed product pages, cart management, and user profile with order tracking. 
              It was implemented to deliver an efficient and user-friendly e-commerce solution. Technologies used: Android Studio, Java."
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={Library}
              title="Library Management System 2021"
              description="This project was about a Library Management System developed to manage the movement of books and maintain records 
              of library members. The system included functions such as login, add/delete and view book records, view and delete student 
              records, issue and return of books, student registration, and fine calculation. It was implemented to ensure secure access 
              and accurate record handling, with full access granted only to the admin. Technologies used: PHP, HTML, CSS."
            />
          </Col>
      
        </Row>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={user}
              title="Student Registration Mobile Application 2024"
              description="This project was about a Student Registration Application developed to streamline student academic management and 
              engagement. The app included a welcome page, registration page, and a detailed profile page with syllabus, upcoming exams, quizzes, 
              calendar, tests, insights, and support information. It also featured a login and dashboard with modules such as library, MySchool, 
              LearningHub, chat, and upcoming sessions to provide a complete digital learning experience. The application was implemented using 
              Java and Flutter technologies to ensure a responsive, user-friendly, and cross-platform solution."
            />
          </Col>


          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={egg}
              title="Poultry Farm Management System 2022"
              description="This project was about an Inventory Management System developed for a poultry farm to manage inventories, 
              suppliers, and purchase orders. It was implemented to streamline order tracking and ensure efficient handling of supplier 
              and stock records. Only the admin had full access to maintain system security and accuracy. Technologies used: PHP, HTML, CSS, MySQL."
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={Location}
              title="Mobile App - Location Based Offers 2023"
              description="This project was about a Mobile Application for a clothing shop that provided customers with location-based discounts. 
              The app offered features such as login, category browsing, map integration, and real-time discounts for users within a 5 km radius 
              of the shop. It was implemented to enhance customer engagement and drive sales through personalized, location-aware offers. 
              Technologies used: App Inventor."
            />
          </Col>
      
        </Row>
      </Container>
      <ScrollToTop />
    </Container>
  );
}

export default Projects;
