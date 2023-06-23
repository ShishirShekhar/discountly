import { useState } from "react";

const Search = ({ coupons, setFilteredCoupons }) => {
  const [search, setSearch] = useState("");

  const searchCoupon = () => {
    const filteredCoupons = coupons.filter((coupon) =>
      coupon.code.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredCoupons(filteredCoupons);
  };

  return (
    <div className="px-4 m-2 flex items-center justify-center bg-white rounded">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search Here....."
        className="w-full rounded px-2 py-4 outline-none"
      />
      <button className="rounded px-6 py-4" onClick={searchCoupon}>
        Search
      </button>
    </div>
  );
};

export default Search;
