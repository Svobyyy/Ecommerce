import styles from "./LinkProduct.module.css";
import Link from "next/link";

const LinkProduct = ({ data }: any) => {
  return (
    <div className={styles.header}>
      <p>
        <Link href="/"> Home </Link>/
        <Link href={`/products/${data.type.toLowerCase()}`}> {data.type} </Link>/
        <Link href={`/products/brand/${data.brand}`}> {data.brand} </Link>/
        <span> {data.name}</span>
      </p>
    </div>
  );
};

export default LinkProduct;
