const express = require('express');
const router = express.Router();
const neartomeController = require("../controller/ntmController")

router.get("/service", neartomeController.service)
router.get("/category", neartomeController.category)

module.exports = router