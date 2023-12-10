import { useEffect } from "react";
import { useSelector } from "react-redux";


const LocalStorage = () => {

  useEffect(() => {
    console.log(JSON.parse(localStorage.getItem("cartData") || '[]'))
    console.log(parseInt(localStorage.getItem("quantity") || '0'))
    console.log(parseInt(localStorage.getItem("totalAmount") || '0'))

  }, []);

  return <></>
};

export default LocalStorage;
