import React, { Fragment } from "react";
import CardProducts from "../components/Fragments/CardProducts.jsx";
import Button from "../components/Elements/Button/index.jsx";

const products = [
  {
    id: 1,
    title: "Nike Air Jordan Blue - Water Hashira Edition",
    description:
      "This is a limited edition Nike Air Jordan shoes inspired by the Water Hashira from Demon Slayer. Perfect for collectors and fans alike.",
    price: "Rp. 1.000.000",
    image: "/images/shoes.jpg",
  },
  {
    id: 2,
    title: "Copy of Nike Air Jordan",
    description:
      "This is a copy of the Nike Air Jordan shoes, designed to look similar but at a more affordable price.",
    price: "Rp. 1.000.000",
    image: "/images/shoes.jpg",
  },
  {
    id: 3,
    title: "Nike Air Jordan Blue - Water Hashira Edition",
    description:
      "This is a limited edition Nike Air Jordan shoes inspired by the Water Hashira from Demon Slayer. Perfect for collectors and fans alike.",
    price: "Rp. 1.000.000",
    image: "/images/shoes.jpg",
  },
];

const email = localStorage.getItem("email");

export default function ProductsPage() {
  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/login";
  };
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
        {products.map((product) => (
          <CardProducts key={product.id}>
            <CardProducts.Header image={product.image} />
            <CardProducts.Body title={product.title}>
              {product.description}
            </CardProducts.Body>
            <CardProducts.Footer price={product.price}></CardProducts.Footer>
          </CardProducts>
        ))}
      </div>
    </Fragment>
  );
}
