import SearchIcon from "@/components/Icons/SearchIcon";
import styles from "./Search.module.css";

const Search = () => {
  return (
    <label htmlFor="search" className={styles.search}>
      <SearchIcon></SearchIcon>
      <input placeholder="Search for product" id="search"></input>
    </label>
  );
};

export default Search;
