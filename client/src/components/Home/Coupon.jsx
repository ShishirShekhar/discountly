import axios from "axios";

const Coupon = ({ code, amount, date, toggleEdit, setData }) => {
  const deleteCoupon = () => {
    axios
      .delete(`http://localhost:3001/delete/${code}`)
      .then((response) => {
        console.log(response);
        setData("deleted");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="bg-white h-56 rounded flex flex-col justify-between">
      <h1 className="text-xl font-bold bg-slate-200 text-blue-500 p-4">{code}</h1>
      <div className="flex flex-col gap-4 p-4 rounded">
        <p>
          Discount Amount: <span>₹ {amount}</span>
        </p>
        <p>
          Expiration Date: <span>{date}</span>
        </p>
      </div>

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
