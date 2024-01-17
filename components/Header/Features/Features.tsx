import { RootState } from "@/store";
import CartIcon from "../../Icons/CartIcon";

import styles from "./Features.module.css";
import Link from "next/link";
import { useSelector } from "react-redux";

const Features = () => {
  const cartQuantity = useSelector((state: RootState) => state.cart.quantity);

  return (
    <div className={styles.features}>
      <Link href="/cart">
        <div className={styles.cart_wrap}>
          <CartIcon></CartIcon>
          <p>{cartQuantity < 9 ? cartQuantity : "9+"}</p>
        </div>
      </Link>
    </div>
  );
};

export default Features;
