import { Product } from "@/Slices/productsSlice";
import ProductComp from "@/components/Product/Product";
import getAllProducts from "../../lib/getAllProducts";
import getProduct from "../../lib/getProduct";
import getRelatedProducts from "../../lib/getRelatedProducts";
import Header from "@/components/Header/Header";
import Filters from "@/components/Header/Filters/Filters";

const ProductPage = ({
  product,
  related,
}: {
  product: Product;
  related: Product[];
}) => {
  return (
    <>
      <Header />
      <Filters />
      <ProductComp product={product} related={related}></ProductComp>;
    </>
  );
};

export async function getStaticPaths() {
  const products = await getAllProducts();

  const paths = products.map((product: Product) => ({
    params: { productid: product.id },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({
  params: { productid },
}: {
  params: { productid: string };
}) {
  const product = await getProduct(productid);
  const related = await getRelatedProducts(product[0].type, productid);

  return {
    props: {
      product: product[0],
      related: related,
    },
  };
}

export default ProductPage;
