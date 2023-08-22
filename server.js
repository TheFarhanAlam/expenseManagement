import express from "express";
import "dotenv/config";
import cors from "cors";
import connectDB from "./Config/connectDB.js";
import User from "./Routes/userRoute.js";
import Transection from "./Routes/transectionRoute.js";

// database call 
connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use("/", User);
app.use("/transections", Transection);

//port 
const PORT = 8000 || process.env.PORT;

app.listen(PORT, () => {
    console.log(`Listening to the port ${PORT}`);
});