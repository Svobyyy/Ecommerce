import { ProductCart } from "@/Slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import BinIcon from "../Icons/BinIcon";
import styles from "./Cart.module.css";
import { removeCart, increase, decrease } from "@/Slices/cartSlice";
import PlusIcon from "../Icons/PlusIcon";
import MinusIcon from "../Icons/MinusIcon";
import PriceTagIcon from "../Icons/PriceTagIcon";
import Image from "next/image";

const Cart = () => {
  const dispatch = useDispatch();

  const { cartData, quantity, totalAmount } = useSelector(
    (state: any) => state.cart
  );

  const removeHandler = (removeId: string, price: number, quantity: number) => {
    dispatch(removeCart({ removeId, price, quantity }));
  };

  return (
    <main className={styles.main}>
      <ul>
        {cartData.map((data: ProductCart) => {
          return (
            <li key={data.id}>
              <Image
                src={`/images/small/${data.img}`}
                alt={data.name}
                width={250}
                height={134}
                quality={100}
              ></Image>

              <div className={styles.item}>
                <section className={styles.item_info}>
                  <div className={styles.title}>
                    <p>{data.name}</p>
                    <p>${data.price * data.quantity}</p>
                  </div>

                  <p>{data.type}</p>
                  <p>
                    <span>Quantity {data.quantity}</span>
                  </p>
                  {data.size && (
                    <p>
                      <span>Size {data.size}</span>
                    </p>
                  )}
                </section>
                <section>
                  <div
                    onClick={() => {
                      dispatch(increase(data.id));
                    }}
                  >
                    <PlusIcon></PlusIcon>
                  </div>
                  <div
                    onClick={() => {
                      data.quantity !== 1 && dispatch(decrease(data.id));
                    }}
                  >
                    <MinusIcon></MinusIcon>
                  </div>
                  <div
                    className={styles.delete}
                    onClick={() => {
                      removeHandler(data.id, Number(data.price), data.quantity);
                    }}
                  >
                    <BinIcon></BinIcon>
                  </div>
                </section>
              </div>
            </li>
          );
        })}
      </ul>

      <section className={styles.summary}>
        <h5>
          Summary<PriceTagIcon></PriceTagIcon>
        </h5>

        <div>
          <p>Subtotal</p>
          <p>${totalAmount}</p>
        </div>
        <div>
          <p>Quantity of Items</p>
          <p>{quantity}</p>
        </div>
        <div>
          <p>Estimated Delivery & Handling</p>
          <p>FREE</p>
        </div>

        <div className={styles.total}>
          <p>Total</p>
          <p>${totalAmount}</p>
        </div>
        <button>Checkout</button>
      </section>
    </main>
  );
};

export default Cart;
