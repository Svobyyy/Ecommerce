import { connect } from "mongoose";
import { ProductsModel } from "@/models/Products";

export default async function getProduct(id: string) {
  await connect(`${process.env.CONNECTION}`);
  const product = await ProductsModel.find({ id });

  return JSON.parse(JSON.stringify(product));
}
