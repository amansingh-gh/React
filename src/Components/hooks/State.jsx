import { useState } from "react";

export const States = () => {
  const [count, setCount] = useState(0);

  const handleButton = () => {
    setCount(() => count + 1);
    console.log(count);
  };
  return (
    <>
      <h1>{count}</h1>
      <button
        onClick={handleButton}
        className="bg-blue-800 text-white py-2 px-3 rounded-xl my-3"
      >
        Increment
      </button>
    </>
  );
};
