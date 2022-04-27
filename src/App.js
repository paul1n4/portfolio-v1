import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
      <h1>😭</h1>
      <Navbar />
      <Routes>
        <Route path='/' />
      </Routes>
    </Router>
    </>
  );
}

export default App;
