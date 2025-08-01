import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AppContext from './AppContext';

const AppState = ({ children }) => {
  const [user, setUser] = useState(null);
  const [leaderboard, setLeaderboard] = useState([]);

  // Fetch user
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/users/me`);
        setUser(res.data);
      } catch (err) {
        console.error('Error fetching user:', err);
      }
    };

    fetchUser();
  }, []);

  // Fetch leaderboard
  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/users/leaderboard`);
        setLeaderboard(res.data);
      } catch (err) {
        console.error('Error fetching leaderboard:', err);
      }
    };

    fetchLeaderboard();
  }, []);

  return (
    <AppContext value={{ user, setUser, leaderboard }}>
      {children}
    </AppContext>
  );
};

export default AppState;
