import logo from './logo.svg';
import './App.css';
import LandingPage from './Pages/LandingPage.js';
import SignInPage from './Pages/SignInPage';

import { 
  BrowserRouter as Router, 
  Route, 
  Routes 
} from 'react-router-dom';

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<SignInPage />} />
        </Routes>
    </Router>
  );
}

export default App;
