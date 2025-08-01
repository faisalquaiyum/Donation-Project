import { Link, useNavigate } from "react-router-dom";
import { FaUserPlus } from "react-icons/fa";
import { useContext } from "react";
import AppContext from "../context/AppContext";

const Signup = () => {
  const { setUser } = useContext(AppContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Dummy signup - redirect to Dashboard
    setUser({ name: "faiz", referralCode: "faiz123", donations: 500 });
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center flex items-center justify-center">
          <FaUserPlus className="mr-2" /> Sign Up
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              className="w-full p-2 border rounded mt-1"
              placeholder="Enter your name"
              required
            />
          </div>
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
            Sign Up
          </button>
          <p className="mt-4 text-center">
            Already have an account?{" "}
            <Link to="/" className="text-gray-800 font-semibold">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
