import React, { ReactNode } from "react";

interface ButtonIconProps {
  onclick?:() => void;
  icon: ReactNode;
  className?: string;
}

const ButtonIcon: React.FC<ButtonIconProps> = ({ icon, className , onclick }) => {
  return (
    <button
    onClick={onclick}
    className={`h-[50px] w-[50px] rounded-full flex items-center justify-center cursor-pointer ${className}`}
    >
      {icon}
    </button>
  );
};

export { ButtonIcon };
