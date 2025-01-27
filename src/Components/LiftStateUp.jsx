import { useState } from "react";

export const LiftStates = () => {
  const [inputValue, setInputValue] = useState("");
  return (
    <>
      <InputComponent inputValue={inputValue} setInputValue={setInputValue} />
      <DisplayComponent inputValue={inputValue} />
    </>
  );
};

const InputComponent = ({inputValue, setInputValue}) => {
  return (
    <>
      <input
        type="text"
        placeholder="Enter your text: "
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </>
  );
};
const DisplayComponent =({inputValue})=>{
    return <p>The text is: {inputValue}</p>
}