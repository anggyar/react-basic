import React from "react";
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const errorBoundary = useRouteError();

  return (
    <div className='flex justify-center min-h-screen items-center flex-col'>
      <h1 className='text-3xl font-bold'>Oops..</h1>
      <p className='my-5 text-xl'>Sorry, an unexpected error has occured</p>
      <p className='text-lg text-red-500'>
        {errorBoundary.statusText || errorBoundary.message}
      </p>
    </div>
  );
}
