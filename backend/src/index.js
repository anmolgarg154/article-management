import dotenv from "dotenv";
import {app} from './App.js'
import connectDB from "./DB/blog-db.js";

dotenv.config();


connectDB()
    .then(() => {
        app.listen(process.env.PORT || 3000, '0.0.0.0', () => {
            console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
        });
    })
    .catch((err) => {
        console.log("MONGODB connection failed !!! ", err);
    })


// app.get("/", (req, res) => {
//     res.send("Backend is running");
// });


