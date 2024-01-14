import { Product } from "@/Slices/productsSlice";
import styles from "./LinkProduct.module.css";
import Link from "next/link";

const LinkProduct = ({ data }: { data: Product }) => {
  return (
    <div className={styles.header}>
      <p>
        <Link href="/"> Home </Link>/
        <Link href={`/products/${data.type.toLowerCase()}`}> {data.type} </Link>
        / {data.brand} /
        <span> {data.name}</span>
      </p>
    </div>
  );
};

export default LinkProduct;
