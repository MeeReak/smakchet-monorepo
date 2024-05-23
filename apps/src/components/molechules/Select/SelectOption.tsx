import React from "react";
import {Select, SelectItem} from "@nextui-org/react";

interface SelectOptionProp{
    Options: any;
    label : string
}
const SelectOption:React.FC<SelectOptionProp> = ({Options , label}) => {
    console.log(Options);
  return (
    <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
      <Select 
        label={label} 
        variant="bordered"
        className="w-full border-1"
      >
        {Options.map((option:any) => (
          <SelectItem key={option.value} value={option.value}>
            {option}
          </SelectItem>
        ))}
      </Select>
    </div>
  );
}

export default SelectOption;