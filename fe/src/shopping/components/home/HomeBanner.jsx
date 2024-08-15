import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import banner1 from "../../../assets/home/banner1.png";
import banner2 from "../../../assets/home/banner3.png";
import button_next from "../../../assets/home/button_next.png";
import button_back from "../../../assets/home/button_back.png";
import camera from "../../../assets/home/camera.png";

const HomeBanner = React.memo(() => {
  const [banner, setBanner] = useState(banner1);
  const [autoSwitch, setAutoSwitch] = useState(true);
  const [dataSearch, setDataSearch] = useState("");
  useEffect(() => {
    let interval;
    if (autoSwitch) {
      interval = setInterval(() => {
        setBanner((prevBanner) => (prevBanner === banner1 ? banner2 : banner1));
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [autoSwitch]);

  function handleBanner() {
    setAutoSwitch((prvenBanner) => !prvenBanner);
    setBanner((prevBanner) => (prevBanner === banner1 ? banner2 : banner1));
  }
  function handleChangSearch(e) {
    setDataSearch(e.target.value);
  }
  function handleLogout() {
    localStorage.removeItem("shop-hub-user");
  }
  return (
    <>
      <div className="home_banner_container">
        <div className="home_banner_nav">
          <div className="home_button_next_banner" onClick={handleBanner}>
            <img src={button_next} alt="button next" />
          </div>
          <div className="home_banner_detail">
            <img src={banner} alt="img banner" />
          </div>
          <div className="home_button_back_banner" onClick={handleBanner}>
            <img src={button_back} alt="button back" />
          </div>
        </div>
      </div>
      <div className="home_anchor">
        <div className="home_logo_search">
          <img src="" alt="" />
          <span>
            <h3 style={{ fontFamily: "inherit" }}>Shop HUB</h3>
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
export default HomeBanner;
