import { Dancing_Script } from "next/font/google";
import Link from "next/link";
import styles from "./Title.module.css";

const dancingscript = Dancing_Script({
  subsets: ["latin"],
  style: "normal",
  weight: "700",
});

const Title = () => {
  return (
    <Link href="/" className={`${dancingscript.className} ${styles.title}`}>
      ShopWithUs
    </Link>
  );
};

export default Title;
