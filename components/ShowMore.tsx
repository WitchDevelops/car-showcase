"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { CustomButton } from "@/components";
import { updateSearchParams } from "@/utils";

interface ShowMoreProps {
  pageNumber: number;
  isNext: boolean;
}

export const ShowMore = ({ pageNumber, isNext }: ShowMoreProps) => {
  const router = useRouter();
  const handleNavigation = () => {
    const newLimit = (pageNumber + 1) * 10;
    const newPathName = updateSearchParams("limit", String(newLimit));
    console.log(newPathName);
    router.push(newPathName);
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
