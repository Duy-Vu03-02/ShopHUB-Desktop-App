import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import banner1 from "../../assets/home/banner1.png";
import banner2 from "../../assets/home/banner3.png";
import button_next from "../../assets/home/button_next.png";
import button_back from "../../assets/home/button_back.png";
import camera from "../../assets/home/camera.png";

const ProdcutBanner = React.memo(() => {
  const [dataSearch, setDataSearch] = useState("");
  function handleChangSearch(e) {
    setDataSearch(e.target.value);
  }
  function handleLogout() {
    localStorage.removeItem("shop-hub-user");
  }
  return (
    <>
      <div className="home_banner_container">
        <div className="home_site_nav">
          <div className="home_nav_left">
            <div className="home_nav_left_detail">Tải ứng dụng</div>
            <div className="home_nav_left_detail">
              Trở thành người bán Shop Hub
            </div>
            <div className="home_nav_left_detail">Đăng ký miễn phí</div>
          </div>
          <div className="home_nav_right">
            <div className="home_nav_right_detail">
              <Link to="/login" onClick={handleLogout}>
                Đăng xuất
              </Link>
            </div>

            <div className="home_nav_right_detail">Thông báo</div>
            <div className="home_nav_right_detail">Hỗ trợ</div>
          </div>
        </div>
      </div>
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
