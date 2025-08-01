const express = require("express");
const router = express.Router();
const User = require("../models/user");

// Get single user data
router.get("/me", (req, res) => {
  res.json({
    name: "Faisal",
    referralCode: "faisal123",
    donations: 500,
  });
});

// Get leaderboard data
router.get("/leaderboard", async (req, res) => {
  try {
    const users = await User.find().sort({ donations: -1 }).limit(5);
    res.json(users);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// Seed dummy data (call this once manually or via script)
router.post("/seed", async (req, res) => {
  try {
    await User.deleteMany({});
    const dummyData = [
      { name: "Faisal", referralCode: "faisal2025", donations: 1200 },
      { name: "Kaif", referralCode: "kaif2025", donations: 900 },
      { name: "Sahil", referralCode: "sahil2025", donations: 750 },
      { name: "Saquib", referralCode: "saquib2025", donations: 600 },
      { name: "Hemat", referralCode: "hemat2025", donations: 450 },
    ];
    await User.insertMany(dummyData);
    res.json({ message: "Dummy data seeded" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
