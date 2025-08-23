import React from "react";
import AuthLayouts from "../components/Layouts/AuthLayouts.jsx";
import FormLogin from "../components/Fragments/FormLogin.jsx";
import { Link } from "react-router-dom";

export default function LoginPage() {
  return (
    <AuthLayouts title='Login'>
      <FormLogin />
      <p className='text-sm w-full'>
        Doesn't have account?
        <Link className='font-bold text-blue-500' to='/register'>
          Sign Up
        </Link>
      </p>
    </AuthLayouts>
  );
}
