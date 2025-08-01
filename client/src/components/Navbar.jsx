import { Link } from 'react-router-dom';
import { FaHome, FaTrophy, FaSignInAlt } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-xl font-bold">
          Intern Portal
        </Link>
        <div className="flex space-x-4">
          <Link to="/" className="text-white flex items-center">
            <FaHome className="mr-1" /> Dashboard
          </Link>
          <Link to="/leaderboard" className="text-white flex items-center">
            <FaTrophy className="mr-1" /> Leaderboard
          </Link>
          <Link to="/login" className="text-white flex items-center">
            <FaSignInAlt className="mr-1" /> Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;