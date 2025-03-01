import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the shape of a cart item
interface CartItem {
  id: number;
  name: string;
  price: number;
  img: string;
  quantity: number;
}

// Define the shape of the cart state
interface CartState {
  items: CartItem[];
  totalQuantity: number;
  totalPrice: number;
}

// Initial state
const initialState: CartState = {
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Add item to cart or increase quantity if already in cart
    addToCart: (state, action: PayloadAction<Omit<CartItem, "quantity">>) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      state.totalQuantity += 1;
      state.totalPrice += action.payload.price;
    },

    // Increment item quantity
    increment: (state, action: PayloadAction<number>) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item) {
        item.quantity += 1;
        state.totalQuantity += 1;
        state.totalPrice += item.price;
      }
    },

    // Decrement item quantity or remove if only 1 left
    decrement: (state, action: PayloadAction<number>) => {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload
      );
      if (itemIndex !== -1) {
        const item = state.items[itemIndex];
        if (item.quantity > 1) {
          item.quantity -= 1;
          state.totalQuantity -= 1;
          state.totalPrice -= item.price;
        } else {
          state.totalQuantity -= 1;
          state.totalPrice -= item.price;
          state.items.splice(itemIndex, 1); // Remove item from array
        }
      }
    },

    // Remove item from cart completely
    removeItem: (state, action: PayloadAction<number>) => {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload
      );
      if (itemIndex !== -1) {
        const item = state.items[itemIndex];
        state.totalQuantity -= item.quantity;
        state.totalPrice -= item.price * item.quantity;
        state.items.splice(itemIndex, 1); // Remove item from array
      }
    },
  },
});

// Export actions
export const { addToCart, increment, decrement, removeItem } =
  cartSlice.actions;

// Export reducer
export default cartSlice.reducer;
