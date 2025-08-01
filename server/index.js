const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors');
const userRoutes = require('./routes/user');


const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.error(err));

app.use('/api/users', userRoutes);

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));