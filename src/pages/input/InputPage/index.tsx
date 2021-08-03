import {
  InputDefault,
  InputFile,
  InputAddOnButton,
} from "../../../design/Input";

import {
  IInputCallBackChange,
  IInputValue,
} from "../../../common/formatTypes/Input";
import { Fragment } from "react";
import { useState } from "react";

const InputPage = () => {
  const [inputName1, setInputName1] = useState<string>("");
  const [inputValue1, setInputValue1] = useState<IInputValue>("");

  const [inputName2, setInputName2] = useState<string>("");
  const [inputValue2, setInputValue2] = useState<IInputValue>("");

  const [inputName3, setInputName3] = useState<string>("");
  const [inputValue3, setInputValue3] = useState<IInputValue>("");

  const handChangeInput1: IInputCallBackChange = (name, value) => {
    setInputName1(name);
    setInputValue1(value);
  };

  const handChangeInput2: IInputCallBackChange = (name, value) => {
    setInputName2(name);
    setInputValue2(value);
  };

  const handChangeInput3 = (name: string, file: File) => {
    setInputName3(name);
    setInputValue3(file.name);
  };
  return (
    <Fragment>
      <SegmentWrapper title="Input default">
        <DemoWrapper>
          <InputDefault
            label="Example input"
            placeHolder="Enter input"
            name="input1"
            size="sm"
            callbackChange={handChangeInput1}
          />
        </DemoWrapper>
        <ResultWrapper>
          <code>name: {inputName1}</code> <br />
          <code>value: {inputValue1}</code>
        </ResultWrapper>
      </SegmentWrapper>
      <SegmentWrapper title="Input add-on">
        <DemoWrapper>
          <InputAddOnButton
            name="input2"
            size="md"
            label="Input demo"
            placeholder="Enter input"
            callbackChange={handChangeInput2}
          />
        </DemoWrapper>
        <ResultWrapper>
          <code>name: {inputName2}</code> <br />
          <code>value: {inputValue2}</code>
        </ResultWrapper>
      </SegmentWrapper>
      <SegmentWrapper title="File input">
        <DemoWrapper>
          <InputFile
            name="input3"
            callbackChange={handChangeInput3}
          ></InputFile>
        </DemoWrapper>
        <ResultWrapper>
          <code>name: {inputName3}</code> <br />
          <code>value: {inputValue3}</code>
        </ResultWrapper>
      </SegmentWrapper>
    </Fragment>
  );
};

export default InputPage;

interface ISegmentWrapperProps {
  title?: string;
}
const SegmentWrapper: React.FC<ISegmentWrapperProps> = ({
  title,
  children,
}) => {
  return (
    <div className="row p-2 m-2 border">
      <h4>{title}</h4>
      {children}
    </div>
  );
};


const ResultWrapper: React.FC = ({children}) => {
  return (
    <div className="col-lg-6 d-flex flex-column">
      {children}
    </div>
  );
};
const DemoWrapper: React.FC = ({children}) => {
  return (
    <div className="col-lg-6">
      {children}
    </div>
  );
};
