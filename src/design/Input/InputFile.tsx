import React, { ChangeEvent, Fragment } from "react";
import { IInputValue, ISize } from "../../common/formatTypes/Input";

interface IInputFileProps {
    label?: string;
    name: string;
    size?: string;
    className?: string;
    callbackChange?: (name: string, value: File) => void;
  }
  const InputFile: React.FC<IInputFileProps> = ({
    name,
    size,
    className,
    callbackChange,
  }) => {
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      const { name, files } = event.currentTarget;
      if (files) {
        callbackChange && callbackChange(name, files[0]);
      }
    };
    return (
      <Fragment>
        <input
          className={`form-control ${
            size && "form-control-" + size
          } ${className} rounded-0 btn-none-shadow`}
          type="file"
          onChange={handleChange}
          name={name}
        />
      </Fragment>
    );
  };

  export default InputFile;