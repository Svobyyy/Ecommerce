import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Product } from "./productsSlice";

export type ProductCart = {
  id: string;
  name: string;
  quantity: number;
  size?: string;
  img: string;
  price: number;
  type: string;
};

type initial = {
  cartData: ProductCart[];
  quantity: number;
  totalAmount: number;
};

const initialState: initial = {
  cartData: [],
  quantity: 0,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart(state, action: PayloadAction<ProductCart>) {
      const item = state.cartData.find(
        (items) => items.id === action.payload.id
      );

      item ? item.quantity++ : state.cartData.push(action.payload);
      state.quantity++;
      state.totalAmount += action.payload.price;
    },
    removeCart(
      state,
      action: PayloadAction<{
        removeId: string;
        price: number;
        quantity: number;
      }>
    ) {
      const itemRemove = state.cartData.find(
        (items) => items.id === action.payload.removeId
      );

      itemRemove &&
        ((state.quantity -= itemRemove.quantity),
        (state.totalAmount -= itemRemove.quantity * itemRemove.price));

      state.cartData = state.cartData.filter((data) => data !== itemRemove);
    },
    increase(state, action: PayloadAction<string>) {
      const item = state.cartData.find((items) => items.id === action.payload);
      item &&
        (item.quantity++, state.quantity++, (state.totalAmount += item?.price));
    },
    decrease(state, action: PayloadAction<string>) {
      const item = state.cartData.find((items) => items.id === action.payload);

      item &&
        (item.quantity--, state.quantity--, (state.totalAmount -= item?.price));
    },

    setInitial(
      state,
      action: PayloadAction<{
        cartData: ProductCart[];
        quantity: number;
        totalAmount: number;
      }>
    ) {
      state.cartData = action.payload.cartData;
      state.quantity = action.payload.quantity;
      state.totalAmount = action.payload.totalAmount;
    },
  },
});

export default cartSlice;
export const { addCart, removeCart, increase, decrease, setInitial } =
  cartSlice.actions;
