import Link from "next/link";
import styles from "./Item.module.css";
import FavoriteIcon from "@/components/Icons/FavoriteIcon";
import Image from "next/image";

const Item = ({ data }: any) => {
  return (
    <li className={styles.Item}>
      <Link href={`/product/${data.id}`} replace>
        <FavoriteIcon></FavoriteIcon>
        <Image
          src={`/images/small/${data.img}`}
          alt={`photo of ${data.name}`}
          quality={100}
          width={140}
          height={75}
        ></Image>
        <div className={styles.Item_text}>
          <div className={styles.Item_title}>
            <p>{data.name}</p>
          </div>

          <p className={styles.type}>{data.type}</p>
          <p className={styles.price}>${data.price}</p>
        </div>
      </Link>
    </li>
  );
};

export default Item;
