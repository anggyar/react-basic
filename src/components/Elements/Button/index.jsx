import React from "react";

export default function Button(props) {
  const { children, classname = "btn-bg-black" } = props;
  return (
    <button className={`h-10 px-6 font-semibold rounded-md ${classname} text-white`} type="submit">
      {children}
    </button>
  );
}
