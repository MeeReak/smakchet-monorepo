import React, { FC, ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  colorScheme?:
    | "primary"
    | "secondary"
    | "Success"
    | "Error"
    | "Warning"
    | "White"
    | "";
  bgColor?: "primary" | "secondary" | "Success" | "Error" | "Warning" | "";
  size?: "h1" | "h2" | "h3" | "h4" | "h5";
  round?: "rounded" | "md" | "lg" | "xl" | "full";
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  topIcon?: ReactNode;
  bottomIcon?: ReactNode;
  onclick?: (e: any) => void;
  onClickParam?: (param: any) => void;
  type?: any | string ;
  disabled?: boolean;
}

const Button: FC<ButtonProps> = ({
  children,
  className = "",
  colorScheme = "",
  size = "h4",
  bgColor = "",
  round = "md",
  leftIcon,
  rightIcon,
  topIcon,
  bottomIcon,
  onclick,
  onClickParam,
  type,
  disabled = false,
}) => {
  const getColorSchemeClass = (scheme: string) => {
    switch (scheme) {
      case "primary":
        return "text-[#207BFF]";
      case "secondary":
        return "text-[#FF2020]";
      case "Success":
        return "text-[#27AE60]";
      case "Error":
        return "text-[#EB5757]";
      case "Warning":
        return "text-[#E2B93B]";
      case "White":
        return "text-white";
      default:
        return "text-[#1F1F1F]";
    }
  };

  const getBackgroundColorClass = (scheme: string) => {
    switch (scheme) {
      case "primary":
        return "bg-[#207BFF]";
      case "secondary":
        return "bg-[#FF2020]";
      case "Success":
        return "bg-[#24A148]";
      case "Error":
        return "bg-[#da1e28]";
      case "Warning":
        return "bg-[#f1c21b]";
    }
  };

  const getRoundClass = (scheme: string) => {
    switch (scheme) {
      case "rounded":
        return "rounded";
      case "md":
        return "rounded-md";
      case "lg":
        return "rounded-lg";
      case "xl":
        return "rounded-xl";
      case "full":
        return "rounded-full";
    }
  };

  const getSizeClass = (size: string) => {
    switch (size) {
      case "h1":
        return "text-4xl";
      case "h2":
        return "text-2xl";
      case "h3":
        return "text-xl";
      case "h4":
        return "text-base";
      case "h5":
        return "text-sm";
      default:
        return "text-base";
    }
  };

  // const getSizeClass = (size: string) => {
  //   switch (size) {
  //     case "h1":
  //       return "text-[16px] md:text-[20px] lg:text-[24px] xl:text-[36px]";
  //     case "h2":
  //       return "text-text-[14px] md:text-[18px] lg:text-[20px] xl:text-[32px]";
  //     case "h3":
  //       return "text-[12px] md:text-[16px] lg:text-[18px] xl:text-[24px]-";
  //     case "h4":
  //       return "text-[10px] md:text-[14px] lg:text-[16px] xl:text-[20px]";
  //     case "h5":
  //       return "text-[10px] md:text-[14px] lg:text-[16px] xl:text-[20px]";
  //     case "h6":
  //       return "text-[5px] md:text-[10px] lg:text-[12px] xl:text-[14px]";
  //     default:
  //       return "text-base";
  //   }
  // };

  const sizeClass = getSizeClass(size);
  const colorSchemeClass = getColorSchemeClass(colorScheme);
  const bgColorClass = getBackgroundColorClass(bgColor);
  const roundClass = getRoundClass(round);

  const combinedClassName = `flex items-center justify-start border-[1px] ${colorSchemeClass} ${sizeClass} ${bgColorClass} ${roundClass} ${disabled ? "cursor-not-allowed bg-gray-300 hover:bg-gray-300 text-white hover:text-white" : ""} ${className}`;

  return (
    <div className={`${combinedClassName} flex flex-col`}>
      {topIcon && <div>{topIcon}</div>}
      <button
        onClick={disabled ? undefined : (onclick || onClickParam)}
        type={type}
        disabled={disabled}
        className="flex items-center"
      >
        {leftIcon && <span className="mr-2">{leftIcon}</span>}
        {children}
        {rightIcon && <span className="ml-2">{rightIcon}</span>}
      </button>
      {bottomIcon && <span>{bottomIcon}</span>}
    </div>
  );
};

export { Button };
export type { ButtonProps };
