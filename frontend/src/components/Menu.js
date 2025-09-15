import React from 'react';
import { motion } from 'framer-motion';
import { PlusCircle } from 'lucide-react';
import { useCartStore } from '../store/cartStore'; // Import the cart logic

// This component receives the full list of 'menuItems' from App.js
export default function Menu({ menuItems }) {
  // Get the 'addItem' function from our cart store
  const addItem = useCartStore((state) => state.addItem);

  // This line automatically finds all unique categories from your menu data
  const categories = [...new Set(menuItems.map(item => item.category))];

  // Animation settings for the grid container to make cards appear one after another
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 } // Each card will animate 0.05s after the previous one
    }
  };

  // Animation settings for each individual menu card
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <section id="menu" className="py-12">
      <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-900 dark:text-primary">Our Delicious Menu</h2>
      
      {/* First, we loop through each unique category */}
      {categories.map(category => (
        <div key={category} className="mb-12">
          <h3 className="text-3xl font-bold mb-6 border-b-4 border-primary pb-2">{category}</h3>
          
          {/* Then, we create an animated grid for the items in this category */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible" // The animation starts when the grid scrolls into view
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* We filter and loop through only the items that match the current category */}
            {menuItems.filter(item => item.category === category).map(item => (
              <motion.div
                key={item._id}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden flex flex-col group"
                variants={itemVariants}
              >
                <img src={item.imageUrl} alt={item.name} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="p-6 flex flex-col flex-grow">
                  <h4 className="text-xl font-bold mb-2">{item.name}</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 flex-grow">{item.description}</p>
                  
                  {/* Loop through the different prices (e.g., Regular, Medium, Large) */}
                  <div className="space-y-2 mt-auto">
                    {item.pricing.map(priceInfo => (
                      <div key={priceInfo.size} className="flex justify-between items-center">
                        <span className="font-semibold">{priceInfo.size} - ₹{priceInfo.price}</span>
                        <button
                          // When clicked, add this item with its specific size and price to the cart
                          onClick={() => addItem({ ...item, ...priceInfo })}
                          className="text-primary hover:text-yellow-300 transition-colors"
                          aria-label={`Add ${item.name} (${priceInfo.size}) to cart`}
                        >
                          <PlusCircle size={28} />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      ))}
    </section>
  );
}
