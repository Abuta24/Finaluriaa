import React, { useRef } from "react";

export default function Useref() {
  const Divref = useRef(null);

  const handleClick = () => {
    Divref.current.style.width = "100px";
    Divref.current.style.height = "100px";
  };
  return (
    <div>
      <div ref={Divref} style={{ border: "2px solid white" }}></div>
      <button onClick={handleClick}>change</button>
    </div>
  );
}
