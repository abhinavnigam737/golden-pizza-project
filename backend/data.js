// This file contains all the static data for the shop and menu.

// Your shop's core information, transcribed from your images and instructions.
export const shopData = {
  shopName: "Golden Pizza",
  primaryPhoneNumber: "9335202980",
  branches: [
    { locationName: "Main Branch", address: "Belhara, Fatehpur, Barabanki, UP - 225305" },
    { locationName: "Masouli Chouraha", address: "K.K. Market Near Pashu Bazar, Barabanki - 225204" },
    { locationName: "Fatehpur", address: "Gani Haider Complex, Munshiganj Bazar, Fatehpur (Barabanki) - 225305" },
    { locationName: "Mahmudabad", address: "Near SBI Bank, Maa Sankatadevi Mandir Road, Mahmudabad (Sitapur) - 261203" },
    { locationName: "Dewa", address: "Rafeek Tower ke Samne, Fatehpur Road, Dewa (Barabanki) - 225301" },
    { locationName: "Biswan", address: "Hakeem Market, Near Patthar Shivala, Biswan (Sitapur) - 261201" }
  ],
  specialOffers: [
    { 
      title: "Special Offer", 
      description: "Buy 3 pizza get 1 Free 170/- Above", 
      imageUrl: "https://placehold.co/600x400/f8c102/333?text=Special+Offer!" 
    }
  ]
};

