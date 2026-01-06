// const express=require('express')
// const {LoginController}=require('../controllers/user')

// const Router=express.Router()
// // Router.post('/register',userController)
// Router.post('/login',LoginController)
// module.exports=Router;

const express = require("express");
const router = express.Router();

const { signup, login } = require("../controllers/user");

// Signup
router.post("/signup", signup);

// Login
router.post("/login", login);

module.exports = router;




