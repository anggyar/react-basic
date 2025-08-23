import React from "react";
import CardProducts from "../components/Fragments/CardProducts.jsx";

export default function ProductsPage() {
  return (
    <div className='flex justify-center py-5'>
      <CardProducts>
        <CardProducts.Header image='/images/shoes.jpg' />
        <CardProducts.Body title='Nike Air Jordan Blue - Water Hashira Edition'>
          This is a limited edition Nike Air Jordan shoes inspired by the Water Hashira
          from Demon Slayer. Perfect for collectors and fans alike.
        </CardProducts.Body>
        <CardProducts.Footer price='Rp. 1.000.000'></CardProducts.Footer>
      </CardProducts>
    </div>
  );
}
