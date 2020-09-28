import React, { useState } from 'react';
import './settings.scss';

import Navigation from './components/Navigation/Navigation';
import Main from './components/Main/Main';
import Skill from './components/Skill/Skill';

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
    </>
  );
}

export default App;
