import express, { Router } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();


app.use(cors({
  origin: "http://localhost:3001",
  credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cookieParser());


// Importing Routes
import articleRoutes from "./routes/article-routes.js";




// routes declartion
app.use("/api/articles", articleRoutes );

export default app;
