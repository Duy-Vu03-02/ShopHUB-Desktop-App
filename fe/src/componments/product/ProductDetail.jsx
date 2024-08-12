import React, { useContext } from "react";
import avatar from "../../assets/shop/shopavatar.png";
import chat from "../../assets/icon/chat.svg";
import store from "../../assets/icon/store.svg";
import description from "../../assets/product/description.jfif";
import description1 from "../../assets/product/description1.jfif";
import description2 from "../../assets/product/description2.jfif";
import description3 from "../../assets/product/description3.jfif";
import description4 from "../../assets/product/description4.jfif";
import description5 from "../../assets/product/description5.jfif";
import { ProductContext } from "../../context/productContext";

const ProductDetail = React.memo(() => {
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
  const dataDescription = {
    text: `THÔNG TIN SẢN PHẨM :Set 3 món chân váy kèm áo ba lỗ và áo khoác màu đen trắng siêu cá tính F52

    - Hàng đẹp chuẩn mẫu l1
    
    - Form đẹp chuẩn mẫu
    
    - Màu như ảnh shop chụp nha ảnh trải sàn 
    
    - Size S 45 - 50kg ( tùy chiều cao các bạn nha)
    
    - Size M 50- 55kg ( tùy chiều cao các bạn nha)
    
    Nhanh tay đặt hàng để nhận nhiều ưu đãi của shop các nàng ơi ❤`,
    imgs: [
      description,
      description1,
      description2,
      description3,
      description4,
      description5,
    ],
  };
  return (
    <>
      <div className="product_shop_owner">
        <div className="product_shop_overview flex">
          <div className="product_shop_avatar">
            <img src={avatar} alt="" />
          </div>
          <div className="product_shop_title">
            <div className="product_shop_name">
              <p>{data.name}</p>
            </div>
            <div
              className="product_last_time_onl capitalize"
              style={{ fontSize: 14 }}
            >
              <p>online {data.lastTimeOnl} giờ trước</p>
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
                  đánh giá <span>{data.ratting}</span>
                </td>
                <td className="product_table_s">
                  tỉ lệ phản hồi<span>{data.persenRespone}</span>
                </td>
                <td className="product_table_t">
                  tham gia<span>{data.timeJoin}</span>
                </td>
              </tr>
              <tr>
                <td className="product_table_f">
                  sản phẩm
                  <span>{data.productCount}</span>
                </td>
                <td className="product_table_s">
                  thời gian phản hồi<span>{data.lastTimeOnl}</span>
                </td>
                <td className="product_table_t">
                  người theo dõi<span>{data.follow}</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="product_detail">
        <div style={{ height: 10 }}></div>
        <div className="product_detail_title uppercase">
          <h5>chi tiết sản phẩm</h5>
        </div>
        <div className="product_detail_list capitalize">
          <div className="flex product_list_detail">
            <p>danh mục</p>
            <span>{data.detail_title.danhmuc}</span>
          </div>
          <div className="flex product_list_detail">
            <p>chất liệu</p>
            <span>{data.detail_title.chatlieu}</span>
          </div>
          <div className="flex product_list_detail">
            <p>mẫu</p>
            <span>{data.detail_title.mau}</span>
          </div>
          <div className="flex product_list_detail">
            <p>xuất xứ</p>
            <span>{data.detail_title.xuatxu}</span>
          </div>
          <div className="flex product_list_detail">
            <p>số lượng</p>
            <span>{data.detail_title.soluong}</span>
          </div>
          <div className="flex product_list_detail">
            <p>gửi từ</p>
            <span>{data.detail_title.from}</span>
          </div>
        </div>
        <div className="product_detail_description uppercase">
          <h5>mô tả sản phẩm</h5>
        </div>
        <div className="product_descript_detail">
          <div className="product_description_text">{dataDescription.text}</div>
          <div className="product_description_img">
            <ul>
              {dataDescription.imgs.map((img, index) => (
                <li key={index}>
                  <img src={img} alt="img_review" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
});
export default ProductDetail;
