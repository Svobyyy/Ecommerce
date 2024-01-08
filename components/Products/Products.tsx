import { useSelector } from "react-redux";
import Item from "../UI/Item/Item";
import styles from "./Products.module.css";
import { useRouter } from "next/router";
import { Product } from "@/Slices/productsSlice";
import Type from "./Filter/Type/Type";
import Special from "./Filter/Special/Special";
import Sizes from "./Filter/Sizes/Sizes";
import CheckFilter from "./Filter/CheckFilter/CheckFilter";

const Products = () => {
  const router = useRouter();

  const productsData = useSelector((state: any) => state.products);

  const type = router.query.type as string;
  const price = (router.query.price as string)?.split(",");
  const style = (router.query.style as string)?.split(",");
  const size = (router.query.size as string)?.split(",");
  const special = router.query.special as string;


  const addMore = (name: string, value: string) => {
    const filterArray = (router.query[`${name}`] as string)?.split(",");
    if (filterArray === undefined)
      return router.push({
        query: { ...router.query, [`${name}`]: value },
      });

    //delete value

    const findvalue = filterArray.findIndex((find: string) => find === value);

    if (findvalue !== -1) {
      filterArray.splice(findvalue, 1);

      delete router.query[`${name}`];

      filterArray.forEach((filteredData, index) => {
        if (index === 0) {
          router.query[`${name}`] = filteredData;
        } else {
          router.query[`${name}`] = `${
            router.query[`${name}`]
          },${filteredData}`;
        }
      });

      return router.push({
        query: {
          ...router.query,
        },
      });
    }

    //add a value

    return router.push({
      query: {
        ...router.query,
        [`${name}`]: `${router.query[`${name}`]},${value}`,
      },
    });
  };

  const addRemove = (name: string, value: string) => {
    if (
      router.query[`${name}`] === undefined ||
      router.query[`${name}`] !== value
    ) {
      return router.push({ query: { ...router.query, [`${name}`]: value } });
    }
    delete router.query[`${name}`];
    return router.push({ query: { ...router.query } });
  };

  const filter = (): Product[] => {
    let filtered: Product[] = productsData.filter(
      (data: Product) => data.type.toLowerCase() === router.query.type
    );

    let dummyArray: Product[] = [];

    special !== undefined &&
      (filtered = filtered.filter(
        (data: Product) =>
          data[
            `is${
              special.charAt(0).toUpperCase() + special.slice(1)
            }` as keyof Product
          ]
      ));

    price !== undefined &&
      (price.forEach((data) => {
        const seperate = data.split("-");

        filtered.forEach((data: Product) => {
          if (
            parseInt(seperate[0]) < data.price &&
            data.price <= parseInt(seperate[1])
          ) {
            dummyArray.push(data);
          }
        });
      }),
      (filtered = dummyArray),
      (dummyArray = []));

    size !== undefined &&
      (size.forEach((data: string) => {
        filtered.forEach((product: Product) => {
          if (
            product.sizes?.includes(data.toUpperCase()) &&
            !dummyArray.includes(product)
          ) {
            return dummyArray.push(product);
          }
        });
      }),
      (filtered = dummyArray));

    return filtered;
  };

  return (
    <main className={styles.main}>
      <div className={styles.filters}>
        <ul>
          <Type
            path="/products/sneakers"
            name="SNEAKERS"
            activeType={type}
          ></Type>
          <Type
            path="/products/apparel"
            name="APPAREL"
            activeType={type}
          ></Type>
          <Type
            path="/products/accessories"
            name="ACCESSORIES"
            activeType={type}
          ></Type>
          <Type
            path="/products/electronics"
            name="ELECTRONICS"
            activeType={type}
          ></Type>
        </ul>

        <ul>
          <Special
            addRemove={addRemove}
            name="RECOMMENDED"
            activeSpecial={special}
          ></Special>
          <Special
            addRemove={addRemove}
            name="TRENDING"
            activeSpecial={special}
          ></Special>
        </ul>

        <div>
          <p>PRICES</p>
          <ul>
            <CheckFilter
              active={price}
              addMore={addMore}
              value="0-100"
              filter="price"
            ></CheckFilter>
            <CheckFilter
              active={price}
              addMore={addMore}
              value="100-200"
              filter="price"
            ></CheckFilter>
            <CheckFilter
              active={price}
              addMore={addMore}
              value="200-300"
              filter="price"
            ></CheckFilter>
            <CheckFilter
              active={price}
              addMore={addMore}
              value="300-400"
              filter="price"
            ></CheckFilter>
            <CheckFilter
              active={price}
              addMore={addMore}
              value="400-500"
              filter="price"
            ></CheckFilter>
            <CheckFilter
              active={price}
              addMore={addMore}
              value="500-600"
              filter="price"
            ></CheckFilter>
            <CheckFilter
              active={price}
              addMore={addMore}
              value="600-700"
              filter="price"
            ></CheckFilter>
            <CheckFilter
              active={price}
              addMore={addMore}
              value="700-800"
              filter="price"
            ></CheckFilter>
          </ul>
        </div>

        {type === "sneakers" && (
          <div>
            <p>SIZES</p>
            <ul className={styles.sizesLayout}>
              <Sizes addMore={addMore} sizes={size} size={"35"}></Sizes>
              <Sizes addMore={addMore} sizes={size} size={"35.5"}></Sizes>
              <Sizes addMore={addMore} sizes={size} size={"36"}></Sizes>
              <Sizes addMore={addMore} sizes={size} size={"36.5"}></Sizes>
              <Sizes addMore={addMore} sizes={size} size={"37"}></Sizes>
              <Sizes addMore={addMore} sizes={size} size={"37.5"}></Sizes>
              <Sizes addMore={addMore} sizes={size} size={"38"}></Sizes>
              <Sizes addMore={addMore} sizes={size} size={"38.5"}></Sizes>
              <Sizes addMore={addMore} sizes={size} size={"39"}></Sizes>
              <Sizes addMore={addMore} sizes={size} size={"39.5"}></Sizes>
              <Sizes addMore={addMore} sizes={size} size={"40"}></Sizes>
              <Sizes addMore={addMore} sizes={size} size={"40.5"}></Sizes>
              <Sizes addMore={addMore} sizes={size} size={"41"}></Sizes>
              <Sizes addMore={addMore} sizes={size} size={"41.5"}></Sizes>
              <Sizes addMore={addMore} sizes={size} size={"42"}></Sizes>
              <Sizes addMore={addMore} sizes={size} size={"42.5"}></Sizes>
              <Sizes addMore={addMore} sizes={size} size={"43"}></Sizes>
              <Sizes addMore={addMore} sizes={size} size={"43.5"}></Sizes>
              <Sizes addMore={addMore} sizes={size} size={"44"}></Sizes>
              <Sizes addMore={addMore} sizes={size} size={"44.5"}></Sizes>
              <Sizes addMore={addMore} sizes={size} size={"45"}></Sizes>
              <Sizes addMore={addMore} sizes={size} size={"45.5"}></Sizes>
              <Sizes addMore={addMore} sizes={size} size={"46"}></Sizes>
              <Sizes addMore={addMore} sizes={size} size={"46.5"}></Sizes>
              <Sizes addMore={addMore} sizes={size} size={"47"}></Sizes>
              <Sizes addMore={addMore} sizes={size} size={"47.5"}></Sizes>
              <Sizes addMore={addMore} sizes={size} size={"48"}></Sizes>
              <Sizes addMore={addMore} sizes={size} size={"48.5"}></Sizes>
            </ul>
          </div>
        )}

        {type === "apparel" && (
          <div>
            <p>SIZES</p>
            <ul className={styles.sizesLayout}>
              <Sizes addMore={addMore} sizes={size} size={"xxs"}></Sizes>
              <Sizes addMore={addMore} sizes={size} size={"xs"}></Sizes>
              <Sizes addMore={addMore} sizes={size} size={"s"}></Sizes>
              <Sizes addMore={addMore} sizes={size} size={"m"}></Sizes>
              <Sizes addMore={addMore} sizes={size} size={"l"}></Sizes>
              <Sizes addMore={addMore} sizes={size} size={"xl"}></Sizes>
              <Sizes addMore={addMore} sizes={size} size={"xxl"}></Sizes>
            </ul>
          </div>
        )}

        {type === "accessories" && (
          <div>
            <p>STYLES</p>
            <ul>
              <CheckFilter
                active={style}
                addMore={addMore}
                value="WATCHES"
                filter="style"
              ></CheckFilter>
              <CheckFilter
                active={style}
                addMore={addMore}
                value="WALLET"
                filter="style"
              ></CheckFilter>
              <CheckFilter
                active={style}
                addMore={addMore}
                value="JEWELRY"
                filter="style"
              ></CheckFilter>
              <CheckFilter
                active={style}
                addMore={addMore}
                value="HANDBAG"
                filter="style"
              ></CheckFilter>
              <CheckFilter
                active={style}
                addMore={addMore}
                value="BELT"
                filter="style"
              ></CheckFilter>
            </ul>
          </div>
        )}
      </div>

      <ul className={styles.products} key="products">
        {filter()?.map((data: any) => {
          return <Item data={data} key={data.id + "products"}></Item>;
        })}
      </ul>
    </main>
  );
};

export default Products;
