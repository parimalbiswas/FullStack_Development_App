// console.log("Hello");

const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/route");

const app = express();
app.use(express.json());
app.use("/api", router);



mongoose.connect(`mongodb+srv://UserAuth:qPxLkxuNkuvoKwQf@cluster0.ik44sot.mongodb.net/?retryWrites=true&w=majority`)
    .then(() => {
        app.listen(8080)
        console.log("database Connected")
        console.log("Server running at 8080");
    })
    .catch((err) => console.log(err));


// app.listen(8080, () => {
//     console.log("Server running at 8080");
// })


// qPxLkxuNkuvoKwQf

// mongodb+srv://UserAuth:<password>@cluster0.ik44sot.mongodb.net/?retryWrites=true&w=majority