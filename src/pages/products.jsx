import React, { Fragment, useEffect, useState } from "react";
import CardProducts from "../components/Fragments/CardProducts.jsx";
import Button from "../components/Elements/Button/index.jsx";
import { getProductDatas } from "../services/product.service.js";
import { useLogin } from "../hooks/useLogin.jsx";
import TableCart from "../components/Fragments/TableCart.jsx";
import NavbarLayout from "../components/Layouts/NavbarLayout.jsx";

// const products = [
//   {
//     id: 1,
//     title: "Nike Air Jordan Blue - Water Hashira Edition",
//     description:
//       "This is a limited edition Nike Air Jordan shoes inspired by the Water Hashira from Demon Slayer. Perfect for collectors and fans alike.",
//     price: 2000000,
//     image: "/images/shoes.jpg",
//   },
//   {
//     id: 2,
//     title: "Copy of Nike Air Jordan",
//     description:
//       "This is a copy of the Nike Air Jordan shoes, designed to look similar but at a more affordable price.",
//     price: 1500000,
//     image: "/images/shoes.jpg",
//   },
//   {
//     id: 3,
//     title: "Nike Air Jordan Blue - Water Hashira Edition",
//     description:
//       "This is a limited edition Nike Air Jordan shoes inspired by the Water Hashira from Demon Slayer. Perfect for collectors and fans alike.",
//     price: 1000000,
//     image: "/images/shoes.jpg",
//   },
// ];
export default function ProductsPage() {
  // const [cart, setCart] = useState([]);

  const [products, setProducts] = useState([]);

  useLogin();
  // useEffect(() => {
  //   setCart(JSON.parse(localStorage.getItem("cart")) || []);
  // }, []);

  useEffect(() => {
    getProductDatas((data) => {
      setProducts(data);
    });
  }, []);

  // const handleAddToCart = (id) => {
  //   if (cart.find((item) => item.id === id)) {
  //     setCart(
  //       cart.map((item) => (item.id === id ? { ...item, qty: item.qty + 1 } : item))
  //     );
  //   } else {
  //     setCart([...cart, { id, qty: 1 }]);
  //   }
  // };

  // useRef basic -> https://react.dev/learn/manipulating-the-dom-with-refs
  // const cartRef = useRef(JSON.parse(localStorage.getItem("cart")) || []);
  // const handleAddToCardRef = (id) => {
  //   cartRef.current = [...cartRef.current, { id, qty: 1 }];
  //   localStorage.setItem("cart", JSON.stringify(cartRef.current));
  // };
  return (
    <Fragment>
      <NavbarLayout />
      <div className='flex justify-center py-5'>
        <div className='w-2/3 flex flex-wrap'>
          {products.length > 0 &&
            products.map((product) => (
              <CardProducts key={product.id}>
                <CardProducts.Header
                  image={product.image}
                  id={product.id}
                />
                <CardProducts.Body title={product.title}>
                  {product.description}
                </CardProducts.Body>
                <CardProducts.Footer
                  id={product.id}
                  price={product.price}
                />
              </CardProducts>
            ))}
        </div>
        <div className='w-1/3'>
          <h1 className='text-3xl font-bold text-blue-600 ml-5 mb2'>Cart</h1>
          <TableCart products={products} />
        </div>
      </div>
    </Fragment>
  );
}
