import React, { useEffect, useRef } from "react";
import InputForm from "../Elements/Input/index.jsx";
import Button from "../Elements/Button/index.jsx";

export default function FormRegister() {
  const fullNameRef = useRef();

  useEffect(() => {
    fullNameRef.current.focus();
  });
  return (
    <form action=''>
      <InputForm
        label='Full Name'
        name='fullname'
        placeholder='Insert your full name here...'
        type='text'
        ref={fullNameRef}
      />
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
      <InputForm
        label='Confirm Password'
        name='confirmPassword'
        placeholder='********'
        type='password'
      />
      <Button classname='bg-blue-600 w-full'>Register</Button>
    </form>
  );
}
