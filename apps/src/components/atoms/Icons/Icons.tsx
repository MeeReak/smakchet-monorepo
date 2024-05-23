import React from "react";
import IconItems from "./IconItem";

interface IconProps {
  label: string;
  size?: "sm" | "md" | "lg";
  background?: "primary" | "secondary" | string;
}

export default function Icon({ label, size = "sm" , background = "primary"}: IconProps) {
  const IconSize = (size: string) => {
    switch (size) {
      case "lg":
        return "w-[32px] h-[32px]";
      case "md":
        return "w-[24px] h-[24px]";
      default:
        return "w-[16px] h-[16px]";
    }
  };
  const IconBackgroup = (background:string) =>{
    switch(background){
      case "primary":
        return "#207BFF"
      case "secondary" :
        return "#fff"
      default:
       return `${background}`
    }
  }
  const IconSizeStyle = IconSize(size);
  const IconBackgroundStype  = IconBackgroup(background);
  const classname = `${IconSizeStyle}`; 
  const findIcon = (label: string) => {
    const result = IconItems.filter((eachIcon) => eachIcon.label === label);

    return result[0].icon({
      className : `${classname}`,
      border: "#369",
      background: `${IconBackgroundStype}`,
    });
  };
  return (
    <div>
      {findIcon(label)} 
    </div>
  );
}
