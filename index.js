import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import hiveRoutes from "./src/modules/hives/routes/hiveRoutes.js";
import cropRoutes from "./src/modules/crops/routes/cropRoute.js";

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.use("/api/hives", hiveRoutes);
app.use("/api/crops", cropRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
