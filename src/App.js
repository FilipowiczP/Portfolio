import React from 'react';
import './settings.scss';

import Navigation from './components/Navigation/Navigation';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import Skill from './components/Skill/Skill';

function App() {
  return (
    <>
      <Navigation />
      <Main />
      <Footer />
      <Skill />
    </>
  );
}

export default App;
