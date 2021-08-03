import { ISize } from "../../common/formatTypes/Input";
import React, { ChangeEvent } from "react";

interface IInputAddOnButtonProps {
  label?: string;
  placeholder?: string;
  size?: ISize;
  name: string;
  className?: string;
  callbackChange?: (name: string, value: string) => void;
}
const InputAddOnButton: React.FC<IInputAddOnButtonProps> = ({
  label,
  placeholder,
  size,
  name,
  className,
  callbackChange,
}) => {
  const handleChange = (event:ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;
    callbackChange && callbackChange(name, value);
  };
  return (
    <React.Fragment>
      <div
        className={`input-group ${size && "input-group-" + size} ${className}`}
      >
        <span className="input-group-text rounded-0 ">{label}</span>
        <input
          type="text"
          className="form-control rounded-0 btn-none-shadow"
          placeholder={placeholder}
          name={name}
          onChange={handleChange}
        />
      </div>
    </React.Fragment>
  );
};

export default InputAddOnButton;
