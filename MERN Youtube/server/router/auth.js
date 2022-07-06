const jwt = require("jsonwebtoken");
const express = require("express");
const bcrypt = require("bcryptjs");
const router = express.Router();
const authenticate = require("../middleware/authenticate")

require("../db/conn");

const User = require("../model/userSchema")

router.get("/", (req, res) => {
    res.send(" Home Hellow World from the Server Router JS");
});

// Using Promisees 

// router.post("/register", (req, res) => {

//     const { name, email, phone, work, password, cpassword } = req.body;

//     if (!name || !email || !phone || !work || !password || !cpassword) {
//         return res.status(422).json({ error: "Abe pura form to var" });
//     }

//     User.findOne({ email: email })
//         .then((userExist) => {
//             if (userExist) {
//                 return res.status(422).json({ error: " Email already Exists" });
//             }
//             const user = new User({ name, email, phone, work, password, cpassword })

//             user.save()
//                 .then(() => {
//                     res.status(201).json({ message: "user Registration Success" });
//                 })
//                 .catch((err) => {
//                     res.status(500).json({ errror: "Failed to Register" });
//                 })

//         })
//         .catch((err) => { console.log(err) })
//     // console.log(password);
//     // // res.send("mera reg page");
//     // // res.json({message : req.body});

// })




// Register Using Async Await  

router.post("/register", async (req, res) => {

    const { name, email, phone, work, password, cpassword } = req.body;

    if (!name || !email || !phone || !work || !password || !cpassword) {
        return res.status(422).json({ error: "Abe pura form to var" });
    }

    try {

        const userExist = await User.findOne({ email: email });

        if (userExist) {
            return res.status(422).json({ error: " Email already Exists" });
        }
        else if (password != cpassword) {
            return res.status(422).json({ error: " Password Not match" });
        }
        else {
            const user = new User({ name, email, phone, work, password, cpassword });

            //hassing
            //13 No Video

            await user.save();

            res.status(201).json({ message: "user Registration Success" });
        }



        // if (userRegister) {

        // }
        // else{
        //     res.status(500).json({ errror: "Failed to Register" });
        // }


    } catch (error) {
        console.log(error);

    }


})




// Login Route
router.post("/signin", async (req, res) => {
    // console.log(req.body);
    // res.json({ message: "awosome" });

    try {

        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ error: "please fill the data" })
        }

        const userLogin = await User.findOne({ email: email });


        if (userLogin) {
            // console.log(userLogin);
            const isMatch = await bcrypt.compare(password, userLogin.password)

            const token = await userLogin.generateAuthToken();
            console.log(token);

            res.cookie("jwtoken", token, {
                expires: new Date(Date.now() + 25892000),
                httpOnly: true

            });

            if (!isMatch) {
                res.status(400).json({ error: `Invalid Credencials` });
            }
            else {
                res.json({ message: `user sign Succsfully` });
            }
        }
        else {
            res.status(400).json({ error: `Invalid Credencials` });
        }



    } catch (error) {
        console.log(error);
    }
});

// About us ka page 
router.get("/about", authenticate, (req, res) => {
    res.send(" About Hello About Page ");
    res.send(req.rootUser);
});




module.exports = router;

