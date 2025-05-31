const User = require('../models/User')

//Route test
const test = (req, res, next) => {
    res.send('Auth Route Works')
}

// Register Function
const register = async(req, res, next) => {
    const { username, email, password } = req.body;

    try {
        const user = await User.create({
            username, email, password
        })
        res.status(201).json({
            success: true,
            user
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        })
    }

};

// Login Function
const login = (req, res, next) => {
    res.send('Login Route');
};

// Forgot Password Function
const forgotpassword = (req, res, next) => {
    res.send('Forgot Password Route');
};

// Reset Password Function
const resetpassword = (req, res, next) => {
    res.send('Reset Password Route');
};

module.exports = {
    register,
    login,
    forgotpassword,
    resetpassword, test
};
