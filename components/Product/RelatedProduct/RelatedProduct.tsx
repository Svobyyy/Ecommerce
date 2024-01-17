import Item from "@/components/UI/Item/Item";
import styles from "./RelatedProducts.module.css";

import { Product } from "@/Slices/productsSlice";

const RelatedProduct = ({
  data,
  related,
  productId,
}: {
  data: Product[];
  related: string;
  productId: string;
}) => {
  return (
    <>
      <h5 className={styles.title}>Related Products</h5>
      <ul className={styles.related}>
        {data
          .filter(
            (data: Product) => related === data.type && data.id !== productId
          )
          .filter((_: Product, index: number) => index < 5)
          .map((data: Product) => {
            return <Item data={data} key={data.id + "related"}></Item>;
          })}
      </ul>
    </>
  );
};

export default RelatedProduct;
