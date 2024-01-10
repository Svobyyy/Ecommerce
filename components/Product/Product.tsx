import { Product } from "@/Slices/productsSlice";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import styles from "./Product.module.css";
import LinkProduct from "./LinkProduct/LinkProduct";
import MainProduct from "./MainProduct/MainProduct";
import DetailsProduct from "./DetailsProduct/DetailsProduct";
import RelatedProduct from "./RelatedProduct/RelatedProduct"
import { RootState } from "@/store";

const Product = () => {
  const router = useRouter();
  const productsData = useSelector((state: RootState) => state.products);


  return (
    <main className={styles.main}>
      {productsData
        .filter((data: Product) => data.id === router.query.productid)
        .map((data: Product) => {
          return (
            <div key={data.id + "product"}>
              <LinkProduct data={data}></LinkProduct>
              <MainProduct data={data}></MainProduct>
              <RelatedProduct data={productsData} related={data.type} productId={data.id}></RelatedProduct>
              <DetailsProduct data={data}></DetailsProduct>


              
            </div>
          );
        })}
    </main>
  );
};

export default Product;
