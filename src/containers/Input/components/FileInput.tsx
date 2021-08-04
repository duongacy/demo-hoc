import React, { ChangeEvent } from "react";
import { ISize, IVariant } from "../../../common/formatTypes/Input";

export type IFileInputCallbackChange = (
  name: string,
  file: File
) => void;
interface IProps {
  name: string;
  size?: ISize;
  variant?: IVariant;
  callbackChange?: IFileInputCallbackChange;
}
const FileInput: React.FC<IProps> = ({
  name,
  size = "md",
  variant = "primary",
  callbackChange,
}) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, files } = event.target;
    if (files) {
      callbackChange && callbackChange(name, files[0]);
    }
  };
  return (
    <div>
      <div className="input-group">
        <input
          name={name}
          type="file"
          className={`form-control form-control-${size} border-${variant} text-${variant} box-shadow-focus-none rounded-0 `}
          onChange={handleChange}
        />
        <button
          className={`btn btn-${size} btn-outline-${variant} box-shadow-focus-none rounded-0`}
          type="button"
        >
          Button
        </button>
      </div>
    </div>
  );
};

export default FileInput;
