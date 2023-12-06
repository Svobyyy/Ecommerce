import styles from "./DetailsProduct.module.css";
import Detail from "./Detail/Detail";

const DetailsProduct = ({ data }: any) => {

  return (
    <>
      <h5 className={styles.details_title}>Product Details</h5>
      <div className={styles.details}>
        <div>
          <Detail data={data} exists="style"></Detail>
          <Detail data={data} exists="color"></Detail>
          <Detail data={data} exists="brand"></Detail>
          <Detail data={data} exists="wirelessNetworking"></Detail>
          <Detail data={data} exists="mPN"></Detail>
          <Detail data={data} exists="batteryLife"></Detail>
          <Detail data={data} exists="operatingSystem"></Detail>
          <Detail data={data} exists="ports"></Detail>
          <Detail data={data} exists="material"></Detail>
          <Detail data={data} exists="band"></Detail>
          <Detail data={data} exists="movement"></Detail>
          <Detail data={data} exists="dial"></Detail>
          <Detail data={data} exists="referenceNumber"></Detail>
          <Detail data={data} exists="caseSize"></Detail>
          <Detail data={data} exists="season"></Detail>
          <Detail data={data} exists="dimension"></Detail>

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
