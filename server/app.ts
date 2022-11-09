import express, { Request, Response } from "express";
import Logging from "./library/Logging";
import mongoose from "mongoose";
const app = express();
const router = express.Router();
require("dotenv").config();

const port = process.env.PORT || 3000;
const indexRoutes = require("./routes/index.routes");

/** Connect to MongoDB */
mongoose.connect(
  process.env.MONGODB_URL,
  {
    retryWrites: true,
    w: "majority",
  }
).then(() => {
  Logging.info('Connected to MongoDB')
}).catch((error: Error) => {
  console.log(error.message);
  Logging.error('Cannot connect to MongoDB')
});

/** Middlewares */
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/** Routes */
app.use("/", indexRoutes);

app.listen(port, () => {
  Logging.info(`Example app listening on port ${port}`);
});