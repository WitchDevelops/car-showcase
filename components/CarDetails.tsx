import React from "react";
import { CarProps } from "@/types";

interface CarDetailsProps {
  isOpen: boolean;
  closeModal: () => void;
  car: CarProps;
}

export const CarDetails: React.FC<CarDetailsProps> = (props) => {
  return <div>CarDetails</div>;
};
