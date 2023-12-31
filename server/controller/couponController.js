// Import required models
const Coupon = require("../model/coupon");

// Get all coupons
exports.getAllCoupon = async (req, res) => {
  try {
    const coupons = await Coupon.find();
    res.status(200).json(coupons);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "An error occurred" });
  }
};

// Create new coupon
exports.createCoupon = async (req, res) => {
  try {
    const { discountAmount, expirationDate } = req.body;

    // Create a function to generate random code
    const generateCode = () => {
      const characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      const length = 8;
      let result = "";
      for (let i = 0; i < length; i++) {
        result += characters.charAt(
          Math.floor(Math.random() * characters.length)
        );
      }

      return result;
    };

    code = generateCode();

    // Check if the code already exists
    const existingCoupon = await Coupon.findOne({ code });
    // Generate the code
    while (existingCoupon) {
      code = generateCode();
      existingCoupon = await Coupon.findOne({ code });
    }

    // Create new coupon
    const newCoupon = new Coupon({
      code,
      discountAmount,
      expirationDate,
    });
    // Save coupon
    await newCoupon.save();

    res.status(201).json({ message: "Coupon sent successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "An error occurred" });
  }
};

// Update existing coupon
exports.updateCoupon = async (req, res) => {
  try {
    const { code } = req.params;
    const { discountAmount, expirationDate } = req.body;

    // Update the coupon in the database
    const updatedCoupon = await Coupon.findOneAndUpdate(
      { code: code },
      { discountAmount, expirationDate },
      { new: true } // To return the updated coupon
    );

    if (!updatedCoupon) {
      return res.status(404).json({ error: "Coupon not found" });
    }

    res.status(200).json(updatedCoupon);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};

// Delete a coupon
exports.deleteCoupon = async (req, res) => {
  try {
    const { code } = req.params;

    // Find the coupon by code and delete it
    const deletedCoupon = await Coupon.findOneAndDelete({ code });

    if (!deletedCoupon) {
      return res.status(404).json({ error: "Coupon not found" });
    }

    res.status(200).json({ message: "Coupon deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};
