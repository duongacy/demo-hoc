import React, { ChangeEvent } from "react";
import { ISize } from "../../../common/formatTypes/Input";

type IInputType = "email" | "number" | "password" | "text" | "url";
type IInputWithLabel = (name: string, value: string) => void;
interface IProps {
  label?: string;
  name: string;
  className?: string;
  size?: ISize;
  placeholder?: string;
  callbackChange?: IInputWithLabel;
  type?: IInputType;
}
const InputWithLabel: React.FC<IProps> = ({
  label,
  className = "",
  size = "md",
  placeholder,
  callbackChange,
  ...restProps
}) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    callbackChange && callbackChange(name, value);
  };
  return (
    <div className="d-flex gap-3">
      {label && <label className={`col-lg-auto col-form-label lh-${size} text-${size}`}>{label}</label>} 
      <div className="col-lg-auto" style={{ flex: "auto" }}>
        <input
          className={`form-control form-control-${size} box-shadow-focus-none rounded-0 ${className}`}
          defaultValue={placeholder}
          onChange={handleChange}
          {...restProps}
        />
      </div>
    </div>
  );
};

export default InputWithLabel;
