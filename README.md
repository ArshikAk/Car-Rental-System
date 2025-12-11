# Car Rental System (MERN Stack)

A simple Car Rental System built using **MongoDB, Express.js, ReactJS, and Node.js (MERN)**.
Users can **view cars, rent cars, and cancel rentals**. The frontend is built with **ReactJS and TailwindCSS**.

---

## **Features**

* View all available cars.
* Rent a car for a specified period.
* Cancel an active rental.
* Numeric IDs for cars for easy selection.
* Active rental management with validation (no overlapping rentals).

---

## **Project Structure**

```
car-rental-system/
├─ server/             # Backend (Node.js + Express)
│  ├─ models/          # Mongoose schemas
│  │   ├─ Car.js
│  │   └─ Rental.js
│  ├─ controllers/     # API logic
│  │   ├─ carController.js
│  │   └─ rentalController.js
│  ├─ routes/          # API routes
│  │   ├─ carsRoutes.js
│  │   └─ rentalRoutes.js
│  ├─ server.js        # Entry point
│  └─ .env             # Environment variables (DB_URL, PORT)
├─ client/             # Frontend (ReactJS + TailwindCSS)
│  ├─ src/
│  │   ├─ components/  # Components (CarList, RentCarForm, CancelRentalForm)
│  │   ├─ pages/       # Pages
│  │   └─ App.jsx      # App routing
│  └─ package.json
└─ README.md
```

---

## **Prerequisites**

* Node.js (v18+ recommended)
* npm
* MongoDB running locally or a MongoDB Atlas cluster

---

## **Setup Instructions**

### 1. Backend

1. Navigate to the `server` folder:

```bash
cd server
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in `server/`:

```
DB_URL=mongodb://localhost:27017/car_rental
PORT=5000
```

4. Start the server:

```bash
node server.js
```

You should see:

```
Server running on port 5000
DB Connected
```

### 2. Frontend

1. Navigate to the `client` folder:

```bash
cd client
```

2. Install dependencies:

```bash
npm install
```

3. Start the frontend:

```bash
npm start
```

The React app should open automatically at [http://localhost:3000](http://localhost:3000).

---

## **API Endpoints**

| Method | Endpoint               | Description                        |
| ------ | ---------------------- | ---------------------------------- |
| POST   | `/api/cars`            | Add a new car                      |
| GET    | `/api/cars`            | Get all cars                       |
| GET    | `/api/cars/:id`        | Get a specific car by numeric ID   |
| POST   | `/api/rental/:id/rent` | Rent a car (numeric car ID in URL) |
| DELETE | `/api/rental/:id`      | Cancel rental by rental ObjectId   |
| GET    | `/api/rental/active`   | Get all active rentals             |

---

## **Database**

* **MongoDB** with two collections:

  1. `cars` – stores car details (numeric `id`, make, model, year, price_per_day)
  2. `rentals` – stores rental records (car_id, renter_name, renter_email, start_date, end_date, active)

---

## **Sample Data**

You can insert dummy cars directly into MongoDB using Compass or shell:

```javascript
db.cars.insertMany([
  { id: 1, make: "Toyota", model: "Corolla", year: 2020, price_per_day: 1500 },
  { id: 2, make: "Honda", model: "Civic", year: 2019, price_per_day: 1400 },
  { id: 3, make: "Ford", model: "EcoSport", year: 2021, price_per_day: 1800 },
  { id: 4, make: "Hyundai", model: "Creta", year: 2020, price_per_day: 1600 },
  { id: 5, make: "Kia", model: "Seltos", year: 2021, price_per_day: 1700 },
  { id: 6, make: "Mahindra", model: "XUV500", year: 2019, price_per_day: 2000 },
  { id: 7, make: "Maruti", model: "Swift", year: 2022, price_per_day: 1200 },
  { id: 8, make: "Tata", model: "Harrier", year: 2021, price_per_day: 1900 },
  { id: 9, make: "BMW", model: "X1", year: 2020, price_per_day: 3500 },
  { id: 10, make: "Audi", model: "A3", year: 2021, price_per_day: 4000 }
]);
```

---

## **Frontend Usage**

1. **Home Page** – Navigate to all pages (View Cars, Rent Car, Cancel Rental).
2. **View Cars Page** – Displays all cars with make, model, year, and price.
3. **Rent Car Page** – Select car from dropdown, enter your name, email, and rental dates.
4. **Cancel Rental Page** – Select an active rental to cancel from the dropdown.

---

## **Notes**

* Car IDs are numeric for easier handling.
* Rentals cannot overlap for the same car.
* Cancelled rentals free up the car for future rentals.
