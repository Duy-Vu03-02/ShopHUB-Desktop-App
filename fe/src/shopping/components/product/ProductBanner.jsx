import React, { useEffect, useState } from "react";
import camera from "../../../assets/home/camera.png";
import Header from "../../pages/Header";

const ProdcutBanner = React.memo(() => {
  const [dataSearch, setDataSearch] = useState("");
  function handleChangSearch(e) {
    setDataSearch(e.target.value);
  }

  return (
    <>
      <div className="home_anchor">
        <div className="home_logo_search">
          <img src="" alt="" />
          <span>
            <h3>Shop Hub</h3>
          </span>
        </div>
        <div className="home_search_bar">
          <div className="home_search_namepace">
            <input
              type="text"
              value={dataSearch}
              onChange={handleChangSearch}
            />
            <div className="home_img_search">
              <img src={camera} alt="camera" />
            </div>
            <div className="home_search_button">
              <button>Search</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});

export default ProdcutBanner;
