import { Fragment } from "react";
import BlockWrapper from "../../components/BlockWrapper";
import ColorInput, {
  IColorInputCallbackChange,
} from "../../containers/Input/components/ColorInput";
import DatalistsInput from "../../containers/Input/components/DatalistInput";
import DefaultInput, {
  IInputDefaultCallBackChange,
} from "../../containers/Input/components/DefaultInput";
import FileInput, {
  IFileInputCallbackChange,
} from "../../containers/Input/components/FileInput";
import InputWithLabel from "../../containers/Input/components/InputWithLabel";
import TextAreaInput, {
  ITextareaInputCallbackChange,
} from "../../containers/Input/components/TextAreaInput";

const InputPage = () => {
  const handleChangeInput1: IInputDefaultCallBackChange = (name, value) => {
    console.log(`${name}: ${value}`);
  };

  const handleChangeInput2: ITextareaInputCallbackChange = (name, value) => {
    console.log(`${name}: ${value}`);
  };

  const handleChangeInput3: ITextareaInputCallbackChange = (name, value) => {
    console.log(`${name}: ${value}`);
  };

  const handleChangeInput4: IFileInputCallbackChange = (name, file) => {
    console.log(name + ": ", file);
  };

  const handleChangeInput5: IColorInputCallbackChange = (name, file) => {
    console.log(name + ": ", file);
  };
  return (
    <Fragment>
      <BlockWrapper title="Default Input">
        <DefaultInput
          name="input1"
          callbackChange={handleChangeInput1}
          type="password"
          placeholder="Input number"
        />
      </BlockWrapper>
      <BlockWrapper title="Textarea Input">
        <TextAreaInput
          name="input2"
          size="lg"
          callbackChange={handleChangeInput2}
        />
      </BlockWrapper>
      <BlockWrapper title="Inline Input">
        <InputWithLabel
          name="input3"
          size="md"
          placeholder="Input 3"
          label="Input 3"
          callbackChange={handleChangeInput3}
        />
      </BlockWrapper>

      <BlockWrapper title="File Input">
        <FileInput
          name="input4"
          variant="warning"
          callbackChange={handleChangeInput4}
        />
      </BlockWrapper>

      <BlockWrapper title="Color Input">
        <ColorInput name="input5" size="sm" callbackChange={handleChangeInput5} />
      </BlockWrapper>

      <BlockWrapper title="Datalists Input">
        <DatalistsInput />
      </BlockWrapper>
    </Fragment>
  );
};

export default InputPage;
