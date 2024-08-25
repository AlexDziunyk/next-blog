"use client";
import React from "react";

const page = () => {
  const handleConfirm = async () => {
    const result = await fetch("/api/auth/confirm");
    
    console.log(result);
  };

  return (
    <div>
      <button onClickCapture={handleConfirm}>Confirm</button>
    </div>
  );
};

export default page;
