import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/navbar.js'
import {BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar/>
    </Router>
  );
}

export default App;
