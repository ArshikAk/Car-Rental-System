import { Routes, Route,} from "react-router-dom";

import HomePage from "./pages/HomePage";
import ViewCarsPage from "./pages/ViewCarsPage";
import RentCarPage from "./pages/RentCarPage";
import CancelRentalPage from "./pages/CancelRentalPage";

export default function App() {
  return (
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cars" element={<ViewCarsPage />} />
        <Route path="/rent" element={<RentCarPage />} />
        <Route path="/cancel" element={<CancelRentalPage />} />
      </Routes>
  );
}
