import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import morgan from "morgan";
import userRouter from "./routes/user.js";
import tourRouter from "./routes/tours.js";

const port = 5000;

//mongodb+srv://Ermias:<password>@cluster0.4lzqk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

const app = express();

app.use(morgan("dev"));
app.use(express.json({ limit: "30mb", extended: "true" }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/users", userRouter);
app.use("/tour", tourRouter);

const MONGOODB_URL =
  "mongodb+srv://Ermias:ermias@cluster0.4lzqk.mongodb.net/tour_db?retryWrites=true&w=majority";

mongoose
  .connect(MONGOODB_URL)
  .then(() => {
    app.listen(port, () => console.log(`server running on port ${port}`));
  })
  .catch((error) => console.log(`${error} did not connect`));
