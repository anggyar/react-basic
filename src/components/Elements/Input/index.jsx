import React from "react";
import Input from "./Input.jsx";
import Label from "./Label.jsx";

export default function InputForm(props) {
  const { label, name, placeholder, type } = props;
  return (
    <div className="mb-6">
      <Label htmlFor={name}>{label}</Label>
      <Input type={type} placeholder={placeholder} name={name} />
    </div>
  );
}
