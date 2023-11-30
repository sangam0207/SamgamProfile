import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { projectData1,Project2 } from "./data";

function Projects() {
  return (
    <>
      <div className="container">
        <h2 className="text-center mt-2"> Live Projects</h2>
        <div className="card_div">
          <div className="row d-flex justify-content-around align-items-center">
            {projectData1.map((el, index) => (
              <Card key={index} style={{ width: '20rem', height: '22rem', margin: '15px' }} className="mt-4 mb-4">
                <Card.Img variant="top" style={{ width: '100%', height: '15rem', objectFit: 'cover' }} src={el.imgsrc} />
                <Card.Body className='d-flex justify-content-center flex-column'>
                  <Card.Title className='text-center'>{el.projectName}</Card.Title>
                  <Button variant="primary">
                    <a href={el.demo} target="_blank" className='text-decoration-none text-light'>Live Demo</a>
                  </Button>
                </Card.Body>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <div className="container mt-4">
        <h2 className="text-center mt-2">Github Projects</h2>
        <div className="card_div">
          <div className="row d-flex justify-content-around align-items-center">
            {Project2.map((el, index) => (
              <Card key={index} style={{ width: '20rem', height: '22rem', margin: '15px' }} className="mt-4 mb-4">
                <Card.Img variant="top" style={{ width: '100%', height: '15rem', objectFit: 'cover' }} src={el.imgsrc} />
                <Card.Body className='d-flex justify-content-center flex-column'>
                  <Card.Title className='text-center'>{el.projectName}</Card.Title>
                  <Button variant="primary">
                    <a href={el.demo} target="_blank" className='text-decoration-none text-light'>Source Code</a>
                  </Button>
                </Card.Body>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
