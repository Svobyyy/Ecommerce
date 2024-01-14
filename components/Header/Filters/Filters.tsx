import Link from "next/link";
import styles from "./Filters.module.css";

const Filters = () => {
  return (
    <div className={styles.background}>
      <ul className={styles.filters}>
        <li>
          <Link href="/products/sneakers">Sneakers</Link>
        </li>
        <li>
          <Link href="/products/apparel">Apparel</Link>
        </li>
        <li>
          <Link href="/products/accessories">Accessories</Link>
        </li>
      </ul>
    </div>
  );
};

export default Filters;
