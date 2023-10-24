import React from "react";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/Home.css";

const Home = () => {
  return (
    <Container>
      <h3>You did a perfect landing</h3>
      <div className="button-container">
        <Button variant="primary">
          <Link to="/" className="button-link">
            Signup
          </Link>
        </Button>
        <Button variant="primary">
          <Link to="/login" className="button-link">
            Login
          </Link>
        </Button>
      </div>
    </Container>
  );
};

export default Home;
