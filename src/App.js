import './App.css';
import LandingPage from './Pages/LandingPage.js';
import SignInPage from './Pages/SignInPage';
import SignUpPage from './Pages/SignUpPage';
import ListsPage from './Pages/ListsPage';
import SeriesPage from './Pages/SeriesPage';
import SeriesInListPage from './Pages/SeriesInListPage';
import SearchResultsPage from './Pages/SearchResultsPage';

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
          <Route path="/signUp" element={<SignUpPage />} />
          <Route path="/myLists" element={<ListsPage />}/>
          <Route path="/series/" element={<SeriesPage />}/>
          <Route path="myLists/series" element={<SeriesInListPage />}/>
          <Route path="/SearchResults/:inputVal" element={<SearchResultsPage />}/>
        </Routes>
    </Router>
  );
}

export default App;
