import styles from "./DetailsProduct.module.css";
import Detail from "./Detail/Detail";
import { Product } from "@/Slices/productsSlice";

const DetailsProduct = ({ data }: { data: Product }) => {
  return (
    <>
      <h5 className={styles.details_title}>Product Details</h5>
      <div className={styles.details}>
        <div>
          <Detail data={data} exists="style" />
          <Detail data={data} exists="color" />
          <Detail data={data} exists="brand" />
          <Detail data={data} exists="wirelessNetworking" />
          <Detail data={data} exists="mPN" />
          <Detail data={data} exists="batteryLife" />
          <Detail data={data} exists="operatingSystem" />
          <Detail data={data} exists="ports" />
          <Detail data={data} exists="material" />
          <Detail data={data} exists="band" />
          <Detail data={data} exists="movement" />
          <Detail data={data} exists="dial" />
          <Detail data={data} exists="referenceNumber" />
          <Detail data={data} exists="caseSize" />
          <Detail data={data} exists="season" />
          <Detail data={data} exists="dimension" />
        </div>

        {data.description && (
          <div className={styles.details_description}>
            <span>
              <p>Product description</p>
            </span>
            <p>{data.description}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default DetailsProduct;
