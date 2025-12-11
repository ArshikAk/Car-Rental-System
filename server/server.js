const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();


app.use(express.json());
app.use(cors());


mongoose
  .connect(process.env.DB_URL,)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("MongoDB Connection Error:", err));


app.get("/", (req, res) => {
  res.send("Working");
});


app.use("/api/cars", require("./routes/carsRoutes"));
app.use("/api/rental", require("./routes/rentalsRoutes"));


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
