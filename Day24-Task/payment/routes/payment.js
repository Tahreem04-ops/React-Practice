import express from "express";
import Stripe from "stripe";
import dotenv from "dotenv";

dotenv.config();

const router = express.Router();

const stripeKey = process.env.STRIPE_SECRET_KEY;

console.log("Stripe Key in payment.js:", stripeKey);

if (!stripeKey) {
  throw new Error("❌ STRIPE_SECRET_KEY not found in .env");
}

const stripe = new Stripe(stripeKey);

router.post("/create-payment", async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],

      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: "Node Course",
            },
            unit_amount: 2000,
          },
          quantity: 1,
        },
      ],

      mode: "payment",

      success_url: "http://localhost:5173/success",
      cancel_url: "http://localhost:5173/cancel",
    });

    res.json({
      id: session.id,
      url: session.url,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: error.message,
    });
  }
});

export default router;