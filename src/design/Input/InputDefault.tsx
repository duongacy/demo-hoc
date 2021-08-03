import React, { ChangeEvent, Fragment } from "react";
import { ISize } from "../../common/formatTypes/Input";

interface IInputDefaultProps {
  label?: string;
  placeHolder?: string;
  name: string;
  size?: ISize;
  className?: string;
  callbackChange?: (name: string, value: string) => void;
}
const InputDefault: React.FC<IInputDefaultProps> = ({
  label,
  placeHolder,
  name,
  size,
  className,
  callbackChange,
}) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;
    callbackChange && callbackChange(name, value);
  };
  return (
    <Fragment>
      <label className="form-label">{label}</label>
      <input
        type="text"
        className={`form-control ${
          size && "form-control-" + size
        } rounded-0 btn-none-shadow ${className}`}
        placeholder={placeHolder}
        name={name}
        onChange={handleChange}
      />
    </Fragment>
  );
};

export default InputDefault;
