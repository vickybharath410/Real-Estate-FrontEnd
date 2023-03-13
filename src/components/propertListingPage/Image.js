import React from "react";

function Image({ path }) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <img src={path} style={{ width: "100%", height: "100%" }} />
    </div>
  );
}

export default Image;
