import styles from "./Detail.module.css";

const Detail = ({ data, exists }: any) => {
  return (
    <>
      {data[exists] && (
        <div className={styles.details_space}>
          <p>{exists.charAt(0).toUpperCase() + exists.slice(1)}</p>
          <p>{data[exists]}</p>
        </div>
      )}
    </>
  );
};

export default Detail;
