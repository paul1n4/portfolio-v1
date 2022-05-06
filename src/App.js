import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home'
import Projects from './components/Projects'
import Contact from './components/Contact'
import About from './components/About';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home/>} />
{/*         <Route exact path='/about' element={<About/>} />
        <Route path='projects' element={<Projects/>} />
        <Route path='/contact' element={<Contact/>} /> */}
      </Routes>
    </Router>
    </>
  );
}

export default App;
