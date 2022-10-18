const express = require("express");
const app = express();
const db = require("./db.js");
const dotenv = require("dotenv");
const cors = require("cors");
const data = require("./router/data");

dotenv.config();
db.connect();

app.use(cors());
app.use(express.json());

app.use("/",(req,res,next) => {
    console.log("Hello");
    next();
})

app.use("/data",data)

app.listen(process.env.PORT || 3010,() => {
    console.log("Server Started on 3000");
})