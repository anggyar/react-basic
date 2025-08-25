import React from "react";

export default function Input(props) {
  const { type, placeholder, name, ref } = props;
  return (
    <>
      <input
        type={type}
        className='text-sm border rounded w-full py-2 px-3 text-slate-700'
        placeholder={placeholder}
        name={name}
        id={name}
        ref={ref}
      />
    </>
  );
}
