import React from "react";
import AuthLayouts from "../components/Layouts/AuthLayouts.jsx";
import FormLogin from "../components/Fragments/FormLogin.jsx";

export default function LoginPage() {
  return (
    <AuthLayouts title='Login'>
      <FormLogin />
    </AuthLayouts>
  );
}
