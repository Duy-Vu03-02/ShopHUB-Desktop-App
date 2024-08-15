import React, { useContext } from "react";
import { Link } from "react-router-dom";
import notification from "../../assets/icon/notification.svg";
import apps from "../../assets/icon/apps.svg";
import message from "../../assets/icon/chat.svg";
import { UserContext } from "../../context/userContext";

const Header = React.memo(() => {
  const { userData } = useContext(UserContext);
  function handleLogout() {
    localStorage.removeItem("shop-hub-user");
  }

  return (
    <>
      <div className="home_banner_container">
        <div className="home_site_nav">
          <div className="home_nav_left">
            <div className="home_nav_left_detail">
              Trở thành người bán Shop Hub
            </div>
          </div>
          <div className="nav-bar-right flex">
            <div className="account-user flex">
              <img src={userData.avatar} alt="" />
              <p>{userData.username}</p>
            </div>
            <hr />
            <div className="extension flex">
              <div className="notification">
                <img src={message} alt="" />
              </div>
              <div className="message">
                <img src={notification} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});

export default Header;
