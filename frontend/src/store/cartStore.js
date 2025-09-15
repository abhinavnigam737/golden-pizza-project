import { create } from 'zustand';

// This function creates a unique ID for each cart item based on its database ID and size.
// This prevents "Regular Margherita" and "Large Margherita" from being treated as the same item.
const getUniqueId = (item) => `${item._id}-${item.size}`;

// This is where we create our "store". It holds the state (the items list)
// and the actions that can modify that state.
export const useCartStore = create((set, get) => ({
  // --- STATE ---
  items: [], // The initial state is an empty array of items.

  // --- ACTIONS ---

  // Action to add an item to the cart.
  addItem: (item) => set((state) => {
    const uniqueId = getUniqueId(item);
    const existingItem = state.items.find(i => i.id === uniqueId);

    // If the item already exists in the cart, just increase its quantity.
    if (existingItem) {
      return {
        items: state.items.map(i =>
          i.id === uniqueId ? { ...i, quantity: i.quantity + 1 } : i
        ),
      };
    }
    // If it's a new item, add it to the cart with a quantity of 1.
    return { items: [...state.items, { ...item, id: uniqueId, quantity: 1 }] };
  }),

  // Action to completely remove an item from the cart.
  removeItem: (itemId) => set((state) => ({
    items: state.items.filter(i => i.id !== itemId)
  })),

  // Action to increase the quantity of a specific item.
  increaseQuantity: (itemId) => set((state) => ({
    items: state.items.map(i => i.id === itemId ? { ...i, quantity: i.quantity + 1 } : i)
  })),

  // Action to decrease the quantity, but not below 1.
  decreaseQuantity: (itemId) => set((state) => ({
    items: state.items.map(i => i.id === itemId && i.quantity > 1 ? { ...i, quantity: i.quantity - 1 } : i)
  })),

  // Action to empty the entire cart, usually after a successful order.
  clearCart: () => set({ items: [] }),

  // --- SELECTOR ---
  // A function to calculate the total price of all items in the cart.
  // The 'get()' function allows us to access the current state.
  getTotalPrice: () => get().items.reduce((total, item) => total + (item.price * item.quantity), 0),
}));
