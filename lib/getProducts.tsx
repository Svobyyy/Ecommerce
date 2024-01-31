import { connect } from "mongoose";
import { ProductsModel } from "@/models/Products";

export default async function getProducts(typeValue: string) {
  await connect(`${process.env.CONNECTION}`);
  const type: string = typeValue.charAt(0).toUpperCase() + typeValue?.slice(1);
  const products = await ProductsModel.find({ type });
  return JSON.parse(JSON.stringify(products));
}
