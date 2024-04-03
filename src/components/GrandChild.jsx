import React, { useContext } from "react";
import { Context } from "./Parent";

export default function GrandChild() {
  const ramecon = useContext(Context);
  return (
    <div style={{border: "2px solid white"}}>
      <input
        type="text"
        onChange={(e) => {
          ramecon.setTitle(e.target.value);
        }}
      />
      <button onClick={() => ramecon.setTitle("ramemmeme")}>Change</button>
    </div>
  );
}
