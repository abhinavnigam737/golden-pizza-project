import React from 'react';
import { motion } from 'framer-motion'; // We import the motion component for animations

// This component receives the list of 'offers' from App.js
export default function Hero({ offers }) {
  // A safety check: if there are no offers, don't render anything.
  if (!offers || offers.length === 0) return null;

  // We'll just display the first offer from the list.
  const mainOffer = offers[0];

  return (
    <section className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center gap-8">
        
        {/* Left side: Animated text content */}
        <motion.div
          // Animation: slide in from the left and fade in
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 text-center md:text-left"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-4">{mainOffer.title}</h2>
          <p className="text-xl mb-6">{mainOffer.description}</p>
          <a href="#menu" className="bg-primary text-secondary font-bold py-3 px-8 rounded-full text-lg hover:bg-yellow-300 transition-colors">
            View Menu
          </a>
        </motion.div>

        {/* Right side: Animated image */}
        <motion.div
          // Animation: scale up and fade in
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2"
        >
          <img src={mainOffer.imageUrl} alt={mainOffer.title} className="rounded-lg shadow-2xl w-full" />
        </motion.div>

      </div>
    </section>
  );
}
