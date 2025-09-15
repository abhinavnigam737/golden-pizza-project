import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ShoppingCart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// We will create these component files in the next steps
import Header from './components/Header';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Cart from './components/Cart';
import Footer from './components/Footer';

// We will also create this state management file
import { useCartStore } from './store/cartStore';

// The main App component
export default function App() {
  // --- State Management ---
  // State to hold shop info (phone, address) from the API
  const [shopInfo, setShopInfo] = useState(null);
  // State to hold all menu items from the API
  const [menuItems, setMenuItems] = useState([]);
  // State to show a loading screen while we fetch data
  const [isLoading, setIsLoading] = useState(true);
  // State to control whether the shopping cart sidebar is open or closed
  const [isCartOpen, setCartOpen] = useState(false);
  // Get the number of items in the cart from our global state
  const { items } = useCartStore();

  // Define the base URL for our backend API
  const API_BASE_URL = 'http://localhost:5001/api';

  // --- Data Fetching ---
  // This effect runs once when the component is first loaded
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch both shop info and menu data at the same time for speed
        const [infoRes, menuRes] = await Promise.all([
          axios.get(`${API_BASE_URL}/shop-info`),
          axios.get(`${API_BASE_URL}/menu`)
        ]);
        // Store the data in our state
        setShopInfo(infoRes.data);
        setMenuItems(menuRes.data);
      } catch (error) {
        console.error("Failed to fetch initial data:", error);
      } finally {
        // Hide the loading screen, whether the fetch succeeded or failed
        setIsLoading(false);
      }
    };
    fetchData();
  }, []); // The empty array [] means this effect only runs once.

  // --- Render Logic ---
  // Show a loading screen while data is being fetched
  if (isLoading) {
    return (
      <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center">
        <div className="text-3xl font-bold text-primary animate-pulse">Golden Pizza</div>
        <p className="mt-2">Loading deliciousness...</p>
      </div>
    );
  }

  // Once loaded, render the full website
  return (
    <div className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 font-sans">
      <Header phoneNumber={shopInfo.primaryPhoneNumber} />
      <Hero offers={shopInfo.specialOffers} />
      <main className="container mx-auto px-4 py-8">
        <Menu menuItems={menuItems} />
      </main>
      <Footer branches={shopInfo.branches} shopName={shopInfo.shopName} />

      {/* Floating Cart Button */}
      <motion.button
        onClick={() => setCartOpen(true)}
        className="fixed bottom-6 right-6 bg-primary text-secondary font-bold p-4 rounded-full shadow-lg z-30"
        aria-label="Open Shopping Cart"
        whileHover={{ scale: 1.1, rotate: 10 }}
        whileTap={{ scale: 0.9 }}
      >
        <ShoppingCart size={28} />
        <AnimatePresence>
          {items.length > 0 && (
            <motion.span
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center font-bold"
