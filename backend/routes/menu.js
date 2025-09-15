import express from 'express';
import MenuItem from '../models/menuItem.js'; // We need the MenuItem blueprint to find the data

const router = express.Router();

// This handles GET requests to /api/menu
// It's designed to fetch all menu items from the database
router.get('/', async (req, res) => {
  try {
    // Find all documents in the MenuItem collection
    const menuItems = await MenuItem.find();
    // Send the found items back to the client as JSON
    res.json(menuItems);
  } catch (err) {
    // If an error occurs, log it and send a server error status
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

export default router;
