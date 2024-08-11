import React from "react";
import "../resources/loadding.css";

const Loadding = React.memo(() => {
  return (
    <>
      <div className="loadding-title-container">
        <h2>Shop HUB</h2>
        <div className="container-cc">
          <div className="circle"></div>
          <div className="circle"></div>
        </div>
      </div>
    </>
  );
});

export default Loadding;
