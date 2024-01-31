import styles from "./DetailsProduct.module.css";
import Detail from "./Detail/Detail";
import { Product } from "@/Slices/productsSlice";

const DetailsProduct = ({ product }: { product: Product }) => {
  const { description } = product;

  return (
    <>
      <h5 className={styles.details_title}>Product Details</h5>
      <div className={styles.details}>
        <div>
          <Detail product={product} exists="style" />
          <Detail product={product} exists="color" />
          <Detail product={product} exists="brand" />
          <Detail product={product} exists="release" />
          <Detail product={product} exists="material" />
          <Detail product={product} exists="band" />
          <Detail product={product} exists="movement" />
          <Detail product={product} exists="dial" />
          <Detail product={product} exists="referenceNumber" />
          <Detail product={product} exists="caseSize" />
          <Detail product={product} exists="season" />
          <Detail product={product} exists="dimension" />
          <Detail product={product} exists="hardware" />
        </div>

        {description && (
          <div className={styles.details_description}>
            <span>
              <p>Product description</p>
            </span>
            <p>{description}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default DetailsProduct;
