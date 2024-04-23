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

export const CustomButton: React.FC<CustomButtonProps> = (props) => {
  return (
    <button
      disabled={props.state}
      type={props.type}
      className={`custom-btn ${props.containerStyles} ${props.textStyles}`}
      onClick={props.handleClick}
    >
      <span className={`flex-1`}>{props.title}</span>
      {props.rightIcon && (
        <div className="relative w-6 h-6">
          <Image
            src={props.rightIcon}
            alt={props.rightIcon}
            fill
            className="object-contain"
          />
        </div>
      )}
    </button>
  );
};
