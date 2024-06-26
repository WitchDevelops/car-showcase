"use client";

import React from "react";
import { CustomButton } from "@/components";

interface ShowMoreProps {
  pageNumber: number;
  isNext: boolean;
  setLimit: React.Dispatch<React.SetStateAction<number>>;
}

export const ShowMore = ({ pageNumber, isNext, setLimit }: ShowMoreProps) => {
  const handleNavigation = () => {
    const newLimit = (pageNumber + 1) * 10;
    setLimit(newLimit);
  };
  return (
    <div className="w-full flex-center gap-5 mt-10">
      {!isNext && (
        <CustomButton
          title="Show More"
          type="button"
          containerStyles="bg-primary-blue rounded-full text-white"
          handleClick={handleNavigation}
        />
      )}
    </div>
  );
};
