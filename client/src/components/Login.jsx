import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaSignInAlt } from 'react-icons/fa';
import AppContext from '../context/AppContext';

const Login = () => {
  const { setUser } = useContext(AppContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Dummy login - set context and navigate
    setUser({ name: 'faiz', referralCode: 'faiz123', donations: 500 });
    navigate('/');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center flex items-center justify-center">
          <FaSignInAlt className="mr-2" /> Login
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              className="w-full p-2 border rounded mt-1"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              className="w-full p-2 border rounded mt-1"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gray-800 text-white p-2 rounded hover:bg-gray-600"
          >
            Login
          </button>
          <p className="mt-4 text-center">
            Don't have an account? <Link to="/signup" className="text-gray-800 font-semibold">Sign Up</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;