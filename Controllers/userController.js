import User from "../Models/User.js";

export const registerController = async (req, res) => {
    try {
        const {name, email, password} = req.body;
        if (!name || !email || !password) {
            return res.status(422).json({
                error: "Please fill all credentials"
            });
        };
        const user = await User.findOne({email: email});
        if (user) {
            return(200).json({
                message: "User already exists"
            });
        };
        const newUser = new User({
            name: name,
            email: email,
            password: password
        });
        await newUser.save();
        res.status(201).json({
            newUser
        });
    } catch (error) {
        console.log(error);
    }
};
export const loginController = async (req, res) => {
    try {
        const {email, password} = req.body;
        console.log(req.body);
        if (!email || !password) {
            res.status(422).json({
                erorr: "Please fill all credentials"
            });
        };
        const user = await User.findOne({email: email});
        if (!user) {
            return res.status(404).json({
                error: "User not found"
            });
        };
        if (password === user.password) {
            res.status(200).json({
                user
            });
        }else {
            res.status(404).json({
                error: "Please fill right credentials"
            });
        };
    } catch (error) {
        console.log(error);
    }
};