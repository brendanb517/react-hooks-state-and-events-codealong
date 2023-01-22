import React, {useState} from "react";

function Toggle() {
  const [toggle, setToggle] = useState(false);
  const color = toggle ? "red": "white";
  function handleClick(){
    setToggle(!toggle)
  }
  return <button style={{background: color}} onClick={handleClick}>{toggle ? "ON": "OFF"}</button>;
}

export default Toggle;
