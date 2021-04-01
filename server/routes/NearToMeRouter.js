

const express = require('express');
const router = express.Router();

const homeController = require('../controller/homeController');
const userController = require('../controller/userController');
const connectController = require('../controller/connectController');
const categoryController = require('../controller/categoryController');
//const neartomeController = require('../controller/ntmController');

// Home page Declaration
router.get("/home",homeController.get)

//connectController declaration
router.post("/signin",connectController.connect)
router.post("/signup",connectController.signup)


//categoryController declaration
router.get("/category",categoryController.category)
router.get("/subCategory",categoryController.subCategory)
router.get("/services",categoryController.services)
router.get("/provider",categoryController.provider)

// userController declaration
router.get("/profil",userController.profil)
router.get("/liked",userController.liked)
router.get("/payment",userController.payment)
router.get("/parameters",userController.parameters)



/*router.get("/service", neartomeController.service)
router.get("/category", neartomeController.category)
router.get("/subCategory",neartomeController.subCategory)
router.get("/createMeets",neartomeController.createMeetings)
router.get("/availables",neartomeController.availables)
router.get("/createUser",neartomeController.createUser)*/
module.exports = router