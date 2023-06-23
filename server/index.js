// Import required modules
require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
// Import required routes
const couponRoutes = require("./routes/couponRoutes");
// Import database
const database = require("./services/database");

// Initialize app
const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// Mongodb connection
database.connect();

// Routes
app.get("/", (req, res) => {
  return res.status(400).json({ message: "Server is running successfully!" });
});

// Use the couponRoute middleware
app.use(couponRoutes);

app.listen(port, () => {
  // Use the port variable
  console.log(`Server is running on port ${port}`);
});
