import React from "react";
import InputForm from "../Elements/Input/index.jsx";
import Button from "../Elements/Button/index.jsx";

export default function FormLogin() {
  return (
    <form action=''>
      <InputForm label='Email' name='email' placeholder='example@mail.com' type='email' />
      <InputForm
        label='Password'
        name='password'
        placeholder='********'
        type='password'
      />
      <Button classname='bg-blue-600 w-full'>Login</Button>
    </form>
  );
}
