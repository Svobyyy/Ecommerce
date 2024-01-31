import { connect } from "mongoose";
import { ProductsModel } from "@/models/Products";

export default async function getAllProducts() {
  await connect(`${process.env.CONNECTION}`);
  const products = await ProductsModel.find();

  return JSON.parse(JSON.stringify(products));
}
