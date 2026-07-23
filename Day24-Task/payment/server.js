import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import paymentRoute from "./routes/payment.js";

dotenv.config();

console.log("Stripe Key:", process.env.STRIPE_SECRET_KEY);

const app = express();

app.use(cors());
app.use(express.json());

app.use("/", paymentRoute);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});