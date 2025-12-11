const express = require("express");
const router = express.Router();

const { createCar, getCar, getCars} = require("../controllers/carController");

router.post("/", createCar);
router.get("/", getCars);
router.get("/:id", getCar);

module.exports = router;
