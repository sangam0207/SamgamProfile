import React from 'react';
import './Home.css';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <div className='container home_container'>
        <div className='home_innerdiv'>
          <div className='left_div'>
            <h1>
              Welcome to <span style={{ color: 'red' }}>My portfolio</span>
            </h1>
            <p style={{ color: '#666', letterSpacing: '.5px', marginTop: 2, fontSize: '1.6rem' }}>
            "Hey, I'm Sangam Shukla, a <span style={{color:'blue',fontWeight:'bold'}}>Full-Stack Developer</span>. I build websites from scratch, handling everything you see and interact with, as well as the behind-the-scenes magic that makes it all work together. Explore my portfolio to see the awesome projects I've crafted!"</p>
            <div className='btn_div mt-4'>
              <div className="d-flex">
                <Button style={{ backgroundColor: '#2f2d69', marginRight: 24, letterSpacing: '1px', border: 'none', borderRadius: 4 }} variant="danger" onClick={() => navigate('/projects')}>My Projects</Button>
                <Button style={{ backgroundColor: 'red', letterSpacing: '1px', border: 'none', borderRadius: 4 }} variant="danger" onClick={() => navigate('/contact')}>Text me</Button>
              </div>
            </div>
          </div>
          <div className='right_div'>
            <img src="home2.png" alt="home.png" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
