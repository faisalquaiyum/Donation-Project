import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import Leaderboard from './components/Leaderboard';
import Navbar from './components/Navbar';

function App() {
  return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;