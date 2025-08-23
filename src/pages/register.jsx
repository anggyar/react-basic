import React from "react";
import AuthLayouts from "../components/Layouts/AuthLayouts.jsx";

import FormRegister from "../components/Fragments/FormRegister.jsx";
import { Link } from "react-router-dom";

export default function RegisterPage() {
  return (
    <AuthLayouts title='Register' type='register'>
      <FormRegister />
    </AuthLayouts>
  );
}
