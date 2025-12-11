import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">Car Rental System</h1>

      <div className="grid gap-4">
        <Link to="/cars" className="bg-blue-600 text-white py-2 px-6 rounded text-center">
          View All Cars
        </Link>

        <Link to="/rent" className="bg-green-600 text-white py-2 px-6 rounded text-center">
          Rent a Car
        </Link>

        <Link to="/cancel" className="bg-red-600 text-white py-2 px-6 rounded text-center">
          Cancel Rental
        </Link>
      </div>
    </div>
  );
}
