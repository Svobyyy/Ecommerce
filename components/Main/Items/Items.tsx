import styles from "./Items.module.css";
import { useSelector } from "react-redux";
import Item from "@/components/UI/Item/Item";

const Items = ({ randomId, filterBy }: any) => {
  const productsData = useSelector((state: any) => state.products);
  return (
    <>
      <ul className={styles.Items} key={randomId}>
        {productsData
          .filter((data: any) => true === data[`${filterBy}`])
          .map((data: any) => {
            return <Item data={data} key={data.id + randomId}></Item>;
          })}
      </ul>
    </>
  );
};

export default Items;
