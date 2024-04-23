"use client";

import React from "react";
import Image from "next/image";
import { MouseEventHandler } from "react";

interface CustomButtonProps {
  state?: boolean;
  type: "submit" | "button";
  title: string;
  containerStyles?: string;
  textStyles?: string;
  rightIcon?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export const CustomButton = ({
  state,
  type,
  title,
  containerStyles,
  textStyles,
  rightIcon,
  handleClick,
}: CustomButtonProps) => {
  return (
    <button
      disabled={state}
      type={type}
      className={`custom-btn ${containerStyles} ${textStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1`}>{title}</span>
      {rightIcon && (
        <div className="relative w-6 h-6">
          <Image src={rightIcon} alt={rightIcon} fill className="object-contain"/>
        </div>
      )}
    </button>
  );
};

