import cartSlice from "@/Slices/cartSlice";
import productsSlice from "@/Slices/productsSlice";
import { configureStore } from "@reduxjs/toolkit";


const store = configureStore({
  reducer: { 
    products: productsSlice.reducer,
    cart: cartSlice.reducer 
  },
});

export type RootState = ReturnType<typeof store.getState>

export default store;
