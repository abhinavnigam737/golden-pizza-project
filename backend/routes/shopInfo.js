import express from 'express';
import ShopInfo from '../models/shopInfo.js'; // We need the ShopInfo blueprint

const router = express.Router();

// This handles GET requests to /api/shop-info
// It's designed to fetch the single document containing all shop details
router.get('/', async (req, res) => {
  try {
    // There will only ever be one document for ShopInfo, so we use findOne()
    const info = await ShopInfo.findOne();
    
    // If for some reason the info isn't found, send an error
    if (!info) {
        return res.status(404).json({ msg: 'Shop information not found' });
    }
    
    // Send the found information back to the client as JSON
    res.json(info);
  } catch (err) {
    // If an error occurs, log it and send a server error status
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

export default router;
