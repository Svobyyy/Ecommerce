import Main from "../components/Main/Main";
import { Product } from "@/Slices/productsSlice";
import getSpecial from "../lib/getSpecial";
import Header from "../components/Header/Header";
import Filters from "../components/Header/Filters/Filters";

const HomePage = ({ specialProducts }: { specialProducts: Product[] }) => {
  return (
    <>
      <Header></Header>
      <Filters></Filters>
      <Main specialProducts={specialProducts}></Main>
    </>
  );
};

export async function getStaticProps() {
  const products: Product[] = await getSpecial();
  return { props: { specialProducts: products } };
}

export default HomePage;
