import express from 'express';
import Razorpay from 'razorpay';
import crypto from 'crypto';
import dotenv from 'dotenv';

// Load environment variables for security
dotenv.config();

const router = express.Router();

// Initialize Razorpay with your keys from the .env file
const razorpayInstance = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// This handles POST requests to /api/payment/create-order
// It creates a payment order on Razorpay's servers
router.post('/create-order', async (req, res) => {
    try {
        const { amount } = req.body; // Amount in rupees from the frontend

        // Razorpay expects the amount in the smallest currency unit (paise for INR)
        const options = {
            amount: Number(amount * 100),
            currency: 'INR',
            receipt: crypto.randomBytes(10).toString('hex'), // A unique receipt ID
        };

        razorpayInstance.orders.create(options, (error, order) => {
            if (error) {
                console.error("Error creating Razorpay order:", error);
                return res.status(500).json({ message: 'Something went wrong' });
            }
            res.status(200).json(order);
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// This handles POST requests to /api/payment/verify-payment
// It securely verifies the payment signature
router.post('/verify-payment', (req, res) => {
    try {
        const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;
        
        const sign = razorpay_order_id + '|' + razorpay_payment_id;
        
        const expectedSign = crypto
            .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
            .update(sign.toString())
            .digest('hex');

        if (razorpay_signature === expectedSign) {
            // Payment is successful and verified
            return res.status(200).json({ message: 'Payment verified successfully' });
        } else {
            // Payment verification failed
            return res.status(400).json({ message: 'Invalid signature sent!' });
        }
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});


export default router;
