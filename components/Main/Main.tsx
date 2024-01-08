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

      <Items randomId="trending" filterBy={"isRecommended"}/>

      <h5>Trending</h5>
      <Items randomId="recommended" filterBy={"isTrending"}/>

      <Brands/>

      <h5>Featured Apparel</h5>

      <Items randomId="featured" filterBy={"isFeatured"}/>
    </main>
  );
};

export default Main;
