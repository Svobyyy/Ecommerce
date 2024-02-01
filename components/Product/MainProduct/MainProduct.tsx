import styles from "./MainProduct.module.css";
import { addCart } from "@/Slices/cartSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";
import Image from "next/image";
import { Product } from "@/Slices/productsSlice";

const MainProduct = ({ product }: { product: Product }) => {
  const dispatch = useDispatch();
  const [select, setSelect] = useState(false);

  const { sizes, id, name, price, type, img, _id } = product;

  const addToCart = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const { size } = Object.fromEntries(formData);

    if (sizes?.length !== 0) {
      if (size === undefined) {
        setSelect(true);
        return;
      }
      return dispatch(
        addCart({
          id: id + size,
          _id,
          name,
          price,
          type,
          size: size as string,
          quantity: 1,
          img,
        })
      );
    }
    if (product !== undefined)
      return dispatch(
        addCart({
          id,
          _id,
          name,
          price,
          type,
          quantity: 1,
          img,
        })
      );
  };

  return (
    <main className={styles.main_product}>
      <div className={styles.main_img}>
        <Image
          src={`/images/big/${img}`}
          alt={`big photo of ${name}`}
          width={728}
          height={546}
          quality={100}
          priority={true}
        />
      </div>

      <div className={styles.main_buy}>
        <div className={styles.product_title}>
          <h4>{name}</h4>
          <p>{type}</p>
          <p>${price}</p>
        </div>

        {sizes?.length !== 0 && (
          <span className={`${styles.select} ${select && styles.selectRed}`}>
            Select Size
          </span>
        )}

        <form onSubmit={addToCart}>
          <ul className={styles.sizes}>
            {sizes != undefined &&
              sizes.map((size: string) => {
                return (
                  <li
                    className={styles.size}
                    key={size}
                    onClick={() => setSelect(false)}
                  >
                    <input type="radio" id={size} name="size" value={size} />
                    <label
                      htmlFor={size}
                      className={`${select && styles.sizeRed}`}
                    >
                      EU {size}
                    </label>
                  </li>
                );
              })}
          </ul>

          <div className={styles.features}>
            <button>Add to Bag</button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default MainProduct;
