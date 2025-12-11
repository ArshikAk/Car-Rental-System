import CarList from "../components/CarList";

export default function ViewCarsPage() {
  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Available Cars</h1>
      <CarList />
    </div>
  );
}
