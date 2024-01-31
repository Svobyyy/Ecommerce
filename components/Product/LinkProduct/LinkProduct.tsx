import { Product } from "@/Slices/productsSlice";
import styles from "./LinkProduct.module.css";
import Link from "next/link";

const LinkProduct = ({ product }: { product: Product }) => {
  const { type, name, brand } = product;

  return (
    <div className={styles.header}>
      <p>
        <Link href="/"> Home </Link>/
        <Link href={`/products/${type.toLowerCase()}`}> {type} </Link>/ {brand}{" "}
        /<span> {name}</span>
      </p>
    </div>
  );
};

export default LinkProduct;
