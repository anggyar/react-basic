import React from "react";

export default function AuthLayouts(props) {
  const { children, title } = props;
  return (
    <div className='flex justify-center min-h-screen items-center'>
      <div className='w-full max-w-xs'>
        <h1 className='text-blue-600 text-3xl font-bold mb-8'>{title}</h1>
        <p className='font-medium text-slate-500'>Welcome, Please enter your details</p>

        {children}
      </div>
    </div>
  );
}
