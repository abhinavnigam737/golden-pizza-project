import mongoose from 'mongoose';

// A small blueprint to define the structure of each item within an order
const orderedItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  size: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, default: 1 }
});

// The main blueprint for a customer's order
const orderSchema = new mongoose.Schema({
  customerName: { type: String, required: true },
  customerAddress: { type: String, required: true },
  items: [orderedItemSchema], // A list of all the items the customer ordered
  totalPrice: { type: Number, required: true },
  orderDate: { type: Date, default: Date.now }, // Automatically records the time of the order
  status: { type: String, default: 'Pending' } // e.g., Pending, In Progress, Delivered
});

// Create the model from the blueprint
const Order = mongoose.model('Order', orderSchema);

export default Order;
