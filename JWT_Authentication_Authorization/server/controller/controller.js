const User = require("../model/User");
const bcrypt = require("bcryptjs");


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
}


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

    return res.status(201).json({ message: "Succesfully Loged In" });
}

exports.signupFun = signupFun;
exports.loginFun = loginFun;
