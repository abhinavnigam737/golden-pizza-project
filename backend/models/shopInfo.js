import mongoose from 'mongoose';

// Blueprint for a single branch location
const branchSchema = new mongoose.Schema({
  locationName: { type: String, required: true },
  address: { type: String, required: true },
});

// Blueprint for a special offer
const offerSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String }, // Optional image for the offer
});

// The main blueprint for all your shop's information
const shopInfoSchema = new mongoose.Schema({
  shopName: { type: String, required: true },
  primaryPhoneNumber: { type: String, required: true },
  branches: [branchSchema], // A list of all your branches
  specialOffers: [offerSchema] // A list of your special offers
});

// Create the model from the blueprint
const ShopInfo = mongoose.model('ShopInfo', shopInfoSchema);

export default ShopInfo;
