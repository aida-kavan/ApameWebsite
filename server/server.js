import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();
const PORT = 5000;

app.use(
  cors({
    origin:true,
    credentials: true, 
  })
);

app.use(bodyParser.json());
app.use(express.json());
app.use(cookieParser());
