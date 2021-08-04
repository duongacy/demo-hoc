import React, { ChangeEvent } from "react";
import { ISize } from "../../../common/formatTypes/Input";

export type IInputDefaultCallBackChange = (
  name: string,
  value: string | number
) => void;

type IInputType = "email" | "number" | "password" | "text" | "url";

type IProps = {
  className?: string;
  size?: ISize;
  callbackChange?: IInputDefaultCallBackChange;
  name: string;
  type?: IInputType;
  placeholder?: string;
};

const DefaultInput: React.FC<IProps> = ({
  className = "",
  size = "md",
  callbackChange,
  ...restProps
}) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    callbackChange && callbackChange(name, value);
  };
  return (
    <div>
      <input
        className={`form-control form-control-${size} ${className} box-shadow-focus-none rounded-0`}
        onChange={handleChange}
        {...restProps}
      />
    </div>
  );
};

export default DefaultInput;
