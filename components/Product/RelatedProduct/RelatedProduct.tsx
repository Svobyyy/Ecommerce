import Item from "@/components/UI/Item/Item";
import styles from "./RelatedProducts.module.css";

const RelatedProduct = ({ data, related, productId }: any) => {
  return (
    <>
      <h5 className={styles.title}>Related Products</h5>
      <ul className={styles.related}>
        {data
          .filter((data: any, index: number) => related === data.type && data.id !== productId)
          .filter((_:void, index: number) => index < 5)
          .map((data: any) => {
            return <Item data={data} key={data.id + "related"}></Item>;
          })}
      </ul>
    </>
  );
};

export default RelatedProduct;
