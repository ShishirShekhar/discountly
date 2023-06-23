import { Link } from "react-router-dom";

const Nav = ({ toggleAdd }) => {
  return (
    <div className="bg-slate-800 text-blue-500 py-4 px-2 flex justify-between">
      <Link to="/">
        <h1 className="text-2xl font-bold">DiscountLY</h1>
      </Link>
      <button
        className="bg-blue-500 text-white px-4 rounded"
        onClick={toggleAdd}
      >
        Add Coupon
      </button>
    </div>
  );
};

export default Nav;
