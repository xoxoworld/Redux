import { useState } from "react";

export default function AddNumber({ onClick }) {
  const [num, setNum] = useState(0);
  return (
    <div>
      <h2>AddNumber</h2>
      <button
        onClick={() => {
          const newNum = num + 1;
          setNum(newNum);
          onClick(newNum);
        }}
      >
        +
      </button>
      <input type="text" value={num} readOnly />
    </div>
  );
}
