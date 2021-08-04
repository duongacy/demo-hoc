import React, { ChangeEvent } from "react";
import { ISize, IVariant } from "../../common/formatTypes/Input";

export type IOption = {
  value: string;
  text: string;
};
export type ISelectCallbackChange = (name: string, value: string) => void;
interface IProps {
  name: string;
  className?: string;
  options: IOption[];
  size?: ISize;
  text?: string;
  variant?: IVariant;
  callbackChange?: ISelectCallbackChange;
}
const Select: React.FC<IProps> = ({
  name,
  className,
  options,
  size,
  callbackChange,
  variant = "secondary",
}) => {
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    callbackChange && callbackChange(name, value);
  };
  return (
    <div>
      <select
        className={`form-select border-${variant} text-${variant} form-select-${size} box-shadow-focus-none rounded-0 ${className}`}
        onChange={handleChange}
        name={name}
      >
        {options.map((item, key) => (
          <option value={item.value} key={key}>
            {item.text}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
