import express from "express";
import dotenv from "dotenv";
import uploadRoute from "./routes/upload.js";

dotenv.config();

const app = express();

app.use(express.json());

// 👇 Ye line add karo
app.use(express.static("public"));

app.use("/api", uploadRoute);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server Running on Port ${PORT}`);
});