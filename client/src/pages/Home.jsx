// Import required modules
import { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// Import required components
import Coupon from "../components/Home/Coupon";
import Nav from "../components/Nav";
import AddCoupon from "../components/Home/AddCoupon";
import EditCoupon from "../components/Home/EditCoupon";
import Search from "../components/Home/Search";

const Home = () => {
  // Create required states
  const [coupons, setCoupons] = useState([]);
  const [filteredCoupons, setFilteredCoupons] = useState([]);
  const [add, setAdd] = useState(false);
  const [edit, setEdit] = useState(false);
  const [data, setData] = useState("");

  // Fetch data
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API}/coupons`)
      .then((response) => {
        setCoupons(response.data);
      })
      .catch((error) => {
        // console log error
        console.log(error);
        // show error message
        toast.error(error);
      });
  }, [add, data, edit]);

  // Create a function to format date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear().toString();

    return `${day}/${month}/${year}`;
  };

  return (
    <div className="min-h-screen bg-blue-200">
      {/* Add Nav component */}
      <Nav toggleAdd={() => setAdd((prev) => !prev)} />
      {/* Add toast container */}
      <ToastContainer />
      {/* Add Search component */}
      <Search coupons={coupons} setFilteredCoupons={setFilteredCoupons} />
      {/* Add Coupons */}
      <div className="flex flex-wrap gap-4 p-4 md:p-10 justify-center md:justify-start">
        {/* If filter is applied show filter coupon else show all coupons */}
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
      {/* Add AddCoupon component and EditCoupon component  */}
      {add && <AddCoupon add={add} setAdd={setAdd} />}
      {edit && <EditCoupon edit={edit} setEdit={setEdit} data={data} />}
    </div>
  );
};

export default Home;
