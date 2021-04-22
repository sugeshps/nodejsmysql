require("dotenv").config();
const express = require("express");
const app = express();
const producRouter = require("./api/products/product.router");
app.use(express.json());
app.use("/api/products",producRouter);
app.listen(process.env.APPPORT,()=>{
    console.log("test port is : ",process.env.APPPORT );
});