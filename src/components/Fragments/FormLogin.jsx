import React from "react";
import InputForm from "../Elements/Input/index.jsx";
import Button from "../Elements/Button/index.jsx";

export default function FormLogin() {
  const handleLogin = (event) => {
    event.preventDefault();
    localStorage.setItem("email", event.target.email.value);
    localStorage.setItem("password", event.target.password.value);

    window.location.href = "/product";
  };
  return (
    <form onSubmit={handleLogin}>
      <InputForm
        label='Email'
        name='email'
        placeholder='example@mail.com'
        type='email'
      />
      <InputForm
        label='Password'
        name='password'
        placeholder='********'
        type='password'
      />
      <Button
        classname='bg-blue-600 w-full'
        type='submit'
      >
        Login
      </Button>
    </form>
  );
}
