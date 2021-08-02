import React, { ChangeEvent, Fragment } from "react";

interface IInputProps {
  label?: string;
  placeHolder?: string;
  name: string;
  size?: string;
  callbackChange?: (name: string, value: string) => void;
}
const Input: React.FC<IInputProps> = ({
  label,
  placeHolder,
  name,
  size,
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
        className={`form-control ${size && "form-control-" + size} rounded-0`}
        placeholder={placeHolder}
        name={name}
        onChange={handleChange}
      />
    </Fragment>
  );
};

export default Input;
