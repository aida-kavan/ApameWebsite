import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import { errorHandler } from "./middlewares/errorHandler.js"
import { connectDB } from "./config/db.js";

dotenv.config();

const app = express();
const PORT = 5000;

app.use(
  cors({
    origin:true,
    credentials: true, 
  })
);

dotenv.config()

app.use(bodyParser.json());
app.use(express.json());
app.use(errorHandler)


app.listen(PORT, () => {
  console.log(` Server running on port ${PORT}`);
});

