import styles from "./Brands.module.css";
import Link from "next/link";
import Image from "next/image";

const Brands = () => {
  return (
    <>
      <h5>Popular Brands</h5>
      <div className={styles.Brands}>
        <Link href={"/products/brand/nike"}>
          <Image
            src="/images/brands/nike.webp"
            alt="nike"
            width={220}
            height={220}
            quality={100}
          ></Image>
        </Link>
        <Link href={"/products/brand/polo"}>
          <Image
            src="/images/brands/polo.webp"
            alt="polo"
            width={220}
            quality={100}
            height={220}
          ></Image>
        </Link>
        <Link href={"/products/brand/apple"}>
          <Image
            src="/images/brands/apple.webp"
            alt="apple"
            width={220}
            height={220}
            quality={100}
          ></Image>
        </Link>
        <Link href={"/products/brand/north"}>
          <Image
            src="/images/brands/north.webp"
            alt="north"
            width={220}
            height={220}
            quality={100}
          ></Image>
        </Link>
        <Link href={"/products/brand/vivien"}>
          <Image
            src="/images/brands/vivien.webp"
            alt="vivien"
            width={220}
            height={220}
            quality={100}
          ></Image>
        </Link>
      </div>
    </>
  );
};

export default Brands;
