import styles from "./Sizes.module.css";


type props = {
  addMore:  (name: string, size: string) => void,
  size: string,
  sizes: string[]
}

const Sizes = ({ addMore, sizes, size }: any) => {

  return (
    <li className={styles.main}>
      <button
        onClick={() => {
          addMore("size", size);
        }}
        className={sizes?.includes(size) ? styles.active : ""}
      >
        {size.toUpperCase()}
      </button>
    </li>
  );
};

export default Sizes;
