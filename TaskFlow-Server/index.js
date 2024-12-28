// server.js
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoutes = require('./src/routes/authRoutes');
const taskRoutes = require('./src/routes/taskRoutes');
const cors = require('cors');


dotenv.config();
console.log('MONGO_URI from .env:', process.env.MONGO_URI);


const app = express();

app.use(cors({
  origin: 'http://localhost:5173', 
  credentials: true,
}));

app.get('/',(req,res)=>{
  res.send("<h1>Hello </h1>")
})

app.use(express.json());

app.use('/api/auth', authRoutes);  
app.use('/api/tasks', taskRoutes); 

mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
