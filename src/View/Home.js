import React, { useState } from 'react';
import '../settings.scss';

import Background from '../components/Background/Background';
import Navigation from '../components/Navigation/Navigation';
import Main from '../components/Main/Main';
import Skill from '../components/Skill/Skill';
import Project from '../components/Project/Project';
import AboutMe from '../components/AboutMe/AboutMe';
import Contact from '../components/Contact/Contact';

const Home = () =>{
    
  const [show, setShow] = useState(null);

  const check = (value) =>{
    return setShow(value)
  }

    return (
        <>
          <Background />
          <Navigation check={check}/>
          <Main />
          <Skill show={show} />
          <Project show={show} />
          <AboutMe show={show} />
          <Contact show={show} />
        </>
      );
}

export default Home;