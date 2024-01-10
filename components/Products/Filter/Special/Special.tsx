import styles from "./Special.module.css";

type props = {
addRemove:  (name: string, value: string) => void,
name: string,
activeSpecial: string
}


const Special = ({ addRemove, name, activeSpecial }: props) => {
  return (
    <li
      onClick={() => {
        return addRemove("special", name.toLowerCase());
      }}
      className={`${activeSpecial === name.toLowerCase() ? styles.active : ""} ${styles.main}`}
    >
      {name}
    </li>
  );
};

export default Special;
