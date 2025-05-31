const express = require('express');
const router = express.Router();
// console.log(router)

/*Notes:
1. express.Router() is a method in Express.js that creates a new router object. It behaves like a mini-application capable of defining route handlers, using middleware functions, managing route parameters

*/

//Import controller functions
const { register, login, forgotpassword, resetpassword, test } = require('../controllers/auths');

//Define routes
router.route('/test').get(test)
  
router.route('/register').post(register);

router.route('/login').post(login);

router.route('/forgotpassword').post(forgotpassword);

router.route('/resetpassword/:resetToken').put(resetpassword);

//Export the router
module.exports = router