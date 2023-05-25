import './App.css';
import Intro from './Components/Intro/Intro';
import Navbar from './Components/Navbar/Navbar';
import SkillsAndServices from './Components/SkillsAndServices/SkillsAndServices';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Intro />
      <SkillsAndServices />
    </div>
  );
}

export default App;
