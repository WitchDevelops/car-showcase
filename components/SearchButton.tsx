import React from "react";
import Image from "next/image";

interface SearchButtonProps {
  otherClasses: string;
}

export const SearchButton: React.FC<SearchButtonProps> = (props) => {
  return (
    <button type="submit" className={`-ml-3 z-10 ${props.otherClasses}`}>
      <Image
        src="/magnifying-glass.svg"
        alt="magnyfying glass"
        width={40}
        height={40}
        className="object-contain"
      />
    </button>
  );
};
