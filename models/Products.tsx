import { Schema, model, models } from "mongoose";

const productsSchema = new Schema({
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  color: {
    type: String,
  },
  img: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  isTrending: {
    type: Boolean,
  },
  isRecommended: {
    type: Boolean,
  },
  sizes: {
    type: [String],
  },
  style: {
    type: String,
  },
  release: {
    type: String,
  },
  description: {
    type: String,
  },
  isFeatured: {
    type: Boolean,
  },
  material: {
    type: String,
  },
  band: {
    type: String,
  },
  movement: {
    type: String,
  },
  dial: {
    type: String,
  },
  referenceNumber: {
    type: String,
  },
  caseSize: {
    type: String,
  },
  season: {
    type: String,
  },
  dimension: {
    type: String,
  },
  hardware: {
    type: String,
  },
  check: {
    type: String,
  },
});

export const ProductsModel =
  models.Products || model("Products", productsSchema);
