
const dotenv = require("dotenv");
const mongoose = require("mongoose")
const express = require("express");
const app = express();

dotenv.config({ path: "./config.env" });

require("./db/conn");
// const User = require("./model/userSchema");
app.use(express.json());

// We link the router File
app.use(require("./router/auth"));


const PORT = process.env.PORT;






// MiddleWare
// const middleware = (req, res, next) => {
//     console.log("Helllow My Middleware");
//     next();
// }
// middleware();


app.get("/", (req, res) => {
    res.send(" Home Hellow World from the Server App JS");
});


// app.get("/about", middleware, (req, res) => {
//     res.send(" About Hello About Page ")
// });


app.get("/contact", (req, res) => {
    res.send(" Contact Hello Contact Page ")
});


app.get("/signin", (req, res) => {
    res.send(" signin Hello signin Page ")
});

app.get("/signup", (req, res) => {
    res.send(" signup Hello signup Page ")
});


app.listen(PORT, () => {
    console.log(`Server is running at port no ${PORT}`);
})