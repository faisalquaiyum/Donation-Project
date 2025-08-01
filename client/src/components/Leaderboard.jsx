import { useContext, useEffect, useState } from 'react';
import { FaTrophy } from 'react-icons/fa';
import AppContext from '../context/AppContext';

const Leaderboard = () => {
  const {leaderboard} = useContext(AppContext)

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 flex items-center">
          <FaTrophy className="mr-2" /> Leaderboard
        </h1>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="grid grid-cols-3 gap-4 font-semibold mb-4">
            <div>Rank</div>
            <div>Name</div>
            <div>Donations</div>
          </div>
          {leaderboard.length > 0 ? (
            leaderboard.map((user, index) => (
              <div key={index} className="grid grid-cols-3 gap-4 py-2 border-t">
                <div>{index + 1}</div>
                <div>{user.name}</div>
                <div>${user.donations}</div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-600">Loading leaderboard...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;