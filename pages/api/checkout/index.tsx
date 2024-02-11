const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
import { ProductsModel } from "@/models/Products";
import { NextApiRequest, NextApiResponse } from "next";
import { connect } from "mongoose";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const products = req.body.products.map((data: any) => {
        return {
          price_data: {
            currency: "usd",
            product_data: {
              name: data.name,
            },
            unit_amount: data.price * 100,
          },
          quantity: data.quantity,
        };
      });

      const session = await stripe.checkout.sessions.create({
        line_items: products,
        mode: "payment",
        success_url: `http://localhost:3000/`,
        cancel_url: `http://localhost:3000/`,
      });

      res.json({ url: session.url });
    } catch (err: any) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
