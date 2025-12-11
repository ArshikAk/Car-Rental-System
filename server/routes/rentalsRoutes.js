const express = require("express");
const router = express.Router();
const { rentCar, cancelRental, getActiveRentals } = require("../controllers/rentalController");


router.post("/:id/rent", rentCar);
router.delete("/:id", cancelRental);
router.get("/active", getActiveRentals);

module.exports = router;
