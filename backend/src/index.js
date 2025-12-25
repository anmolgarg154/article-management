import dotenv from "dotenv";
import app from './App.js'
import connectDB from "./DB/blog-db.js";

dotenv.config();

const PORT = process.env.PORT || 5000;

 connectDB()
 .then(()=>{
    app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
})
 .catch((err)=>{
    console.log("Error connecting to MongoDB:", err);
 })




// app.get("/", (req, res) => {
//     res.send("Backend is running");
// });


