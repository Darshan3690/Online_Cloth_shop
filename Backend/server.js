// server.js
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './Models/db.js';
import AuthRouter from './routes/AuthRouter.js';

dotenv.config();
connectDB();

const app = express();

// CORS Configuration ✅
const corsOptions = {
    origin: ["http://localhost:5176"], // Allow your React app URL
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true
};
app.use(cors(corsOptions));

// Other middlewares
app.use(bodyParser.json());

// Routes
app.use('/auth', AuthRouter);

// Ping route
app.get('/ping', (req, res) => {
    res.send('PONG');
});

// Start server
const PORT = process.env.PORT || 5000; // Make sure you're starting backend on port 5000
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
