import styles from "./MainProduct.module.css";
import { addCart } from "@/Slices/cartSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";
import Image from "next/image";
import { Product } from "@/Slices/productsSlice";

const MainProduct = ({ data }: { data: Product }) => {
  const dispatch = useDispatch();
  const [select, setSelect] = useState(false);

  const addToCart = (e: any) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const { size } = Object.fromEntries(formData);

    if (data.sizes !== undefined) {
      if (size === undefined) {
        setSelect(true);
        return;
      }
      return dispatch(
        addCart({
          id: data.id + size,
          name: data.name,
          price: data.price,
          type: data.type,
          size: size as string,
          quantity: 1,
          img: data.img,
        })
      );
    }

    return dispatch(
      addCart({
        id: data.id,
        name: data.name,
        price: data.price,
        type: data.type,
        quantity: 1,
        img: data.img,
      })
    );
  };

  return (
    <main className={styles.main_product}>
      <div className={styles.main_img}>
        <Image
          src={`/images/big/${data.img}`}
          alt={`big photo of ${data.name}`}
          width={728}
          height={546}
          quality={100}
          priority={true}
        />
      </div>

      <div className={styles.main_buy}>
        <div className={styles.product_title}>
          <h4>{data.name}</h4>
          <p>{data.type}</p>
          <p>${data.price}</p>
        </div>

        {data.sizes != undefined && (
          <span className={`${styles.select} ${select && styles.selectRed}`}>
            Select Size
          </span>
        )}

        <form onSubmit={addToCart}>
          <ul className={styles.sizes}>
            {data.sizes != undefined &&
              data.sizes.map((size: string) => {
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
