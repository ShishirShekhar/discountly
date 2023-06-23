import { useState } from "react";
import axios from "axios";

const EditCoupon = ({ edit, setEdit, data }) => {
  const code = data.code;
  const [amount, setAmount] = useState(data.amount);
  const [date, setDate] = useState(data.date);

  const handleSubmit = (e) => {
    e.preventDefault();

    const coupon = {
      code: code,
      discountAmount: amount,
      expirationDate: date,
    };

    axios
      .patch(`http://localhost:3001/update/${code}`, coupon)
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
      <div className="bg-white rounded w-72 h-96">
        <div className="flex justify-between items-center bg-slate-200 h-1/6 px-4 rounded">
          <h1 className="text-xl font-bold text-blue-500">Edit Coupon</h1>
          <button
            className="bg-red-500 text-white px-4 py-1 rounded"
            onClick={() => setEdit(!edit)}
          >
            Close
          </button>
        </div>
        <form
          className="flex flex-col justify-between h-5/6 gap-2 p-4"
          onSubmit={handleSubmit}
        >
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
