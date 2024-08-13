import React, { useContext } from "react";
import { ProductContext } from "../../context/productContext";
import avatar from "../../assets/shop/shopavatar.png";
import chat from "../../assets/icon/chat.svg";
import store from "../../assets/icon/store.svg";

export default function ProductShopper() {
  const { productData } = useContext(ProductContext);
  const data = {
    name: "Ngu Thư Hân",
    ratting: 15,
    productCount: 200,
    persenRespone: 87,
    timeRespone: 60,
    timeJoin: 29,
    follow: 48,
    lastTimeOnl: 12,
    detail_title: {
      danhmuc: "T-Shirts",
      chatlieu: "Cotton",
      mau: "tron",
      xuatxu: "Việt Nam",
      soluong: "279",
      from: "Hà Nội",
    },
  };
  return (
    <>
      <div className="product_shop_owner">
        <div className="product_shop_overview flex">
          <div className="product_shop_avatar">
            <img src={productData.shopper.avatar} alt="" />
          </div>
          <div className="product_shop_title">
            <div className="product_shop_name">
              <p>{productData.shopper.shopName}</p>
            </div>
            <div
              className="product_last_time_onl capitalize"
              style={{ fontSize: 14 }}
            >
              <p>{productData.shopper.lastActive}</p>
            </div>
            <div className="product_shop_contact flex">
              <div className="product_shop_mess flex">
                <img src={chat} alt="" />
                <p className="capitalize" style={{ color: "#ee4d2d" }}>
                  chat ngay
                </p>
              </div>
              <div className="product_shop_see flex">
                <img src={store} alt="" />
                <p className="capitalize">xem shop</p>
              </div>
            </div>
          </div>
        </div>
        <div className="table capitalize">
          <table className="table_td">
            <tbody>
              <tr>
                <td className="product_table_f">
                  đánh giá <span>{productData.shopper.totalReviews}</span>
                </td>
                <td className="product_table_s">
                  tỉ lệ phản hồi<span>{productData.shopper.percenReponse}</span>
                </td>
                <td className="product_table_t">
                  tham gia
                  <span>
                    {new Date(productData.shopper.timeJoin).getFullYear()}
                  </span>
                </td>
              </tr>
              <tr>
                <td className="product_table_f">
                  sản phẩm
                  <span>{productData.shopper.totalProduct}</span>
                </td>
                <td className="product_table_s">
                  thời gian phản hồi
                  <span>{productData.shopper.percenReponse}</span>
                </td>
                <td className="product_table_t">
                  người theo dõi<span>{productData.shopper.follow}</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
