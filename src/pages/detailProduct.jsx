import React, { Fragment, useEffect, useState } from "react";
// import { useLogin } from "../hooks/useLogin.jsx";
import { useParams } from "react-router-dom";
import CardProducts from "../components/Fragments/CardProducts.jsx";
import { getProductDetails } from "../services/product.service.js";
import Button from "../components/Elements/Button/index.jsx";

const DetailProductPage = () => {
  const [productDetail, setProductDetail] = useState({});

  //   const username = useLogin();
  const { id } = useParams();

  //   const handleLogout = () => {
  //     localStorage.removeItem("token");
  //     localStorage.removeItem("password");
  //     localStorage.removeItem("cart");
  //     window.location.href = "/login";
  //   };
  //   const handleAddToCart = () => {};

  useEffect(() => {
    getProductDetails(id, (data) => {
      setProductDetail(data);
    });
  }, [id]);
  console.log(productDetail);
  return (
    // <Fragment>
    //   <div className='flex justify-end h-10 bg-blue-600 text-white items-center px-10'>
    //     {username}
    //     <Button
    //       classname='ml-5 bg-black'
    //       onClick={handleLogout}
    //     >
    //       Logout
    //     </Button>
    //   </div>
    //   {productDetail && (
    //     <div className='flex justify-center w-full'>
    //       <CardProducts key={productDetail.id}>
    //         <CardProducts.Header image={productDetail.image} />
    //         <CardProducts.Body title={productDetail.title}>
    //           {productDetail.description}
    //         </CardProducts.Body>
    //         {/* <CardProducts.Footer id={productDetail.id}
    //       price={productDetail.price}
    //       handleAttToCart={handleAddToCart}/> */}
    //       </CardProducts>
    //     </div>
    //   )}
    // </Fragment>
    // <div>detail : {id}</div>

    <div className='flex justify-center items-center min-h-screen'>
      <div className='flex font-sans max-w-xl'>
        <div className='flex-none w-48 relative'>
          <img
            src={productDetail.image}
            alt
            className='absolute inset-0 w-full h-full object-cover'
            loading='lazy'
          />
        </div>
        <form className='flex-auto p-6'>
          <div className='flex flex-wrap'>
            <h1 className='flex-auto text-lg font-semibold text-slate-900'>
              {productDetail.title}
            </h1>
            <div className='text-lg font-semibold text-slate-500'>
              ${productDetail.price}
            </div>
            <div className='w-full flex-none text-sm font-medium text-slate-700 mt-2'>
              In stock
            </div>
          </div>
          <div className='w-full flex-none text-slate-700 mt-2'>
            {productDetail.description}
          </div>
          <div className='flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200'>
            <div className='space-x-2 flex text-sm'>
              <label>
                <input
                  className='sr-only peer'
                  name='size'
                  type='radio'
                  defaultValue='xs'
                  defaultChecked
                />
                <div className='w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white'>
                  XS
                </div>
              </label>
              <label>
                <input
                  className='sr-only peer'
                  name='size'
                  type='radio'
                  defaultValue='s'
                />
                <div className='w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white'>
                  S
                </div>
              </label>
              <label>
                <input
                  className='sr-only peer'
                  name='size'
                  type='radio'
                  defaultValue='m'
                />
                <div className='w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white'>
                  M
                </div>
              </label>
              <label>
                <input
                  className='sr-only peer'
                  name='size'
                  type='radio'
                  defaultValue='l'
                />
                <div className='w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white'>
                  L
                </div>
              </label>
              <label>
                <input
                  className='sr-only peer'
                  name='size'
                  type='radio'
                  defaultValue='xl'
                />
                <div className='w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white'>
                  XL
                </div>
              </label>
            </div>
          </div>
          <div className='flex space-x-4 mb-6 text-sm font-medium'>
            <div className='flex-auto flex space-x-4'>
              <button
                className='h-10 px-6 font-semibold rounded-md bg-black text-white'
                type='submit'
              >
                Buy now
              </button>
              <button
                className='h-10 px-6 font-semibold rounded-md border border-slate-200 text-slate-900'
                type='button'
              >
                Add to bag
              </button>
            </div>
            <button
              className='flex-none flex items-center justify-center w-9 h-9 rounded-md text-slate-300 border border-slate-200'
              type='button'
              aria-label='Like'
            >
              <svg
                width={20}
                height={20}
                fill='currentColor'
                aria-hidden='true'
              >
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z'
                />
              </svg>
            </button>
          </div>
          <p className='text-sm text-slate-700'>
            Free shipping on all continental US orders.
          </p>
        </form>
      </div>
    </div>
  );
};

export default DetailProductPage;
