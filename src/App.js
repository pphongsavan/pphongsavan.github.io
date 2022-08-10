import './App.css';
import Nav from './components/Nav';
import About from './components/About';
import Landing from './components/Landing';
import Projects from './components/Projects';
import Contact from './components/Contact';


function App() {
  return (
    <div className="App">
      <Nav />
      <Landing />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
