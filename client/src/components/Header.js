import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { NavLink, useNavigate } from "react-router-dom";
function Header() {
  const navigate = useNavigate();
  const common={
    marginRight:15,
    fontSize:21.5,
    letterSpacing:'.5px',
    textDecoration:'none',
    color:'blue'
  }
  return (
    <>
      {" "}
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <div>
            <h1 className="mt-2 h2_right" style={{ color: "blue" }}>
              <Nav.Link href="/"> Sangam Shukla </Nav.Link>
            </h1>
          </div>

          <Nav className="">
            <div>
              <NavLink to="/" style={common}>Home</NavLink>
              <NavLink to="/about" style={common}>About</NavLink>
              <NavLink to="/projects" style={common}>Projects</NavLink>
              <NavLink to="/contact" style={common}>ContactMe</NavLink>
            </div>
            <div>
              <Button variant="danger" style={{backgroundColor:'red',padding:'5px',fontSize:19,}}><a href="https://drive.google.com/file/d/1bQIH4m0fGAWtd1XN56FUr3SQzd8n3YvR/view?usp=sharing" style={{textDecoration:'none', color:'Black'}}>My Resume</a></Button>{" "}
            </div>
          </Nav>
        </Container>
      </Navbar>{" "}
    </>
  );
}

export default Header;
