import { useContext } from 'react';
import AppContext from '../context/AppContext';
import { FaGift, FaMoneyBillWave, FaCode } from 'react-icons/fa';

const Dashboard = () => {
  const { user } = useContext(AppContext);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Welcome, {user?.name || 'Intern'}!</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <FaCode className="mr-2" /> Your Referral Code
            </h2>
            <p className="text-lg">{user?.referralCode || 'referal123'}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <FaMoneyBillWave className="mr-2" /> Total Donations Raised
            </h2>
            <p className="text-lg">${user?.donations || 0}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg md:col-span-2">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <FaGift className="mr-2" /> Rewards & Unlockables
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold">Bronze Tier</h3>
                <p>Unlocked at $100</p>
                <p className="text-sm text-gray-600">Exclusive Badge</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold">Silver Tier</h3>
                <p>Unlocked at $500</p>
                <p className="text-sm text-gray-600">Custom Profile</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold">Gold Tier</h3>
                <p>Unlocked at $1000</p>
                <p className="text-sm text-gray-600">VIP Access</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
