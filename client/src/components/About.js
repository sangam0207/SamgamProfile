import React from "react";
import "./About.css";

function About() {
  return (
    <>
      <div
        className="container mb-3 about_container"
        style={{ minHeight: "100%" }}
      >
        <div className="container main_container d-flex justify-content-around flex-wrap">
          <div className="left_container mt-5" style={{ width: 500 }}>
            <h2>Meet Sangam Shukla </h2>
            <p
              style={{
                color: "#666",
                letterSpacing: ".5px",
                marginTop: 4,
                lineHeight: 2,
                fontSize: "1.3rem",
              }}
            >
              Hi! I'm a computer science student from CSJM University, Kanpur.
              I'm skilled in C++ for problem-solving and web development using
              HTML, CSS, and JavaScript. I create user-friendly websites. For
              dynamic features, I use React.js, and on the server, I work with
              Node.js and Express. I'm familiar with MongoDB and MySQL for
              managing data. Think of it like organizing information neatly. My
              tech skills are diverse, and I'm enthusiastic about contributing
              to the exciting world of computer science and web development.
              Let's make technology work for everyone!!
            </p>

            <div className="tech-skills mt-4">
              <div style={{ marginTop: "15px" }}>
                <p style={{ fontSize: "1.5rem", marginBottom: "10px" }}>
                  <strong>Skills:</strong>
                </p>
                <p style={{ fontSize: "1.2rem", marginBottom: "10px" }}>
                  <strong>Computer Languages:</strong>{" "}
                  <span> C++ , JavaScript</span>
                </p>
                <p style={{ fontSize: "1.2rem", marginBottom: "10px" }}>
                  <strong>Frontend Tools:</strong>{" "}
                  <span> HTML , CSS , JavaScript , React.js</span>
                </p>
                <p style={{ fontSize: "1.2rem", marginBottom: "10px" }}>
                  <strong>Backend Tools:</strong>{" "}
                  <span> Node.js , Express.js</span>
                </p>
                <p style={{ fontSize: "1.2rem", marginBottom: "10px" }}>
                  <strong>Database:</strong> <span> MongoDB , MySQL</span>
                </p>
                <p style={{ fontSize: "1.2rem", marginBottom: "10px" }}>
                  <strong>Others:</strong> <span> Postman , Github</span>
                </p>
              </div>
            </div>
          
          </div>
          
          <div className="right_container mt-3">
            <img
              src="my.jpg"
              alt="User img"
              style={{ boxShadow: "5px 2px 5px #888888",marginTop:'40px' }}
            />
          </div>
          
        </div>
      </div>
    </>
  );
}

export default About;
