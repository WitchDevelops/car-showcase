import React from 'react';

interface CustomFilterProps {
    title: string
}

export const CustomFilter: React.FC<CustomFilterProps> = ({ title }) => {
  return (
    <div>{title}</div>
  )
}

