import { useSelector } from "react-redux";
import styles from "./Products.module.css";
import { useRouter } from "next/router";
import { Product } from "@/Slices/productsSlice";
import { RootState } from "@/store";
import ProductsItem from "./ProductsItem/ProductsItem";
import DefaultFilters from "./Filters/DefaultFilters";
import SpecificFilters from "./Filters/SpecificFilters";

const Products = () => {
  const router = useRouter();

  const productsData = useSelector((state: RootState) => state.products);

  const type = router.query.type as string;
  const price = (router.query.price as string)?.split(",");
  const check = (router.query.check as string)?.split(",");
  const size = (router.query.size as string)?.split(",");
  const special = router.query.special as string;

  //filter with multiple values

  const addMore = (name: string, value: string) => {
    const filterArray = (router.query[`${name}`] as string)?.split(",");
    if (filterArray === undefined)
      return router.push({
        query: { ...router.query, [`${name}`]: value },
      });

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

  //only one filter value

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

  //filter products

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

    check !== undefined &&
      (check.forEach((data: string) => {
        filtered.forEach((product: Product) => {
          if (product.check?.includes(data) && !dummyArray.includes(product)) {
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
        <DefaultFilters
          type={type}
          addRemove={addRemove}
          price={price}
          special={special}
          addMore={addMore}
        />
        <SpecificFilters
          type={type}
          addMore={addMore}
          size={size}
          check={check}
        />
      </div>

      <ul className={styles.products} key="products">
        {filter()?.map((data: Product) => {
          return <ProductsItem data={data} key={data.id + "products"} />;
        })}
      </ul>
    </main>
  );
};

export default Products;
