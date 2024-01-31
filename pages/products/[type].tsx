import Products from "@/components/Products/Products";
import { Product } from "@/Slices/productsSlice";
import getProducts from "../../lib/getProducts";
import Header from "@/components/Header/Header";
import Filters from "@/components/Header/Filters/Filters";


const FilteredItemsPage = ({ products }: { products: Product[] }) => {
  return (
    <>
      <Header></Header>
      <Filters></Filters>
      <Products products={products}></Products>;
    </>
  );
};

export async function getStaticPaths() {
  const paths = [
    { params: { type: "sneakers" } },
    { params: { type: "apparel" } },
    { params: { type: "accessories" } },
  ];

  return { paths, fallback: false };
}

export async function getStaticProps({ params: { type } }: any) {
  const products = await getProducts(type);
  return {
    props: { products },
  };
}

export default FilteredItemsPage;
