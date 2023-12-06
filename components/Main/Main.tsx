import Items from "./Items/Items";
import styles from "./Main.module.css";
import Brands from "./Brands/Brands";
import Image from "next/image";

const Main = () => {
  return (
    <main className={styles.main}>
      <Image
        src="/images/background/background.webp"
        alt="background photo of sneakers"
        className={styles.background}
        width={1264}
        height={384}
        quality={100}
        priority={true}
      ></Image>

      <h5>Recommended For You</h5>

      <Items randomId="trending" filterBy={"isRecommended"}></Items>

      <h5>Trending</h5>
      <Items randomId="recommended" filterBy={"isTrending"}></Items>

      <Brands></Brands>

      <h5>Featured Apparel</h5>

      <Items randomId="featured" filterBy={"isFeatured"}></Items>
    </main>
  );
};

export default Main;
