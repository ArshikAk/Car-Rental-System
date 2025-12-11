import { useState, useEffect } from "react";
import axios from "axios";

export default function CancelRentalForm() {
  const [rentalId, setRentalId] = useState("");
  const [rentals, setRentals] = useState([]);

  // Fetch all active rentals
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/rental/active")
      .then((res) => setRentals(res.data))
      .catch((err) => console.error(err));
  }, []);

  const cancelRental = async () => {
    if (!rentalId) {
      alert("Please select a rental to cancel");
      return;
    }

    try {
      await axios.delete(`http://localhost:5000/api/rental/${rentalId}`);
      alert("Rental cancelled successfully!");
      // remove cancelled rental from the dropdown
      setRentals(rentals.filter((r) => r._id !== rentalId));
      setRentalId("");
    } catch (err) {
      alert(err.response?.data?.detail || "Error cancelling rental");
    }
  };

  return (
    <div className="space-y-3">
      <select
        value={rentalId}
        onChange={(e) => setRentalId(e.target.value)}
        className="w-full border p-2 rounded"
      >
        <option value="">Select an active rental</option>
        {rentals.map((r) => (
          <option key={r._id} value={r._id}>
            Rental #{r._id} - Car ID: {r.car_id} ({r.renter_name})
          </option>
        ))}
      </select>

      <button
        onClick={cancelRental}
        className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
      >
        Cancel Rental
      </button>
    </div>
  );
}
