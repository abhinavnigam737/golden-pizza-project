import React from 'react';
import { Phone, Pizza } from 'lucide-react'; // We use lucide-react for clean icons

// This is a simple "presentational" component. It just receives data (props)
// and displays it. In this case, it receives the 'phoneNumber'.
export default function Header({ phoneNumber }) {
  return (
    // 'sticky top-0 z-20' makes the header stick to the top of the screen when scrolling
    <header className="bg-secondary text-white shadow-md sticky top-0 z-20">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        
        {/* Left side: Logo and Shop Name */}
        <div className="flex items-center gap-2">
          <Pizza className="text-primary" size={32} />
          <h1 className="text-2xl font-extrabold text-primary">Golden Pizza</h1>
        </div>

        {/* Right side: Clickable "Order Now" button */}
        <a 
          href={`tel:${phoneNumber}`} 
          className="flex items-center gap-2 bg-primary text-secondary px-4 py-2 rounded-full font-bold hover:bg-yellow-300 transition-colors"
        >
          <Phone size={18} />
          <span>Order Now</span>
        </a>

      </div>
    </header>
  );
}
