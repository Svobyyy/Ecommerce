import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
});

export const UserModel = models.User || model("User", UserSchema);

export type UserType = {
  name: string;
  email: string;
  lastname: string;
};
