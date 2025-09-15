import React from 'react';
import { MapPin } from 'lucide-react'; // An icon for the locations

// This component receives the list of 'branches' and the 'shopName' from App.js
export default function Footer({ branches, shopName }) {
  return (
    <footer className="bg-secondary text-gray-300 pt-12 pb-8">
      <div className="container mx-auto px-4">
        
        {/* Title for the branches section */}
        <h3 className="text-2xl font-bold text-center text-primary mb-8">Our Branches</h3>
        
        {/* A responsive grid to display the branch addresses */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {/* We loop through each branch in the list */}
          {branches.map((branch, index) => (
            <div key={index} className="flex gap-4">
              <MapPin className="text-primary mt-1 flex-shrink-0" size={20} />
              <div>
                <h4 className="font-bold">{branch.locationName}</h4>
                <p className="text-sm text-gray-400">{branch.address}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Copyright notice at the very bottom */}
        <div className="text-center text-gray-500 border-t border-gray-700 pt-6">
          &copy; {new Date().getFullYear()} {shopName}. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
