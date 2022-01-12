import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import Home from './components/pages/Home';
import Projects from './components/pages/Projects';
import Contact from './components/pages/Contact';
import Courses from './components/pages/Courses';

function App() {
  return (
    <div className='App'>

      <BrowserRouter>

        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/contact" element={<Contact />} />
          
        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
