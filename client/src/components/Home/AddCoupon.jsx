// Import required modules
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const AddCoupon = ({ add, setAdd }) => {
  // Create required states
  const [code, setCode] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  // Generate code when clicked to add
  useEffect(() => {
    generateCode();
  }, [add]);

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

    setCode(result);
  };

  // Create a function to handle submit
  const handleSubmit = (e) => {
    // Prevent default behavior
    e.preventDefault();

    // Create a object of coupon
    const coupon = {
      code: code,
      discountAmount: amount,
      expirationDate: date,
    };

    // Post new coupon to the database
    axios
      .post(`${process.env.REACT_APP_API}/create`, coupon)
      .then((response) => {
        // console log response
        console.log(response.data);

        // Rest every field and close the division
        setCode("");
        setAmount("");
        setDate("");
        setAdd(false);

        // Show success message
        toast.success("Coupon created successfully");
      })
      .catch((error) => {
        // console log error
        console.log(error);
        // show error message
        toast.error(error);
      });
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="bg-white rounded w-72 h-96">
        {/* Create a division to show heading */}
        <div className="flex justify-between items-center bg-slate-200 h-1/6 px-4 rounded">
          <h1 className="text-xl font-bold text-blue-500">Add Coupon</h1>
          <button
            className="bg-red-500 text-white px-4 py-1 rounded"
            onClick={() => setAdd(!add)}
          >
            Close
          </button>
        </div>

        {/* Create form */}
        <form
          className="flex flex-col justify-between h-5/6 gap-2 p-4"
          onSubmit={handleSubmit}
        >
          {/* Create label and input for coupon code */}
          <label htmlFor="code">Coupon Code:</label>
          <input
            type="text"
            id="code"
            name="code"
            placeholder="Coupon Code"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            required
          />

          {/* Create label and input for discountAmount */}
          <label htmlFor="discountAmount">Discount Amount:</label>
          <input
            type="number"
            id="discountAmount"
            name="discountAmount"
            placeholder="Discount Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />

          {/* Create label and input for expirationDate */}
          <label htmlFor="expirationDate">Expiration Date:</label>
          <input
            type="date"
            id="expirationDate"
            name="expirationDate"
            placeholder="Expiration Date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />

          {/* Create a button to submit the form */}
          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-1 rounded"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCoupon;
