import FavoriteIcon from "../../Icons/FavoriteIcon";
import CartIcon from "../../Icons/CartIcon";

import styles from "./Features.module.css";
import Link from "next/link";
import { useSelector } from "react-redux";

const Features = () => {
  const cartQuantity = useSelector((state: any) => state.cart.quantity);

  return (
    <div className={styles.features}>
      <Link href="/favorites" aria-label="favorites">
        <FavoriteIcon></FavoriteIcon>
      </Link>

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
