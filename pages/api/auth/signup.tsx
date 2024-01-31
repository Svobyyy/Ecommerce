import { UserModel } from "@/models/User";
import { connect } from "mongoose";
import { hash } from "bcryptjs";

import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method !== "POST") return;

  const { email, password, name, lastname } = req.body;

  if (!email || !email.includes("@") || !password || password.trim().length < 7)
    return res.status(402).json({ message: "Invalid Input" });

  const passwordHashed = await hash(password, 12);

  try {
    await connect(`${process.env.CONNECTION}`);
    const exists = await UserModel.findOne({ email });
    if (exists) {
      return res.status(422).json({ message: "User exists already!" });
    }

    await UserModel.insertMany({
      name: name,
      lastname: lastname,
      email,
      password: passwordHashed,
    });
    res.status(200).json({ message: "Signed In" });
  } catch (e) {
    res.status(400).json({ message: e });
  }
}
