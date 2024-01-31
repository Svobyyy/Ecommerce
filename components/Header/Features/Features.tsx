import { RootState } from "@/store";
import CartIcon from "../../Icons/CartIcon";
import styles from "./Features.module.css";
import Link from "next/link";
import { useSelector } from "react-redux";
import ProfileIcon from "@/components/Icons/ProfileIcon";
import { useSession, signOut } from "next-auth/react";

const Features = () => {
  const { status } = useSession();

  const cartQuantity = useSelector((state: RootState) => state.cart.quantity);

  return (
    <div className={styles.features}>
      <Link href="/cart">
        <div className={styles.cart_wrap}>
          <CartIcon></CartIcon>
          <p>{cartQuantity < 9 ? cartQuantity : "9+"}</p>
        </div>
      </Link>

      {status !== "authenticated" && <Link href="/login" className={styles.log}>Log In</Link>}
      {status === "authenticated" && (
        <>
          <Link href="/profile">
            <ProfileIcon />
          </Link>
          <button onClick={() => signOut()}>Sign out</button>
        </>
      )}
    </div>
  );
};

export default Features;
