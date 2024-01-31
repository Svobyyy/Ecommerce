import cartSlice from "@/Slices/cartSlice";
import { configureStore } from "@reduxjs/toolkit";


const store = configureStore({
  reducer: { 
    cart: cartSlice.reducer 
  },
});

export type RootState = ReturnType<typeof store.getState>

export default store;
