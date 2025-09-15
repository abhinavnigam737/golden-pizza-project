import mongoose from 'mongoose';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import MenuItem from './models/menuItem.js';
import ShopInfo from './models/shopInfo.js';
import { menuData, shopData } from './data.js';

// Load environment variables (like your MONGO_URI)
dotenv.config();

// This function handles the entire data import process
const importData = async () => {
  try {
    // First, connect to the database
    await connectDB();

    // Clear any existing data to avoid duplicates
    // This allows you to run the script again safely if you make changes
    await MenuItem.deleteMany();
    await ShopInfo.deleteMany();

    // Insert the new menu data from our data.js file
    await MenuItem.insertMany(menuData);
    
    // Create the single document for our shop's information
    await ShopInfo.create(shopData);

    console.log('✅ Data Imported Successfully!');
    // Exit the script successfully
    process.exit();
  } catch (error) {
    console.error(`❌ Error with data import: ${error}`);
    // Exit the script with an error
    process.exit(1);
  }
};

// Run the import function
importData();
