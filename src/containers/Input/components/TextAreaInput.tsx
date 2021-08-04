import React, { ChangeEvent } from "react";
import { ISize } from "../../../common/formatTypes/Input";

export type ITextareaInputCallbackChange = (
  name: string,
  value: string
) => void;

type IProps = {
  className?: string;
  type?: string;
  callbackChange?: ITextareaInputCallbackChange;
  rows?: number;
  name: string;
  size?: ISize;
};
const TextAreaInput: React.FC<IProps> = ({
  className="",
  callbackChange,
  size="md",
  ...restProps
}) => {
  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    callbackChange && callbackChange(name, value);
  };
  return (
    <div>
      <textarea
        className={`form-control form-control-${size} box-shadow-focus-none rounded-0 ${className}`}
        {...restProps}
        onChange={handleChange}
      />
    </div>
  );
};

export default TextAreaInput;
