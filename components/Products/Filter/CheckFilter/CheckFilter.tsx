import CheckIcon from "@/components/Icons/CheckIcon";

import styles from "./CheckFilter.module.css";

type props = {
  addMore: (name: string, size: string) => void;
  filter: string;
  value: string;
  active: string[];
};

const CheckFilter = ({ addMore, filter, value, active }: props) => {
  return (
    <li
      className={styles.main}
      onClick={() => addMore(filter, value.toLowerCase())}
    >
      <div
        className={`${
          active?.includes(value.toLowerCase()) ? styles.checkActive : ""
        } ${styles.check}`}
      >
        <CheckIcon></CheckIcon>
      </div>
      {value}
    </li>
  );
};

export default CheckFilter;
