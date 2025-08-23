import React from "react";
import AuthLayouts from "../components/Layouts/AuthLayouts.jsx";
import FormLogin from "../components/Fragments/FormLogin.jsx";
import FormRegister from "../components/Fragments/FormRegister.jsx";

export default function RegisterPage() {
  return (
    <AuthLayouts title='Register'>
      <FormRegister />
    </AuthLayouts>
  );
}
