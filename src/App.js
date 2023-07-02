import './App.css';
import HamburgerMenu from './components/HamburgerMenu';
import { BrowserRouter as Router } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Router>
        <HamburgerMenu />
      </Router>
    </div>
  );
}

export default App;
