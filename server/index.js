import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import UserRoute from "./routes/UserRoute.js";
import AuthRoute from "./routes/AuthRoute.js";
import ProductRoute from "./routes/ProductRoute.js";
import CartRoute from "./routes/CartRoute.js";
import OrderRoute from "./routes/OrderRoute.js";
const app = express();

//middleware
app.use(cors());
app.use(express.json());
dotenv.config();

//coonnection to database

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Connected to MONGO_DB");
    app.listen(process.env.PORT, () => {
      console.log(`App is listening on port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });

//usage of route

app.use("/user", UserRoute);
app.use("/auth", AuthRoute);
app.use("/product", ProductRoute);
app.use("/order", OrderRoute);
app.use("/cart", CartRoute);
