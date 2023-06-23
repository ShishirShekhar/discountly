// Import required modules
import { useState } from "react";
import axios from "axios";

const EditCoupon = ({ edit, setEdit, data }) => {
  // Create required states
  const code = data.code;
  const [amount, setAmount] = useState(data.amount);
  const [date, setDate] = useState(data.date);

  // Create a function to handle form submit
  const handleSubmit = (e) => {
    // Prevent default behavior
    e.preventDefault();

    // Create a coupon object
    const coupon = {
      code: code,
      discountAmount: amount,
      expirationDate: date,
    };

    // Patch the required coupon
    axios
      .patch(`https://discountly-server.vercel.app/update/${code}`, coupon)
      .then((response) => {
        console.log(response.data);

        // Rest every field and close the division
        setAmount("");
        setDate("");
        setEdit(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="bg-white rounded w-72 h-96 shadow-2xl">
        {/* Create a division to show heading */}
        <div className="flex justify-between items-center bg-slate-200 h-1/6 px-4 rounded">
          <h1 className="text-xl font-bold text-blue-500">Edit Coupon</h1>
          <button
            className="bg-red-500 text-white px-4 py-1 rounded"
            onClick={() => setEdit(!edit)}
          >
            Close
          </button>
        </div>
        {/* Create form */}
        <form
          className="flex flex-col justify-between h-5/6 gap-2 p-4"
          onSubmit={handleSubmit}
        >
          {/* Create label for code */}
          <label htmlFor="code">Coupon Code:</label>
          <input
            type="text"
            id="code"
            name="code"
            placeholder="Coupon Code"
            value={code}
            readOnly
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

export default EditCoupon;
