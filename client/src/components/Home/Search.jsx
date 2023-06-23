// Import required modules
import { useState } from "react";

const Search = ({ coupons, setFilteredCoupons }) => {
  // Create required state
  const [search, setSearch] = useState("");

  // Create a function to search coupons
  const searchCoupon = () => {
    const filteredCoupons = coupons.filter((coupon) =>
      coupon.code.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredCoupons(filteredCoupons);
  };

  // Create a function to handle key press
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      searchCoupon();
    }
  };

  return (
    <div className="px-4 m-2 flex items-center justify-center bg-white rounded">
      {/* Create input for search */}
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search Here....."
        className="w-full rounded px-2 py-4 outline-none"
        onKeyDown={handleKeyPress}
      />
      {/* Create button to search */}
      <button className="rounded px-6 py-4" onClick={searchCoupon}>
        Search
      </button>
    </div>
  );
};

export default Search;
