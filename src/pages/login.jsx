import React from "react";
import AuthLayouts from "../components/Layouts/AuthLayouts.jsx";
import FormLogin from "../components/Fragments/FormLogin.jsx";
import { Link } from "react-router-dom";

export default function LoginPage() {
  return (
    <AuthLayouts title='Login' type='login'>
      <FormLogin />
    </AuthLayouts>
  );
}
