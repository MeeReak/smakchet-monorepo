import React, { ReactNode, FC } from "react";

interface TypographyProps {
  children: ReactNode;
  className?: string;
  align?: "left" | "justify" | "right" | "center";
  fontSize?: "h1" | "h2" | "h3" | "h4" | "h5";
  fontWeight?: "normal" | "medium" | "semibold" | "bold";
  color?: "black" | "red" | "blue" | "grey" | "white" | "green";
  screensize?: "xl" | "sm";
}

const Typography: FC<TypographyProps> = ({
  children,
  className,
  align = "",
  fontSize = "",
  fontWeight = "",
  color = "",
  screensize = "",
}) => {
  const typographyAlign = (align: string) => {
    switch (align) {
      case "left":
        return "text-left";
      case "center":
        return "text-center";
      case "right":
        return "text-right";
      case "justify":
        return "text-justify";
      default:
        return "text-left";
    }
  };

  // const typographyFontSize = (fontSize: string, screensize: string) => {
  //   switch (fontSize) {
  //     case "h1":
  //       return "text-4xl";
  //     case "h2":
  //       return "text-2xl";
  //     case "h3":
  //       return "text-xl";
  //     case "h4":
  //       return "text-[18px]";
  //     case "h5":
  //       return "text-sm";
  //     default:
  //       return "text-xs";
  //   }
  // };

  const typographyFontSize = (fontSize: string, screensize: string) => {
    switch (fontSize) {
      case "h1":
        return "text-[16px] md:text-[20px] lg:text-[24px] xl:text-[36px]";
      case "h2":
        return "text-[14px] md:text-[18px] lg:text-[20px] xl:text-[32px]";
      case "h3":
        return "text-[12px] md:text-[16px] lg:text-[18px] xl:text-[24px]";
      case "h4":
        return "text-[10px] md:text-[14px] lg:text-[16px] xl:text-[20px]";
      case "h5":
        return "text-[8px] md:text-[12px] lg:text-[14px] xl:text-[16px]";
      case "h6":
        return "text-[5px] md:text-[10px] lg:text-[12px] xl:text-[14px]";
      default:
        return "text-base";
    }
  };

  const typographyfontWeight = (fontWeight: string) => {
    switch (fontWeight) {
      case "normal":
        return "font-normal";
      case "medium":
        return "font-medium";
      case "semibold":
        return "font-semibold";
      case "bold":
        return "font-bold";
      default:
        return "font-normal";
    }
  };

  const typographyColor = (color: string) => {
    switch (color) {
      case "red":
        return "text-[#FF2020]";
      case "blue":
        return "text-[#207BFF]";
      case "grey":
        return "text-[#00000099]";
      case "white":
        return "text-[#fff]";
      case "green":
        return "text-[#27AE60]";
      default:
        return "text-[#000000]";
    }
  };

  const typographyColorStyle = typographyColor(color);
  const typographyAlignStyles = typographyAlign(align);
  const typographyFontSizeStyles = typographyFontSize(fontSize, screensize);
  const typographyfontWeightStyles = typographyfontWeight(fontWeight);

  return (
    <div>
      <p
        className={`${typographyfontWeightStyles}
      ${typographyFontSizeStyles}
      ${typographyAlignStyles}
      ${typographyColorStyle}
      ${className}`}
      >
        {children}
      </p>
    </div>
  );
};

export { Typography };
