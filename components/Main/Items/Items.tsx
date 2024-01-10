import styles from "./Items.module.css";
import { useSelector } from "react-redux";
import Item from "@/components/UI/Item/Item";
import { Product } from "@/Slices/productsSlice";
import { RootState } from "@/store";

const Items = ({
  randomId,
  filterBy,
}: {
  randomId: string;
  filterBy: string;
}) => {
  const productsData = useSelector((state: RootState) => state.products);
  return (
    <>
      <ul className={styles.Items} key={randomId}>
        {productsData
          .filter((data: Product) => true === data[`${filterBy}` as keyof Product])
          .map((data: Product) => {
            return <Item data={data} key={data.id + randomId} />;
          })}
      </ul>
    </>
  );
};

export default Items;
