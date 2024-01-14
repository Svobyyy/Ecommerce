import styles from "./Header.module.css";
import Features from "./Features/Features";
import Link from "next/link";

const Header = () => {
  return (
    <nav className={styles.line}>
      <header className={styles.header}>
        <Link href="/" className={styles.title}>ShopWithUs</Link>
        <Features/>
      </header>
    </nav>
  );
};

export default Header;
