import { useState, useEffect } from "react";
import axios from "axios";

export default function RentCarForm() {
  const [form, setForm] = useState({
    car_id: "",
    renter_name: "",
    renter_email: "",
    start_date: "",
    end_date: "",
  });

  const [cars, setCars] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/cars")
      .then((res) => setCars(res.data))
      .catch((err) => console.error(err));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const rentCar = async () => {
    if (!form.car_id) {
      alert("Please select a car");
      return;
    }

    try {
      const payload = { ...form, car_id: Number(form.car_id) };
      const res = await axios.post(
        `http://localhost:5000/api/rental/${form.car_id}/rent`,
        payload
      );
      alert("Car rented successfully!");
      console.log(res.data);
    } catch (err) {
      alert(err.response?.data?.detail || "Error renting car");
    }
  };

  return (
    <div className="space-y-3">
      <select
        name="car_id"
        value={form.car_id}
        onChange={handleChange}
        className="w-full border p-2 rounded"
      >
        <option value="">Select a car</option>
        {cars.map((car) => (
          <option key={car.id} value={car.id}>
            {car.make} {car.model} ({car.year}) - ₹{car.price_per_day}/day
          </option>
        ))}
      </select>

      <input
        type="text"
        name="renter_name"
        placeholder="Your Name"
        onChange={handleChange}
        className="w-full border p-2 rounded"
      />

      <input
        type="email"
        name="renter_email"
        placeholder="Your Email"
        onChange={handleChange}
        className="w-full border p-2 rounded"
      />

      <input
        type="date"
        name="start_date"
        onChange={handleChange}
        className="w-full border p-2 rounded"
      />

      <input
        type="date"
        name="end_date"
        onChange={handleChange}
        className="w-full border p-2 rounded"
      />

      <button
        onClick={rentCar}
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        Rent Car
      </button>
    </div>
  );
}
