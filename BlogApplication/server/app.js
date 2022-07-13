
//VfVCLCjtMW0C3EzA password
// admin username 

const express = require("express");
const mongoose = require("mongoose");

const router = require("./routes/Blgroutes");
const cors = require("cors");





const app = express();

app.use(express.json());

app.use(cors({
    origin:[`http://localhost:3000`]}
))

app.use("/blogs", router) //localhost:8080/blogs

mongoose.connect("mongodb+srv://admin:VfVCLCjtMW0C3EzA@cluster0.7bmokss.mongodb.net/?retryWrites=true&w=majority")
    .then(() => console.log("connected to db"))
    .then(() => {
        app.listen(8080);
    })
    .catch((err) => console.log(err));






