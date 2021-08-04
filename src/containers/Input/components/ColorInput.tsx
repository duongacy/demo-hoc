import React, { ChangeEvent } from "react";
import { ISize } from "../../../common/formatTypes/Input";

export type IColorInputCallbackChange = (name: string, value: string) => void;
interface IProps {
  name?: string;
  className?: string;
  size?: ISize;
  callbackChange?: IColorInputCallbackChange;
}
const ColorInput: React.FC<IProps> = ({
  name,
  className = "",
  size = "md",
  callbackChange,
}) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    callbackChange && callbackChange(name, value);
  };
  return (
    <div>
      <input
        type="color"
        className={`form-control form-control-color form-control-${size} rounded-0 box-shadow-focus-none ${className}`}
        defaultValue="#563d7c"
        name={name}
        onChange={handleChange}
      />
    </div>
  );
};

export default ColorInput;
