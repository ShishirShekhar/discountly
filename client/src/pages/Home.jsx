import { useEffect, useState } from "react";
import axios from "axios";
import Coupon from "../components/Home/Coupon";
import Nav from "../components/Nav";
import AddCoupon from "../components/Home/AddCoupon";
import EditCoupon from "../components/Home/EditCoupon";
import Search from "../components/Home/Search";

const Home = () => {
  const [coupons, setCoupons] = useState([]);
  const [filteredCoupons, setFilteredCoupons] = useState([]);
  const [add, setAdd] = useState(false);
  const [edit, setEdit] = useState(false);
  const [data, setData] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3001/coupons").then((response) => {
      setCoupons(response.data);
    });
  }, [add, data, edit]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear().toString();

    return `${day}/${month}/${year}`;
  };

  return (
    <div className="min-h-screen bg-blue-200">
      <Nav toggleAdd={() => setAdd((prev) => !prev)} />

      <Search coupons={coupons} setFilteredCoupons={setFilteredCoupons} />

      <div className="flex flex-wrap gap-4 p-4 md:p-10 min-h-screen justify-center md:justify-start">
        {filteredCoupons.length > 0
          ? filteredCoupons.map((coupon) => (
              <Coupon
                key={coupon._id}
                code={coupon.code}
                amount={coupon.discountAmount}
                date={formatDate(coupon.expirationDate)}
                toggleEdit={() => setEdit((prev) => !prev)}
                setData={setData}
              />
            ))
          : coupons.map((coupon) => (
              <Coupon
                key={coupon._id}
                code={coupon.code}
                amount={coupon.discountAmount}
                date={formatDate(coupon.expirationDate)}
                toggleEdit={() => setEdit((prev) => !prev)}
                setData={setData}
              />
            ))}
      </div>

      {add && <AddCoupon add={add} setAdd={setAdd} />}
      {edit && <EditCoupon edit={edit} setEdit={setEdit} data={data} />}
    </div>
  );
};

export default Home;
