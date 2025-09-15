import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Load environment variables from the .env file
dotenv.config();

// Function to connect to the MongoDB database
const connectDB = async () => {
  try {
    // Attempt to connect using the URI from your environment variables
    const conn = await mongoose.connect(process.env.MONGO_URI);
    // If successful, log a confirmation message
    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    // If there is an error, log the error message and exit the process
    console.error(`❌ Error connecting to MongoDB: ${error.message}`);
    process.exit(1); // Exit with a failure code
  }
};

export default connectDB;
