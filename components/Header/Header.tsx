import styles from "./Header.module.css";
import Features from "./Features/Features";
import Search from "./Search/Search";
import Link from "next/link";

const Header = () => {
  return (
    <nav className={styles.line}>
      <div className={styles.header}>
        <Link href="/">Idochi</Link>
        <Search></Search>

        <Features></Features>
      </div>
    </nav>
  );
};

export default Header;
