import React, { useState } from 'react';
import './settings.scss';

import Navigation from './components/Navigation/Navigation';
import Main from './components/Main/Main';
import Skill from './components/Skill/Skill';
import Project from './components/Project/Project';

function App() {

  const [show, setShow] = useState(null);

  const check = (value) =>{
    return setShow(value)
  }

  return (
    <>
      <Navigation check={check}/>
      <Main />
      <Skill show={show} />
      <Project show={show} />
    </>
  );
}

export default App;
