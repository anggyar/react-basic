import React from "react";
import { Link } from "react-router-dom";

export default function AuthLayouts(props) {
  const { children, title, type } = props;
  return (
    <div className='flex justify-center min-h-screen items-center'>
      <div className='w-full max-w-xs'>
        <h1 className='text-blue-600 text-3xl font-bold mb-8'>{title}</h1>
        <p className='font-medium text-slate-500'>Welcome, Please enter your details</p>

        {children}
        <p className='text-sm w-full'>
          {type === "login" && (
            <>
              Don't have an account?{" "}
              <Link className='font-bold text-blue-500' to='/register'>
                Register
              </Link>
            </>
          )}

          {type === "register" && (
            <>
              Don't have an account?{" "}
              <Link className='font-bold text-blue-500' to='/login'>
                Login
              </Link>
            </>
          )}
        </p>
      </div>
    </div>
  );
}
