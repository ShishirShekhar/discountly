// Import required modules
const express = require("express");
// Import required controller
const couponController = require("../controller/couponController");

// Initialize Router
const router = express.Router();

// Get all data
router.get("/coupons", couponController.getAllCoupon);

// Create the coupon
router.post("/create", couponController.createCoupon);

// Update the coupon
router.patch("/update", couponController.updateCoupon);

// Delete the coupon
router.delete("/delete", couponController.deleteCoupon);

// export the router
module.exports = router;
