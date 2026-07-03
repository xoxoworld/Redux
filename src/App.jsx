import { useState } from "react";
import "./App.css";
import AddNumberRoot from "./components/AddNumberRoot";
import DisplayNumberRoot from "./components/DisplayNumberRoot";

function App() {
  const [number, setNumber] = useState(0);
  return (
    <>
      <h1>Root : React Redux</h1>
      <AddNumberRoot
        onClick={_num => {
          setNumber(_num);
        }}
      />
      <DisplayNumberRoot number={number} />
    </>
  );
}

export default App;
