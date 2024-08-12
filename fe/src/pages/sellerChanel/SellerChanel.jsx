import React, { useState } from "react";
import avatar from "../../assets/shop/shopavatar.png";
import "../../resources/sellerChanel.css";
import notification from "../../assets/icon/notification.svg";
import apps from "../../assets/icon/apps.svg";
import message from "../../assets/icon/chat.svg";
import setting from "../../assets/icon/setting.svg";
import payment from "../../assets/icon/payment.svg";
import shopping from "../../assets/icon/shopping.svg";
import order from "../../assets/icon/order.svg";
import box from "../../assets/icon/box.svg";
import store from "../../assets/icon/store1.svg";
import arrowLess from "../../assets/icon/arrowLess.svg";
import arrowMore from "../../assets/icon/arrowMore.svg";
import MenuProduct from "../../componments/sellerChanel/MenuProduct";
import DetailProduct from "../../componments/sellerChanel/DetailProduct";

const SellerChanel = React.memo(() => {
  const data = {
    username: "ngu thu han",
  };
  const [compoment, setCompoment] = useState([]);
  const [display, setDisplay] = useState([]);
  const [sateArrow, setSateArrow] = useState([]);

  function handleDisplay(e) {
    const classAll = e.target.className.split("-");
    const classDisplay = `list-${classAll[1]}`;
    const element = document.querySelector(`.${classDisplay}`);
    const haveIndex = display.indexOf(classDisplay);
    if (haveIndex >= 0) {
      element.style.display = "none";
      setDisplay((prevState) => {
        return prevState.filter((x) => x !== classDisplay);
      });
    } else {
      element.style.display = "block";
      setDisplay((prevState) => [...prevState, classDisplay]);
    }
  }

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
            <div className="menu-transport">
              <div className="menu-title flex">
                <img src={box} alt="" />
                <h5 className="state-transport" onClick={handleDisplay}>
                  vận chuyển
                </h5>
                <img className="arrow" src={sateArrow} alt="" />
              </div>
              <ul className="hidden list-transport ">
                <li>quản lý vận chuyển</li>
                <li>giao hàng loạt</li>
                <li>cài đặt vận chuyển</li>
              </ul>
            </div>
            <div className="menu-oder">
              <div className="menu-title flex">
                <img src={order} alt="" />
                <h5 className="state-oder" onClick={handleDisplay}>
                  quản lý đơn hàng
                </h5>
                <img className="arrow" src={sateArrow} alt="" />
              </div>
              <ul className="hidden list-oder ">
                <li>tất cả</li>
                <li>đơn hủy</li>
                <li>trả hàng/hoàn tiền</li>
              </ul>
            </div>
            <div className="menu-product">
              <div className="menu-title flex">
                <img src={shopping} alt="" />
                <h5 className="state-product" onClick={handleDisplay}>
                  quản lý sản phẩm
                </h5>
                <img className="arrow" src={sateArrow} alt="" />
              </div>
              <ul className="hidden list-product ">
                <li>tất cả sản phẩm</li>
                <li>thêm sản phẩm</li>
                <li>cài đặt sản phẩm</li>
              </ul>
            </div>
            <div className="menu-finance">
              <div className="menu-title flex">
                <img src={payment} alt="" />
                <h5 className="state-finance" onClick={handleDisplay}>
                  tài chính
                </h5>
                <img className="arrow" src={sateArrow} alt="" />
              </div>
              <ul className="hidden list-finance ">
                <li>doanh thu</li>
                <li>tài khoản ngân hàng</li>
                <li>thiết lập thanh toán</li>
              </ul>
            </div>
            <div className="menu-management">
              <div className="menu-title flex">
                <img src={store} alt="" />
                <h5 className="state-management" onClick={handleDisplay}>
                  quản lý shop
                </h5>
                <img className="arrow" src={sateArrow} alt="" />
              </div>
              <ul className="hidden list-management ">
                <li>đánh giá shop</li>
                <li>hồ sơ shop</li>
                <li>kho hình ảnh/video</li>
              </ul>
            </div>
            <div className="menu-config">
              <div className="menu-title flex" style={{ marginBottom: 15 }}>
                <img src={setting} alt="" />
                <h5 className="state-config" onClick={handleDisplay}>
                  thiết lập shop
                </h5>
                <img className="arrow" src={sateArrow} alt="" />
              </div>
              <ul className="hidden list-config ">
                <li>địa chỉ</li>
                <li>thiết lập shop</li>
                <li>tài kh</li>
              </ul>
            </div>
          </div>
          <div className="display-compoment">
            <DetailProduct />
          </div>
        </div>
      </div>
    </>
  );
});

export default SellerChanel;
