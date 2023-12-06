import cartSlice from "@/Slices/cartSlice";
import productsSlice from "@/Slices/productsSlice";
import { configureStore } from "@reduxjs/toolkit";

//tvoříme store
const store: any = configureStore({
  reducer: { 
    products: productsSlice.reducer,
    cart: cartSlice.reducer 
  },
});



export default store;
