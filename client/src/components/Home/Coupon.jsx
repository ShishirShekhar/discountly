// Import required modules
import axios from "axios";
import { toast } from "react-toastify";

const Coupon = ({ code, amount, date, toggleEdit, setData }) => {
  // Create a function to handle delete
  const deleteCoupon = () => {
    axios
      .delete(`${process.env.REACT_APP_API}/delete/${code}`)
      .then((response) => {
        console.log(response);
        setData("deleted");

        // Show success message
        toast.success("Coupon deleted successfully");
      })
      .catch((error) => {
        console.log(error);
        // show error message
        toast.error(error);
      });
  };

  return (
    // Create coupon body
    <div className="bg-white h-56 rounded flex flex-col justify-between">
      {/* Add heading */}
      <h1 className="text-xl font-bold bg-slate-200 text-blue-500 p-4">
        {code}
      </h1>
      {/* Add other details of the coupon */}
      <div className="flex flex-col gap-4 p-4 rounded">
        <p>
          Discount Amount: <span>₹ {amount}</span>
        </p>
        <p>
          Expiration Date: <span>{date}</span>
        </p>
      </div>

      {/* Add button to edit and delete the coupon */}
      <div className="flex justify-between bg-slate-200 p-4 rounded">
        <button
          className="bg-blue-500 text-white px-4 py-1 rounded"
          onClick={() => {
            toggleEdit();
            setData({ code, amount, date });
          }}
        >
          Edit
        </button>
        <button
          className="bg-red-500 text-white px-4 py-1 rounded"
          onClick={deleteCoupon}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Coupon;
