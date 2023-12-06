import Link from "next/link";
import styles from "./Type.module.css";

type props = {
  path: string;
  name: string;
  activeType: string;
};

const Type = ({ path, name, activeType }: props) => {
  return (
    <li className={styles.main}>
      <Link
        href={path}
        className={activeType === name.toLowerCase() ? styles.active : ""}
      >
        {name}
      </Link>
    </li>
  );
};

export default Type;
