import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Signup from './components/Signup';

import { useAuthContext } from './hooks/useAuthContext';

function App() {
  const { state } = useAuthContext();

  const user = state.user;

  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path="/" element={user ? <Home /> : <Navigate to="/login" />} />
            <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
            <Route path="/signup" element={!user ? <Signup /> : <Navigate to="/" />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
