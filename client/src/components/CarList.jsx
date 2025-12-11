import { useEffect, useState } from "react";
import axios from "axios";

export default function CarList() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/cars")
      .then((res) => setCars(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="space-y-3">
      {cars.length === 0 ? (
        <p>No cars available.</p>
      ) : (
        cars.map((car) => (
          <div key={car.id} className="p-3 border rounded bg-gray-50 shadow">
            <p>
              <strong>{car.make} {car.model}</strong> ({car.year})
            </p>
            <p>Price per day: ₹{car.price_per_day}</p>
          </div>
        ))
      )}
    </div>
  );
}
