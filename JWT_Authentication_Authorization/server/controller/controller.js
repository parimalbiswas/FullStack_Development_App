const User = require("../model/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const JWT_SECRECT_KEY = "Parimal";


const signupFun = async (req, res) => {
    const { name, email, password } = req.body;
    let existUser;

    try {
        existUser = await User.findOne({ email: email })
    } catch (error) {
        console.log(error);
    }

    if (existUser) {
        return res.status(400).json({ message: "user already exists !! Login Insteed" });
    }

    const hasedPassword = bcrypt.hashSync(password);

    const user = new User({
        name: name,
        email: email,
        password: hasedPassword
    });

    try {
        await user.save();
    } catch (error) {
        console.log(error);
    }

    return res.status(201).json({ message: user });
};


const loginFun = async (req, res) => {

    const { email, password } = req.body;

    let existUser;

    try {
        existUser = await User.findOne({ email: email });
    } catch (error) {
        console.log(error);
    }

    if (!existUser) {
        return res.status(400).json({ message: "User Not Found! SignUp Please" })
    }

    const isPasswordCorrect = bcrypt.compareSync(password, existUser.password);

    if (!isPasswordCorrect) {
        return res.status(400).json({ message: "Invalid Password / Email" })
    }

    const token = jwt.sign({ id: existUser.id }, JWT_SECRECT_KEY, {
        expiresIn: "2hr"
    });

    return res.status(201).json({ message: "Succesfully Loged In", user: existUser, token });
};



const veryfyToken = async (req, res, next) => {
    const headers = req.headers[`authorization`];
    // console.log(headers);
    const token = headers.split(" ")[1];
    if (!token) {
        res.status(404).json({ message: "No token found" })
    }

    jwt.verify(String(token), JWT_SECRECT_KEY, (err, user) => {
        if (err) {
            return res.status(400).json({ message: "Invalid token" })
        }
        console.log(user.id);
        req.id = user.id;
    })
    next();
};




const getUser = async (req, res, next) => {
    const userId = req.id;
    let user;
    try {
        user = await User.findById(userId, "-password")
    } catch (error) {
        return new Error(error);
        // console.log(error);
    }

    if (!user) {
        return res.status(404).json({ message: "User Not Found" })
    }
    return res.status(200).json({ user })
}


exports.signupFun = signupFun;
exports.loginFun = loginFun;
exports.veryfyToken = veryfyToken;
exports.getUser = getUser;

https://www.youtube.com/watch?v=gWIbT1fbLlA&t=711s

11:11:05 watched

