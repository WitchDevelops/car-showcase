"use client";

import React from "react";
import Image from "next/image";
import { MouseEventHandler } from "react";

interface CustomButtonProps {
  state?: boolean;
  type: "submit" | "button";
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export const CustomButton = ({
  state,
  type,
  title,
  containerStyles,
  handleClick,
}: CustomButtonProps) => {
  return (
    <button
      disabled={state}
      type={type}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1`}>{title}</span>
    </button>
  );
};

