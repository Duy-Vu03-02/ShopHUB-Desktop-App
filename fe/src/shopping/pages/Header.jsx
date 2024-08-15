import React from "react";
import { Link } from "react-router-dom";

const Header = React.memo(() => {
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
              <Link to="/" onClick={handleLogout}>
                Đăng xuất
              </Link>
            </div>

            <div className="home_nav_right_detail">Thông báo</div>
            <div className="home_nav_right_detail">Hỗ trợ</div>
          </div>
        </div>
      </div>
    </>
  );
});

export default Header;
