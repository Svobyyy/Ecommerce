import Items from "./Items/Items";
import styles from "./Main.module.css";
import Brands from "./Brands/Brands";
import Image from "next/image";
import { Product } from "@/Slices/productsSlice";

const Main = ({ specialProducts }: { specialProducts: Product[] }) => {
  return (
    <main className={styles.main}>
      <Image
        src="/images/background/background.webp"
        alt="background photo of sneakers"
        className={`${styles.background} ${styles.big}`}
        width={1264}
        height={384}
        quality={100}
        priority={true}
      />

      <Image
        src="/images/background/backgroundSmall.webp"
        alt="background photo of sneakers"
        className={`${styles.background} ${styles.small}`}
        width={767}
        height={572}
        quality={100}
        priority={true}
      />

      <h5>Recommended For You</h5>
      <Items
        randomId="trending"
        filterBy={"isRecommended"}
        productsData={specialProducts}
      />

      <h5>Trending</h5>
      <Items
        randomId="recommended"
        filterBy={"isTrending"}
        productsData={specialProducts}
      />

      <Brands />

      <h5>Featured Apparel</h5>
      <Items
        randomId="featured"
        filterBy={"isFeatured"}
        productsData={specialProducts}
      />
    </main>
  );
};

export async function getStaticProps() {
  const response = await fetch("http://localhost:3005/");
  const result: Product[] = await response.json();

  return { props: { specialProduct: result } };
}

export default Main;
