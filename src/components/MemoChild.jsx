import React from "react";

function MemoChild() {
  console.log("first");
  return <div></div>;
}

export default React.memo(MemoChild);
