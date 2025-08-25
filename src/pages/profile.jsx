import React from "react";
import { useLogin } from "../hooks/useLogin.jsx";

export default function ProfilePage() {
  const username = useLogin();
  return <h1>Username: {username}</h1>;
}
