import React, { Fragment } from "react";
import BlockWrapper from "../../components/BlockWrapper";
import Select, {
  IOption,
  ISelectCallbackChange,
} from "../../containers/Select";

const SelectPage = () => {
  const handleChangeSelect: ISelectCallbackChange = (name, value) => {
    console.log(name, value);
  };
  return (
    <Fragment>
      <BlockWrapper title="Default select">
        <Select
          name="select"
          options={selectOptions}
          text="Select option"
          callbackChange={handleChangeSelect}
          variant="dark"
        />
      </BlockWrapper>
    </Fragment>
  );
};

export default SelectPage;

const selectOptions: IOption[] = [
  {
    value: "car",
    text: "Car",
  },
  {
    value: "motobike",
    text: "Motobike",
  },
  {
    value: "bike",
    text: "Bike",
  },
];
