import { connect } from "mongoose";
import { ProductsModel } from "@/models/Products";

export default async function getRelatedProducts(type: string, id: string) {
  await connect(`${process.env.CONNECTION}`);

  const products = await ProductsModel.aggregate([
    { $match: { id: { $not: { $eq: id } }, type } },
    { $sample: { size: 5 } },
  ]);

  return JSON.parse(JSON.stringify(products));
}
