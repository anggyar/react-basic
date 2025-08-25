import React, { Fragment, useEffect, useState } from "react";
import CardProducts from "../components/Fragments/CardProducts.jsx";
import Button from "../components/Elements/Button/index.jsx";

const products = [
  {
    id: 1,
    title: "Nike Air Jordan Blue - Water Hashira Edition",
    description:
      "This is a limited edition Nike Air Jordan shoes inspired by the Water Hashira from Demon Slayer. Perfect for collectors and fans alike.",
    price: 2000000,
    image: "/images/shoes.jpg",
  },
  {
    id: 2,
    title: "Copy of Nike Air Jordan",
    description:
      "This is a copy of the Nike Air Jordan shoes, designed to look similar but at a more affordable price.",
    price: 1500000,
    image: "/images/shoes.jpg",
  },
  {
    id: 3,
    title: "Nike Air Jordan Blue - Water Hashira Edition",
    description:
      "This is a limited edition Nike Air Jordan shoes inspired by the Water Hashira from Demon Slayer. Perfect for collectors and fans alike.",
    price: 1000000,
    image: "/images/shoes.jpg",
  },
];

const email = localStorage.getItem("email");

export default function ProductsPage() {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
  }, []);

  useEffect(() => {
    if (cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        const product = products.find((product) => product.id === item.id);
        return acc + product.price * item.qty;
      }, 0);
      setTotalPrice(sum);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    localStorage.removeItem("cart");
    window.location.href = "/login";
  };

  const handleAddToCart = (id) => {
    if (cart.find((item) => item.id === id)) {
      setCart(
        cart.map((item) => (item.id === id ? { ...item, qty: item.qty + 1 } : item))
      );
    } else {
      setCart([...cart, { id, qty: 1 }]);
    }
  };

  // useRef basic -> https://react.dev/learn/manipulating-the-dom-with-refs
  // const cartRef = useRef(JSON.parse(localStorage.getItem("cart")) || []);
  // const handleAddToCardRef = (id) => {
  //   cartRef.current = [...cartRef.current, { id, qty: 1 }];
  //   localStorage.setItem("cart", JSON.stringify(cartRef.current));
  // };
  return (
    <Fragment>
      <div className='flex justify-end h-10 bg-blue-600 text-white items-center px-10'>
        {email}
        <Button
          classname='ml-5 bg-black'
          onClick={handleLogout}
        >
          Logout
        </Button>
      </div>
      <div className='flex justify-center py-5'>
        <div className='w-2/3 flex flex-wrap'>
          {products.map((product) => (
            <CardProducts key={product.id}>
              <CardProducts.Header image={product.image} />
              <CardProducts.Body title={product.title}>
                {product.description}
              </CardProducts.Body>
              <CardProducts.Footer
                id={product.id}
                price={product.price}
                handleAddToCart={handleAddToCart}
              />
            </CardProducts>
          ))}
        </div>
        <div className='w-1/3'>
          <h1 className='text-3xl font-bold text-blue-600 ml-5 mb2'>Cart</h1>

          <table className='text-left table-auto border-separate border-spacing-x-5'>
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => {
                const product = products.find((product) => product.id === item.id);
                return (
                  <tr key={item.id}>
                    <td>{product.title}</td>
                    <td>
                      Rp.{" "}
                      {product.price.toLocaleString("id-ID", {
                        styles: "currency",
                        currency: "IDR",
                      })}
                    </td>
                    <td>{item.qty}</td>
                    <td>
                      Rp.{" "}
                      {(item.qty * product.price).toLocaleString("id-ID", {
                        styles: "currency",
                        currency: "IDR",
                      })}
                    </td>
                  </tr>
                );
              })}

              <tr>
                <td colSpan={3}>
                  <b>Total Price</b>
                </td>
                <td>
                  <b>
                    Rp.{" "}
                    {totalPrice.toLocaleString("id-ID", {
                      styles: "currency",
                      currency: "IDR",
                    })}
                  </b>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Fragment>
  );
}
