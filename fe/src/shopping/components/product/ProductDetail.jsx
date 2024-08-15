import React, { useContext } from "react";
import ProductMaybeLike from "./ProductMaybeLike";
import ProductReview from "./ProductReview";
import description from "../../../assets/product/description.jfif";
import description1 from "../../../assets/product/description1.jfif";
import description2 from "../../../assets/product/description2.jfif";
import description3 from "../../../assets/product/description3.jfif";
import description4 from "../../../assets/product/description4.jfif";
import description5 from "../../../assets/product/description5.jfif";
import { ProductContext } from "../../../context/productContext";

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
