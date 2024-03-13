import { useState } from "react";

const ShuffleArray = () => {
  const [array, setArray] = useState(["heart", "diamond", "club", "spade"]);

  function handleClick() {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    setArray([...array]);
  }

  return (
    <div className="main-container">
      <h1>Shuffle Array</h1>
      <ul>
        {array.map((arr, index) => (
          <li key={index}>{arr}</li>
        ))}
      </ul>
      <button className="button" onClick={handleClick}>
        Click
      </button>
    </div>
  );
};
export default ShuffleArray;
