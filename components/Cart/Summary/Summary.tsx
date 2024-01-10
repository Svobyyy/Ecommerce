import PriceTagIcon from "@/components/Icons/PriceTagIcon";
import styles from "./Summary.module.css";

const Summary = ({
  quantity,
  totalAmount,
}: {
  quantity: number;
  totalAmount: number;
}) => {
  return (
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
  );
};

export default Summary;
