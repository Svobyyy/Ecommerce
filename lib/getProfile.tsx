import { connect } from "mongoose";
import { UserModel } from "@/models/User";

export default async function getProfile(email: string) {
  await connect(`${process.env.CONNECTION}`);
  const user = await UserModel.find({ email });
  return JSON.parse(JSON.stringify(user));
}
