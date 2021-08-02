import Input from "../../../design/Input";
const InputPage = () => {
  const handChangeFullName = (name: string, value: string) => {
    console.log("name: ", name);
    console.log("value: ", value);
  };
  return (
    <div className="row">
      <div className="col-lg-6">
        <Input
          label="Example input"
          placeHolder="Enter input"
          name="fullName"
          size="lg"
          callbackChange={handChangeFullName}
        />
      </div>
      <div className="col-lg-6"></div>
    </div>
  );
};

export default InputPage;
