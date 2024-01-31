import Item from "@/components/UI/Item/Item";
import styles from "./RelatedProducts.module.css";

import { Product } from "@/Slices/productsSlice";

const RelatedProduct = ({
  products,
}: {
  products: Product[];
}) => {
  return (
    <>
      <h5 className={styles.title}>Related Products</h5>
      <ul className={styles.related}>
        {products.map((data: Product) => {
          return <Item data={data} key={data.id + "related"}></Item>;
        })}
      </ul>
    </>
  );
};

export default RelatedProduct;
