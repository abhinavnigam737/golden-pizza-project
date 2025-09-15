import mongoose from 'mongoose';

// A small blueprint just for the pricing, since items can have multiple sizes
const pricingSchema = new mongoose.Schema({
  size: { type: String, required: true }, // e.g., 'Regular', 'Medium', 'Large'
  price: { type: Number, required: true },
});

// The main blueprint for a single menu item
const menuItemSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true }, // Each item should have a unique name
  description: { type: String }, // e.g., "Onion, Capsicum, Mushroom"
  category: { type: String, required: true }, // e.g., "Veg Delight", "Burger"
  pricing: [pricingSchema], // A list of prices (Regular, Medium, Large)
  isVeg: { type: Boolean, default: true },
  imageUrl: { type: String }, // Link to a picture of the food
});

// Create the model from the blueprint
const MenuItem = mongoose.model('MenuItem', menuItemSchema);

export default MenuItem;
