import './App.css';
import Certifications from './Components/Certifications/Certifications';
import Intro from './Components/Intro/Intro';
import Navbar from './Components/Navbar/Navbar';
import Projects from './Components/Projects/Projects';
import SkillsAndServices from './Components/SkillsAndServices/SkillsAndServices';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Intro />
      <SkillsAndServices />
      <Projects />
      <Certifications />
    </div>
  );
}

export default App;
