import './App.css';

import { useContext } from 'react';

import Certifications from './Components/Certifications/Certifications';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Intro from './Components/Intro/Intro';
import Navbar from './Components/Navbar/Navbar';
import Projects from './Components/Projects/Projects';
import SkillsAndServices from './Components/SkillsAndServices/SkillsAndServices';

import { themeContext } from './Context';

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className='App'
      style={{background: darkMode ? 'black' : 'white',
            color: darkMode ? 'white' : 'black'
      }}
    >
      <Navbar />
      <Intro />
      <SkillsAndServices />
      <Projects />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
