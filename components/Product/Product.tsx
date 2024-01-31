import styles from "./Product.module.css";
import LinkProduct from "./LinkProduct/LinkProduct";
import MainProduct from "./MainProduct/MainProduct";
import DetailsProduct from "./DetailsProduct/DetailsProduct";
import RelatedProduct from "./RelatedProduct/RelatedProduct";
import { Product } from "@/Slices/productsSlice";

const ProductComp = ({
  product,
  related,
}: {
  product: Product;
  related: Product[];
}) => {
  return (
    <main className={styles.main}>
      <div>
        <LinkProduct product={product} />
        <MainProduct product={product} />
        <RelatedProduct products={related} />
        <DetailsProduct product={product} />
      </div>
    </main>
  );
};

export default ProductComp;
