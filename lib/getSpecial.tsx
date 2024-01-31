import { connect } from "mongoose";
import { ProductsModel } from "@/models/Products";

export default async function getSpecial() {
  await connect(`${process.env.CONNECTION}`);
  const products = await ProductsModel.find({
    $or: [{ isTrending: true }, { isRecommended: true }, { isFeatured: true }],
  });

  return JSON.parse(JSON.stringify(products));
}