// Your entire menu, transcribed from your images.
export const menuData = [
  // --- Simple Veg ---
  { name: "Double Cheese Margreta", category: "Simple Veg", pricing: [{ size: "Regular", price: 120 }, { size: "Medium", price: 200 }, { size: "Large", price: 250 }], imageUrl: "https://placehold.co/400x250/f8c102/333?text=Margreta" },
  { name: "Cheese Capsicum", category: "Simple Veg", pricing: [{ size: "Regular", price: 120 }, { size: "Medium", price: 200 }, { size: "Large", price: 250 }], imageUrl: "https://placehold.co/400x250/f8c102/333?text=Cheese+Capsicum" },
  { name: "Cheese Tomato", category: "Simple Veg", pricing: [{ size: "Regular", price: 120 }, { size: "Medium", price: 200 }, { size: "Large", price: 250 }], imageUrl: "https://placehold.co/400x250/f8c102/333?text=Cheese+Tomato" },
  { name: "Cheese Paneer", category: "Simple Veg", pricing: [{ size: "Regular", price: 120 }, { size: "Medium", price: 200 }, { size: "Large", price: 250 }], imageUrl: "https://placehold.co/400x250/f8c102/333?text=Cheese+Paneer" },

  // --- Veg Delight ---
  { name: "Capsicum Paneer", category: "Veg Delight", description: "Makhni Sauce, Onion, Paneer", pricing: [{ size: "Regular", price: 170 }, { size: "Medium", price: 290 }, { size: "Large", price: 390 }], imageUrl: "https://placehold.co/400x250/f8c102/333?text=Capsicum+Paneer" },
  { name: "Corn", category: "Veg Delight", description: "Sweet Corn, Paneer", pricing: [{ size: "Regular", price: 170 }, { size: "Medium", price: 290 }, { size: "Large", price: 390 }], imageUrl: "https://placehold.co/400x250/f8c102/333?text=Corn+Pizza" },
  { name: "Fresh Country", category: "Veg Delight", description: "Onion, Capsicum, Mushroom", pricing: [{ size: "Regular", price: 170 }, { size: "Medium", price: 290 }, { size: "Large", price: 390 }], imageUrl: "https://placehold.co/400x250/f8c102/333?text=Fresh+Country" },
  { name: "Pasta Pizza", category: "Veg Delight", description: "Creamy Spicy Sauce, Pasta", pricing: [{ size: "Regular", price: 170 }, { size: "Medium", price: 290 }, { size: "Large", price: 390 }], imageUrl: "https://placehold.co/400x250/f8c102/333?text=Pasta+Pizza" },

  // --- Veggi Delight ---
  { name: "Veggi Delight", category: "Veggi Delight", description: "Onion, Tomato, Mushroom", pricing: [{ size: "Regular", price: 210 }, { size: "Medium", price: 310 }, { size: "Large", price: 410 }], imageUrl: "https://placehold.co/400x250/f8c102/333?text=Veggi+Delight" },
  { name: "Baby Corn", category: "Veggi Delight", description: "Baby Corn, Gherkin, Red Paper", pricing: [{ size: "Regular", price: 210 }, { size: "Medium", price: 310 }, { size: "Large", price: 410 }], imageUrl: "https://placehold.co/400x250/f8c102/333?text=Baby+Corn+Pizza" },

  // --- Veg Special ---
  { name: "Peppy Paneer Pizza", category: "Veg Special", description: "Capsicum, Paneer, Red Paper, Cheese", pricing: [{ size: "Regular", price: 250 }, { size: "Medium", price: 350 }, { size: "Large", price: 450 }], imageUrl: "https://placehold.co/400x250/f8c102/333?text=Peppy+Paneer" },
  { name: "Special Form House", category: "Veg Special", description: "Onion, Capsicum, Tomato, Mushroom", pricing: [{ size: "Regular", price: 250 }, { size: "Medium", price: 350 }, { size: "Large", price: 450 }], imageUrl: "https://placehold.co/400x250/f8c102/333?text=Form+House" },
  { name: "Tandoori Special", category: "Veg Special", description: "Tandoori Sauce, Onion, Capsicum, Red Paper, Paneer", pricing: [{ size: "Regular", price: 250 }, { size: "Medium", price: 350 }, { size: "Large", price: 450 }], imageUrl: "https://placehold.co/400x250/f8c102/333?text=Tandoori+Special" },
  { name: "Green Maxican", category: "Veg Special", description: "Onion, Capsicum, Tomato, Jalapeno", pricing: [{ size: "Regular", price: 250 }, { size: "Medium", price: 350 }, { size: "Large", price: 450 }], imageUrl: "https://placehold.co/400x250/f8c102/333?text=Green+Maxican" },
  { name: "Chef's Special", category: "Veg Special", description: "Corn, Capsicum, Jalapeno, Extra Cheese", pricing: [{ size: "Regular", price: 250 }, { size: "Medium", price: 350 }, { size: "Large", price: 450 }], imageUrl: "https://placehold.co/400x250/f8c102/333?text=Chef+Special" },

  // --- Regular Veg Fast ---
  { name: "Golden Pizza", category: "Regular Veg Fast", description: "Corn, Capsicum, Red Paper, Paneer, Black Olive, Mushroom", pricing: [{ size: "Regular", price: 250 }, { size: "Medium", price: 350 }, { size: "Large", price: 450 }], imageUrl: "https://placehold.co/400x250/f8c102/333?text=Golden+Pizza" },
  { name: "Veg Extra Vaganza", category: "Regular Veg Fast", description: "Onion, Tomato, Corn, Mushroom, Capsicum, Jalapeno, Black Olive", pricing: [{ size: "Regular", price: 250 }, { size: "Medium", price: 350 }, { size: "Large", price: 450 }], imageUrl: "https://placehold.co/400x250/f8c102/333?text=Extra+Vaganza" },
  { name: "Chilli Paneer", category: "Regular Veg Fast", description: "Chilly Sauce, Paneer, Capsicum, Jalapeno, Extra Cheese, Red Paper", pricing: [{ size: "Regular", price: 250 }, { size: "Medium", price: 350 }, { size: "Large", price: 450 }], imageUrl: "https://placehold.co/400x250/f8c102/333?text=Chilli+Paneer" },
  { name: "Deluxe Pizza", category: "Regular Veg Fast", description: "Onion, Tomato, Capsicum, Paneer, Mushroom", pricing: [{ size: "Regular", price: 250 }, { size: "Medium", price: 350 }, { size: "Large", price: 450 }], imageUrl: "https://placehold.co/400x250/f8c102/333?text=Deluxe+Pizza" },
  { name: "Spl. Cheese Pizza", category: "Regular Veg Fast", description: "Paneer, Baby Corn, Gherkin, Jalapeno, Red Paper, Mushroom", pricing: [{ size: "Regular", price: 250 }, { size: "Medium", price: 350 }, { size: "Large", price: 450 }], imageUrl: "https://placehold.co/400x250/f8c102/333?text=Spl+Cheese" },
  { name: "Spl. Chilly Pizza", category: "Regular Veg Fast", description: "Capsicum, Red Paper, Yellow Paper, Jalapeno, Extra Cheese", pricing: [{ size: "Regular", price: 250 }, { size: "Medium", price: 350 }, { size: "Large", price: 450 }], imageUrl: "https://placehold.co/400x250/f8c102/333?text=Spl+Chilly" },

  // --- Pizza Mania ---
  { name: "Zingy Parsal Paneer", category: "Pizza Mania", pricing: [{ size: "Standard", price: 35 }], imageUrl: "https://placehold.co/400x250/f8c102/333?text=Zingy+Parsal" },
  { name: "Calzone Pocket", category: "Pizza Mania", pricing: [{ size: "Standard", price: 100 }], imageUrl: "https://placehold.co/400x250/f8c102/333?text=Calzone" },
  { name: "White Cheese Pasta", category: "Pizza Mania", pricing: [{ size: "Standard", price: 110 }], imageUrl: "https://placehold.co/400x250/f8c102/333?text=White+Pasta" },
  { name: "Red Sauce Pasta", category: "Pizza Mania", pricing: [{ size: "Standard", price: 120 }], imageUrl: "https://placehold.co/400x250/f8c102/333?text=Red+Pasta" },
  { name: "Stuffed Garlic Bread", category: "Pizza Mania", pricing: [{ size: "Standard", price: 100 }], imageUrl: "https://placehold.co/400x250/f8c102/333?text=Garlic+Bread" },
  { name: "Garlic Bread", category: "Pizza Mania", pricing: [{ size: "Standard", price: 50 }], imageUrl: "https://placehold.co/400x250/f8c102/333?text=Garlic+Bread" },
  { name: "Onion Pizza", category: "Pizza Mania", pricing: [{ size: "Standard", price: 60 }], imageUrl: "https://placehold.co/400x250/f8c102/333?text=Onion+Pizza" },
  { name: "Tomato Pizza", category: "Pizza Mania", pricing: [{ size: "Standard", price: 60 }], imageUrl: "https://placehold.co/400x250/f8c102/333?text=Tomato+Pizza" },
  { name: "Capsicum Pizza", category: "Pizza Mania", pricing: [{ size: "Standard", price: 60 }], imageUrl: "https://placehold.co/400x250/f8c102/333?text=Capsicum+Pizza" },
  { name: "Single Cheese Pizza", category: "Pizza Mania", pricing: [{ size: "Standard", price: 50 }], imageUrl: "https://placehold.co/400x250/f8c102/333?text=Single+Cheese" },
  { name: "Spicy Corn", category: "Pizza Mania", pricing: [{ size: "Standard", price: 100 }], imageUrl: "https://placehold.co/400x250/f8c102/333?text=Spicy+Corn" },
  { name: "Onion Capsicum", category: "Pizza Mania", pricing: [{ size: "Standard", price: 100 }], imageUrl: "https://placehold.co/400x250/f8c102/333?text=Onion+Capsicum" },
  { name: "Paneer Special", category: "Pizza Mania", pricing: [{ size: "Standard", price: 100 }], imageUrl: "https://placehold.co/400x250/f8c102/333?text=Paneer+Special" },
  { name: "Onion Tomato", category: "Pizza Mania", pricing: [{ size: "Standard", price: 100 }], imageUrl: "https://placehold.co/400x250/f8c102/333?text=Onion+Tomato" },

  // --- Burger ---
  { name: "Classic Veg Burger", category: "Burger", pricing: [{ size: "Standard", price: 40 }], imageUrl: "https://placehold.co/400x250/f8c102/333?text=Veg+Burger" },
  { name: "Classic Veg Tikki Burger", category: "Burger", pricing: [{ size: "Standard", price: 60 }], imageUrl: "https://placehold.co/400x250/f8c102/333?text=Tikki+Burger" },
  { name: "Premium Veg Burger", category: "Burger", pricing: [{ size: "Standard", price: 50 }], imageUrl: "https://placehold.co/400x250/f8c102/333?text=Premium+Burger" },
  { name: "Premium Veg Tikki Burger", category: "Burger", pricing: [{ size: "Standard", price: 70 }], imageUrl: "https://placehold.co/400x250/f8c102/333?text=Premium+Tikki" },
  
  // --- Dessert ---
  { name: "Kulhad Choco Lava Cake", category: "Dessert", pricing: [{ size: "Standard", price: 50 }], imageUrl: "https://placehold.co/400x250/f8c102/333?text=Lava+Cake" },
  { name: "Creamy Kulhad Choco Lava Cake", category: "Dessert", pricing: [{ size: "Standard", price: 70 }], imageUrl: "https://placehold.co/400x250/f8c102/333?text=Creamy+Lava" },
  { name: "Choco Lava Cake", category: "Dessert", pricing: [{ size: "Standard", price: 90 }], imageUrl: "https://placehold.co/400x250/f8c102/333?text=Choco+Lava" },
  { name: "Choco Lava Cake Simple", category: "Dessert", pricing: [{ size: "Standard", price: 80 }], imageUrl: "https://placehold.co/400x250/f8c102/333?text=Simple+Lava" },
  
  // --- Kulhad Pizza ---
  { name: "Tandoori Kulhad Pizza", category: "Kulhad Pizza", pricing: [{ size: "Standard", price: 60 }], imageUrl: "https://placehold.co/400x250/f8c102/333?text=Tandoori+Kulhad" },
  { name: "Makhni Kulhad Pizza", category: "Kulhad Pizza", pricing: [{ size: "Standard", price: 60 }], imageUrl: "https://placehold.co/400x250/f8c102/333?text=Makhni+Kulhad" },
  { name: "Chilly Kulhad Pizza", category: "Kulhad Pizza", pricing: [{ size: "Standard", price: 80 }], imageUrl: "https://placehold.co/400x250/f8c102/333?text=Chilly+Kulhad" },
  
  // --- Side Order ---
  { name: "Veg Pizza Rolls", category: "Side Order", pricing: [{ size: "Standard", price: 40 }], imageUrl: "https://placehold.co/400x250/f8c102/333?text=Veg+Rolls" },
  { name: "Paneer Pizza Rolls", category: "Side Order", pricing: [{ size: "Standard", price: 60 }], imageUrl: "https://placehold.co/400x250/f8c102/333?text=Paneer+Rolls" },
  { name: "Veg Sandwich", category: "Side Order", pricing: [{ size: "Standard
