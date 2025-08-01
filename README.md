# Donation Project Portal

A MERN stack donation portal with dashboard as default route, login/signup, and dynamic leaderboard.

## Setup Instructions

## Project Structure
```
intern-portal/
├── client/                     # React frontend
│   ├── src/
│   │   ├── components/
│   │   │   ├── Login.jsx
│   │   │   ├── Signup.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   ├── Leaderboard.jsx
│   │   │   └── Navbar.jsx
│   │   ├── context/
│   │   │   ├── AppContext.js
│   │   │   └── AppState.jsx
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── package.json
│   └── tailwind.config.js
├── server/                     # Node.js/Express backend
│   ├── routes/
│   │   └── user.js
│   ├── models/
│   │   └── User.js
│   ├── server.js
│   └── package.json
└── README.md

```

### Frontend (Vercel)
1. Navigate to `client/`
2. Install dependencies: `npm install`
3. Run locally: `npm run dev`
4. Deploy to Vercel:
   - Push to GitHub
   - Connect to Vercel
   - Set environment variable: `VITE_API_URL=https://your-render-backend-url`

### Backend (Render)
1. Navigate to `server/`
2. Install dependencies: `npm install`
3. Set up MongoDB (use MongoDB Atlas or local)
4. Create `.env` file with `MONGODB_URI=your_mongodb_connection_string`
5. Run locally: `npm run dev`
6. Seed dummy data: `curl -X POST http://localhost:5000/api/users/seed`
7. Deploy to Render:
   - Push to GitHub
   - Create new web service in Render
   - Set environment variable: `MONGODB_URI`

## Features
- Default route to dashboard (no login required)
- Login/Signup pages (dummy, no auth)
- Dashboard with name, referral code, donations, and static rewards
- Dynamic leaderboard fetched from MongoDB
- Responsive design with Tailwind CSS
- React Icons for UI elements
- Context API for state management
- MongoDB for storing leaderboard data

## Deployment
- Frontend: Deployed on Vercel
- Backend: Deployed on Render
- Database: MongoDB Atlas (free tier)

## API Endpoints
- `GET /api/users/me`: Returns dummy user data
- `GET /api/users/leaderboard`: Returns top 5 users by donations
- `POST /api/users/seed`: Seeds dummy leaderboard data

Developed by **Md Faisal Quaiyum**
