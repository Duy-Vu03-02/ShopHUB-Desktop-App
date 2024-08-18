import React, { useState } from "react";
import avatar from "../../assets/shop/shopavatar.png";
import "../../resources/sellerChanel.css";
import "./seller.css";
import notification from "../../assets/icon/notification.svg";
import apps from "../../assets/icon/apps.svg";
import message from "../../assets/icon/chat.svg";
import setting from "../../assets/icon/setting.svg";
import payment from "../../assets/icon/payment.svg";
import shopping from "../../assets/icon/shopping.svg";
import order from "../../assets/icon/order.svg";
import box from "../../assets/icon/box.svg";
import store from "../../assets/icon/store1.svg";

import MainSeller from "../components/MainSeller";

const SellerChanel = React.memo(() => {
  const data = {
    username: "ngu thu han",
  };
  const [compoment, setCompoment] = useState([]);
  const [display, setDisplay] = useState([]);
  const [sateArrow, setSateArrow] = useState([]);
  const [listMenu, setListMenu] = useState([]);

  function handleDisplay(content) {
    if (listMenu.includes(content)) {
      setListMenu((prev) => {
        return prev.filter((item) => item != content);
      });
    } else {
      setListMenu((prev) => [...prev, content]);
    }
  }

  const bars = [
    {
      icon: box,
      content: "vận chuyển",
      item: ["quản lý vận chuyển", "giao hàng loạt", "cài đặt vận chuyển"],
    },
    {
      icon: order,
      content: "quản lý đơn hàng",
      item: ["tất cả", "đơn hủy", "trả hàng/hoàn tiền"],
    },
    {
      icon: shopping,
      content: "quản lý sản phẩm",
      item: ["tất cả sản phẩm", "thêm sản phẩm", "cài đặt sản phẩm"],
    },
    {
      icon: payment,
      content: "tài chính",
      item: ["doanh thu", "tài khoản ngân hàng", "thiết lập thanh toán"],
    },
    {
      icon: store,
      content: "quản lý shop",
      item: ["đánh giá shop", "hồ sơ shop", "kho hình ảnh/video"],
    },
    {
      icon: setting,
      content: "thiết lập shop",
      item: ["địa chỉ", "thiết lập shop", "tài khoản"],
    },
  ];

  return (
    <>
      <div className="container ">
        <div className="nav-bar flex">
          <div className="nav-bar-left capitalize flex">
            <h3>shop hub</h3>
            <p>kênh người bán</p>
          </div>
          <div className="nav-bar-right flex">
            <div className="account-user flex">
              <img src={avatar} alt="" />
              <p>{data.username}</p>
            </div>
            <hr />
            <div className="extension flex">
              <div className="dropdown">
                <img src={apps} alt="" />
              </div>
              <div className="notification">
                <img src={message} alt="" />
              </div>
              <div className="message">
                <img src={notification} alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="content flex">
          <div className="sidebar-menu capitalize">
            {bars.map((item, index) => (
              <li key={index}>
                <div className="menu-transport">
                  <div className="menu-title flex">
                    <img src={item.icon} alt="" />
                    <h5
                      className="state-transport"
                      onClick={() => handleDisplay(item.content)}
                    >
                      {item.content}
                    </h5>
                    <img className="arrow" src={sateArrow} alt="" />
                  </div>
                  {listMenu.includes(item.content) && (
                    <ul className="hidden list-transport ">
                      {item.item.map((e, z) => (
                        <li key={z}>{e}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </li>
            ))}
          </div>
          <div className="display-compoment">
            <MainSeller />
          </div>
        </div>
      </div>
    </>
  );
});

export default SellerChanel;
