import express from "express";
import dotenv from "dotenv";
import adminRoutes from "./routes/admin.js";

dotenv.config();

const app = express();

app.use(express.json());

app.use("/admin", adminRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});