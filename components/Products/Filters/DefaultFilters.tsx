import Type from "../Filter/Type/Type";
import Special from "../Filter/Special/Special";
import CheckFilter from "../Filter/CheckFilter/CheckFilter";

type props = {
  type: string;
  addMore: (name: string, size: string) => void;
  price: string[];
  special: string;
  addRemove: (name: string, value: string) => void;
};

const DefaultFilters = ({
  type,
  addRemove,
  price,
  special,
  addMore,
}: props) => {
  return (
    <>
      <ul>
        <Type path="/products/sneakers" name="SNEAKERS" activeType={type} />
        <Type path="/products/apparel" name="APPAREL" activeType={type} />
        <Type
          path="/products/accessories"
          name="ACCESSORIES"
          activeType={type}
        />
      </ul>

      <ul>
        <Special
          addRemove={addRemove}
          name="RECOMMENDED"
          activeSpecial={special}
        />
        <Special
          addRemove={addRemove}
          name="TRENDING"
          activeSpecial={special}
        />
      </ul>

      <div>
        <p>PRICES</p>
        <ul>
          <CheckFilter
            active={price}
            addMore={addMore}
            value="0-100"
            filter="price"
          />
          <CheckFilter
            active={price}
            addMore={addMore}
            value="100-200"
            filter="price"
          />
          <CheckFilter
            active={price}
            addMore={addMore}
            value="200-300"
            filter="price"
          />
          <CheckFilter
            active={price}
            addMore={addMore}
            value="300-400"
            filter="price"
          />
          <CheckFilter
            active={price}
            addMore={addMore}
            value="400-500"
            filter="price"
          />
          <CheckFilter
            active={price}
            addMore={addMore}
            value="500-600"
            filter="price"
          />
        </ul>
      </div>
    </>
  );
};

export default DefaultFilters;
