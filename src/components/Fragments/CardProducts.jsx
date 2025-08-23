import React from "react";
import Button from "../Elements/Button/index.jsx";

export default function CardProducts(props) {
  const { children } = props;

  return (
    <div className='w-full max-w-sm bg-gray-800 border border-gray-700 rounded-lg shadow'>
      {children}
    </div>
  );
}

const Header = (props) => {
  const { image } = props;
  return (
    <a href='#'>
      <img src={image} alt='' className='p-8 rounded-t-lg' />
    </a>
  );
};
const Body = (props) => {
  const { title, children } = props;
  return (
    <div className='px-5 pb-5'>
      <a href=''>
        <h5 className='text-xl font-semibold tracking-tight text-white'>{title}</h5>
        <p className='text-sm text-white'>{children}</p>
      </a>
    </div>
  );
};

const Footer = (props) => {
  const { price } = props;
  return (
    <div className='flex items-center justify-between px-5 pb-5'>
      <span className='text-xl font-bold text-white'>{price}</span>
      <Button classname='bg-blue-600'>Add to Cart</Button>
    </div>
  );
};

CardProducts.Header = Header;
CardProducts.Body = Body;
CardProducts.Footer = Footer;
