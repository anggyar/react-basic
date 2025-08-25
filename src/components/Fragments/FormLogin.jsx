import React, { useEffect, useRef, useState } from "react";
import InputForm from "../Elements/Input/index.jsx";
import Button from "../Elements/Button/index.jsx";
import { login } from "../../services/auth.service.js";

export default function FormLogin() {
  const [loginFailed, setLoginFailed] = useState("");
  const usernameRef = useRef();

  useEffect(() => {
    usernameRef.current.focus();
  });
  const handleLogin = (event) => {
    event.preventDefault();
    // localStorage.setItem("email", event.target.email.value);
    // localStorage.setItem("password", event.target.password.value);

    // window.location.href = "/product";
    const data = {
      username: event.target.username.value,
      password: event.target.password.value,
    };
    login(data, (status, res) => {
      if (status) {
        localStorage.setItem("token", res);
        window.location.href = "/products";
      } else {
        console.log(res.response.data);
        setLoginFailed(res.response.data);
      }
    });
  };
  return (
    <form onSubmit={handleLogin}>
      <InputForm
        label='Username'
        name='username'
        placeholder='john.doe'
        type='text'
        ref={usernameRef}
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
      {loginFailed && (
        <p className='text-sm italic font-semibold text-red-600  text-center my-2'>
          {loginFailed}
        </p>
      )}
    </form>
  );
}
