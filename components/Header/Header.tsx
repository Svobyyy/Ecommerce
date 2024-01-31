import styles from "./Header.module.css";
import Features from "./Features/Features";
import Title from "../UI/Title/Title";

const Header = () => {
  return (
    <nav className={styles.line}>
      <header className={styles.header}>
        <Title />
        <Features />
      </header>
    </nav>
  );
};

export default Header;
