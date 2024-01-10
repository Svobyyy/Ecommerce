import { Product } from "@/Slices/productsSlice";
import styles from "./Detail.module.css";

const Detail = ({ data, exists }: { data: Product; exists: string }) => {
  return (
    <>
      {data[exists as keyof Product] && (
        <div className={styles.details_space}>
          <p>{exists.charAt(0).toUpperCase() + exists.slice(1)}</p>
          <p>{data[exists as keyof Product]}</p>
        </div>
      )}
    </>
  );
};

export default Detail;
