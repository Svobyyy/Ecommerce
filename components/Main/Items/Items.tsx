import styles from "./Items.module.css";
import Item from "@/components/UI/Item/Item";
import { Product } from "@/Slices/productsSlice";

const Items = ({
  randomId,
  filterBy,
  productsData,
}: {
  randomId: string;
  filterBy: string;
  productsData: Product[];
}) => {
  return (
    <>
      <ul className={styles.Items} key={randomId}>
        {productsData
          .filter(
            (data: Product) => true === data[`${filterBy}` as keyof Product]
          )
          .map((data: Product) => {
            return <Item data={data} key={data.id + randomId} />;
          })}
      </ul>
    </>
  );
};

export default Items;
