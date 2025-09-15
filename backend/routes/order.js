import express from 'express';
import Order from '../models/order.js'; // We need the Order blueprint to create a new order

const router = express.Router();

// This handles POST requests to /api/orders
// It receives order data from the website and saves it to the database
router.post('/', async (req, res) => {
  try {
    // Destructure the order details from the request body sent by the frontend
    const { customerName, customerAddress, items, totalPrice } = req.body;

    // Create a new order document using our Order model
    const newOrder = new Order({
      customerName,
      customerAddress,
      items,
      totalPrice,
    });

    // Save the new order to the database
    const savedOrder = await newOrder.save();
    
    // Send a success response back to the website with the saved order data
    // Status 201 means "Created"
    res.status(201).json(savedOrder);

  } catch (err) {
    // If an error occurs, log it and send a server error status
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

export default router;
