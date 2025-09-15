import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import menuRoutes from './routes/menu.js';
import shopInfoRoutes from './routes/shopInfo.js';
import orderRoutes from './routes/orders.js';
import paymentRoutes from './routes/payment.js';

// Load environment variables from .env file
dotenv.config();
// Connect to the database
connectDB();

const app = express();

// Middlewares to allow cross-origin requests and parse JSON
app.use(cors());
app.use(express.json());

// API Routes
app.use('/api/menu', menuRoutes);
app.use('/api/shop-info', shopInfoRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/payment', paymentRoutes);

// Define the port from environment variables or default to 5001
const PORT = process.env.PORT || 5001;

// Start the server
app.listen(PORT, () => console.log(`✅ Backend server running on http://localhost:${PORT}`));
