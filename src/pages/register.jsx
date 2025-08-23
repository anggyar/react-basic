import React from "react";
import AuthLayouts from "../components/Layouts/AuthLayouts.jsx";

import FormRegister from "../components/Fragments/FormRegister.jsx";
import { Link } from "react-router-dom";

export default function RegisterPage() {
  return (
    <AuthLayouts title='Register'>
      <FormRegister />
      <p className='text-sm w-full'>
        Have an account?
        <Link className='font-bold text-blue-500' to='/login'>
          Login
        </Link>
      </p>
    </AuthLayouts>
  );
}
