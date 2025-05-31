
// Register Function
const register = (req, res, next) => {
    res.send('Register Route');
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
    resetpassword
};
