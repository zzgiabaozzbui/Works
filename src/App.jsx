import './App.scss';

import Home from './pages/Home';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
function App() {
  return (
    <Router>
      <div className="App">
        <ul className="App-header">
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
        <Routes>
        <Route 
                  path='/'
                  element={<Home/>}
          />
        </Routes>
      </div>
          
    </Router>
  );
}

export default App;
