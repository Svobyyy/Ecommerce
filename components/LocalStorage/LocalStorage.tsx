import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setInitial } from "@/Slices/cartSlice";

const LocalStorage = () => {
  const dispatch = useDispatch();

  const { cartData, quantity, totalAmount } = useSelector(
    (state: any) => state.cart
  );

  const [local, setLocal] = useState(false);


  useEffect(() => {
    local && (
    localStorage.setItem("cartData", JSON.stringify(cartData)),
    localStorage.setItem("quantity", quantity),
    localStorage.setItem("totalAmount", totalAmount)
    )
   

  }, [cartData]);

  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem("cartData") || "[]");
    const quantity = parseInt(localStorage.getItem("quantity") || "0");
    const totalAmount = parseInt(localStorage.getItem("totalAmount") || "0");

    dispatch(
      setInitial({
        cartData: cartData,
        quantity: quantity,
        totalAmount: totalAmount,
      })
    );

    setLocal(true)
  }, []);



  return <></>;
};

export default LocalStorage;
