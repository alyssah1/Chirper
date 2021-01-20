const router = require("express").Router();
const orderController = require("../../controllers/orderController");


// Matches with "/api/books"
router.route("/create").post(orderController.createOrder);

module.exports = router;