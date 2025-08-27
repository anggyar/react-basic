import React, { useContext, useEffect, useState } from "react";
import Button from "../Elements/Button/index.jsx";
import { useLogin } from "../../hooks/useLogin.jsx";
import { useSelector } from "react-redux";
import { Darkmode } from "../../context/DarkMode.jsx";
import { useTotalPrice } from "../../context/totalPriceContext.jsx";

const NavbarLayout = () => {
  const { isDarkMode, setIsDarkMode } = useContext(Darkmode);
  const { total } = useTotalPrice();

  const username = useLogin();
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("password");
    localStorage.removeItem("cart");
    window.location.href = "/login";
  };

  const [totalCart, setTotalCart] = useState(0);
  const cart = useSelector((state) => state.cart.data);

  useEffect(() => {
    const sum = cart.reduce((acc, item) => {
      return acc + item.qty;
    }, 0);
    setTotalCart(sum);
  }, [cart]);

  return (
    <div className='flex justify-end h-10 bg-blue-600 text-white items-center px-10'>
      {username}
      <Button
        classname='ml-5 bg-black'
        onClick={handleLogout}
      >
        Logout
      </Button>
      <div className='flex items-center bg-gray-800 p-2 rounded-md mx-5'>
        Item: {totalCart} | Price {total}
      </div>
      <Button
        className='ml-5 bg-black'
        onClick={() => setIsDarkMode(!isDarkMode)}
      >
        {isDarkMode ? "Light" : "Dark"}
      </Button>
    </div>
  );
};

export default NavbarLayout;
