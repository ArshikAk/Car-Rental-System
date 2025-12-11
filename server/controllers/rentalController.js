const Rental = require("../models/Rental");
const Car = require("../models/Car");


async function findOverlappingRentals(carId, startDate, endDate) {
  return Rental.find({
    car_id: carId,
    active: true,
    start_date: { $lte: endDate },
    end_date: { $gte: startDate },
  });
}


exports.rentCar = async (req, res) => {
  try {
    const carId = Number(req.params.id); 
    const { renter_name, renter_email, start_date, end_date } = req.body;

    if (isNaN(carId)) {
      return res.status(400).json({ detail: "Invalid car id" });
    }

    const car = await Car.findOne({ id: carId });
    if (!car) return res.status(404).json({ detail: "Car not found" });

    const start = new Date(start_date);
    const end = new Date(end_date);
    if (end < start) {
      return res.status(400).json({ detail: "end_date must be >= start_date" });
    }

    const overlaps = await findOverlappingRentals(carId, start, end);
    if (overlaps.length > 0) {
      return res
        .status(400)
        .json({ detail: "Car is already rented for the selected dates" });
    }

    const rental = new Rental({
      car_id: carId,
      renter_name,
      renter_email,
      start_date: start,
      end_date: end,
      active: true,
    });

    await rental.save();
    return res.status(201).json(rental);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ detail: "Server error" });
  }
};


exports.cancelRental = async (req, res) => {
  try {
    const rentalId = req.params.id;


    if (!rentalId.match(/^[0-9a-fA-F]{24}$/)) {
      return res.status(400).json({ detail: "Invalid rental id" });
    }

    const rental = await Rental.findById(rentalId);
    if (!rental || !rental.active) {
      return res.status(404).json({ detail: "Active rental not found" });
    }

    rental.active = false;
    await rental.save();

    return res.json({ detail: "Rental cancelled", rental_id: rental._id });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ detail: "Server error" });
  }
};


exports.getActiveRentals = async (req, res) => {
  try {
    const rentals = await Rental.find({ active: true });
    res.json(rentals);
  } catch (err) {
    console.error(err);
    res.status(500).json({ detail: "Server error" });
  }
};
