import Sizes from "../Filter/Sizes/Sizes";
import CheckFilter from "../Filter/CheckFilter/CheckFilter";
import styles from "./SpecificFilters.module.css";

type props = {
  type: string;
  addMore: (name: string, size: string) => void;
  size: string[];
  check: string[];
};

const SpecificFilters = ({ type, addMore, size, check }: props) => {
  return (
    <>
      {type === "sneakers" && (
        <div>
          <p>SIZES</p>
          <ul className={styles.sizesLayout}>
            <Sizes addMore={addMore} sizes={size} size={"36"} />
            <Sizes addMore={addMore} sizes={size} size={"36.5"} />
            <Sizes addMore={addMore} sizes={size} size={"37"} />
            <Sizes addMore={addMore} sizes={size} size={"37.5"} />
            <Sizes addMore={addMore} sizes={size} size={"38"} />
            <Sizes addMore={addMore} sizes={size} size={"38.5"} />
            <Sizes addMore={addMore} sizes={size} size={"39"} />
            <Sizes addMore={addMore} sizes={size} size={"39.5"} />
            <Sizes addMore={addMore} sizes={size} size={"40"} />
            <Sizes addMore={addMore} sizes={size} size={"40.5"} />
            <Sizes addMore={addMore} sizes={size} size={"41"} />
            <Sizes addMore={addMore} sizes={size} size={"41.5"} />
            <Sizes addMore={addMore} sizes={size} size={"42"} />
            <Sizes addMore={addMore} sizes={size} size={"42.5"} />
            <Sizes addMore={addMore} sizes={size} size={"43"} />
          </ul>
        </div>
      )}

      {type === "apparel" && (
        <div>
          <p>SIZES</p>
          <ul className={styles.sizesLayout}>
            <Sizes addMore={addMore} sizes={size} size={"xxs"} />
            <Sizes addMore={addMore} sizes={size} size={"xs"} />
            <Sizes addMore={addMore} sizes={size} size={"s"} />
            <Sizes addMore={addMore} sizes={size} size={"m"} />
            <Sizes addMore={addMore} sizes={size} size={"l"} />
            <Sizes addMore={addMore} sizes={size} size={"xl"} />
            <Sizes addMore={addMore} sizes={size} size={"xxl"} />
          </ul>
        </div>
      )}

      {type === "accessories" && (
        <div>
          <p>STYLES</p>
          <ul>
            <CheckFilter
              active={check}
              addMore={addMore}
              value="WATCHES"
              filter="check"
            />
            <CheckFilter
              active={check}
              addMore={addMore}
              value="WALLET"
              filter="check"
            />
            <CheckFilter
              active={check}
              addMore={addMore}
              value="JEWELRY"
              filter="check"
            />
            <CheckFilter
              active={check}
              addMore={addMore}
              value="HANDBAG"
              filter="check"
            />
            <CheckFilter
              active={check}
              addMore={addMore}
              value="BELT"
              filter="check"
            />
            <CheckFilter
              active={check}
              addMore={addMore}
              value="OTHER"
              filter="check"
            />
          </ul>
        </div>
      )}
    </>
  );
};

export default SpecificFilters;
