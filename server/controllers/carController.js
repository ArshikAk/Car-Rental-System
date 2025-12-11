const Car = require("../models/Car");


exports.createCar = async (req, res) => {
  try {
    const car = await Car.create(req.body);
    res.status(201).json(car);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


exports.getCars = async (req, res) => {
  try {
    const cars = await Car.find();
    res.json(cars);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch cars" });
  }
};


exports.getCar = async (req, res) => {
  try {
    const carId = Number(req.params.id);
    if (isNaN(carId)) return res.status(400).json({ error: "Invalid ID format" });

    const car = await Car.findOne({ id: carId });
    if (!car) return res.status(404).json({ error: "Car not found" });

    res.json(car);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch car" });
  }
};
