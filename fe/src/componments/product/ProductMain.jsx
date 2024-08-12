import React, { useState } from "react";
import set1 from "../../assets/product/set2.avif";
import set2 from "../../assets/product/set3.avif";
import set3 from "../../assets/product/set4.avif";
import set4 from "../../assets/product/set5.avif";
import star from "../../assets/icon/rating_star.svg";
import re from "../../assets/icon/re.svg";
import freeShip from "../../assets/icon/freeShip.png";
import xeship from "../../assets/icon/xeship.svg";
import inconshopping from "../../assets/icon/iconshopping.svg";
import committed from "../../assets/icon/committed.png";

const ProductMain = React.memo(() => {
  const [hoverImg, setHoverImg] = useState(null);
  const [countProduct, setCountProduct] = useState(1);
  const [colorPay, setColorPay] = useState("");
  const [sizePay, setSizePay] = useState("");
  const [buttonActived, setButtonActived] = useState("");

  const data1 = {
    id: 1,
    imgs: [set1, set2, set4, set3],
    description: "Đầm cổ vuông thiết kế hình nấm cổ tích",
    cost: "380.000",
    price: "200.000",
    voucher: "5k",
    star: 4.5,
    sold: 257,
    evalutate: 3,
    colors: ["Nâu", "Trắng", "Đen"],
    sizes: ["S", "M", "L", "XL"],
    inventory: 3452,
  };
  const [imgmonitor, setImgmonitor] = useState(data1.imgs[0]);

  function handleChangeImg(value) {
    setImgmonitor(value);
    setHoverImg(value);
  }
  function handleChangeCountProduct(e) {
    var value = e.target.value;
    if (Math.floor(value) == value) {
      setCountProduct(value);
    }
  }
  function handleCountDownProduct() {
    if (countProduct > 1) {
      setCountProduct((prevState) => prevState - 1);
    }
  }
  function handleCountUpProduct() {
    setCountProduct((prevState) => prevState + 1);
  }
  function handleChangeColor(color) {
    setColorPay(color);
    setButtonActived(color);
  }
  function handleChangeSize(size) {
    setSizePay(size);
  }

  return (
    <>
      <div className="product_container">
        <div className="product_img_product">
          <div className="product_img_big">
            <img src={imgmonitor} alt="" />
          </div>
          <div className="product_img_more">
            <ul>
              {data1.imgs.map((img, index) => (
                <li key={index}>
                  <img
                    src={img}
                    alt="Hinh anh"
                    onClick={() => handleChangeImg(img)}
                    className={img === hoverImg ? "product_img_hover" : ""}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="product_overview">
          <div className="product_title">
            <p>
              {data1.description}
              &nbsp;
              {data1.description}
            </p>
          </div>
          <div className="product_content_review">
            <div className="product_evalutate_sold">
              <div className="product_rating">
                <span>{data1.star}</span>
                <div className="product_rating_star">
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                </div>
                <hr />
              </div>
              <div>
                {data1.evalutate}
                <span style={{ color: "rgb(96, 95, 95)" }}>Đánh Giá</span>
              </div>
              <hr style={{ width: 0.5 }} />
              <div>
                {data1.sold}
                <span style={{ color: "rgb(96, 95, 95)" }}> Đã Bán</span>
              </div>
            </div>
            <div className="product_report">
              <span>Tố cáo</span>
            </div>
          </div>
          <hr
            style={{
              width: 30,
              backgroundColor: "#ff5300",
              marginLeft: 9,
              marginTop: -7,
              height: 1,
              border: "none",
            }}
          />
          <div className="product_content_price">
            <div className="product_price">
              <div className="product_price_detail">
                <p
                  className="product_cost"
                  style={{
                    display: data1.cost ? "block" : "none",
                  }}
                >
                  ${data1.cost}
                </p>
                <p className="product_price_sale">${data1.price}</p>
              </div>
              <div
                className="product_percent"
                style={{
                  display: data1.cost ? "block" : "none",
                }}
              >
                {Math.floor((data1.price / data1.cost) * 100)}%{" "}
                <span>giảm</span>
              </div>
            </div>
            <div className="product_content_sale">
              <img src={re} alt="" />
              <div className="product_sale capitalize">
                <span>gì cũng rẻ</span>
                <p>giá tốt nhất so với các sản phẩm cùng loại trên Shop Hub</p>
              </div>
            </div>
          </div>
          <div className="product_code_sale capitalize">
            <div className="product_code_title">
              <p>mã giảm giá của shop</p>
            </div>
            <div className="product_code_value">
              <p>giảm ${data1.voucher}</p>
            </div>
          </div>
          <div className="product_transport">
            <p className="capitalize">vận chuyển</p>
            <div className="product_transport_detail">
              <div className="product_free_ship">
                <img src={freeShip} alt="" />
                <div className="capitalize">
                  <p>miễn phí vận chuyển</p>
                  <p>miễn phí vận chuyển cho đơn hàng trên $99.000</p>
                </div>
              </div>
              <div className="product_transport_ship flex">
                <img src={xeship} alt="" />
                <div className="capitalize">
                  <p>vận chuyển tới</p>
                  <p>phí vận chuyển</p>
                </div>
              </div>
            </div>
          </div>
          <div className="product_content_color capitalize">
            <div className="product_color ">
              <p>màu sắc</p>
            </div>
            <div className="product_color_option">
              <ul>
                {data1.colors.map((color, index) => (
                  <li
                    key={index}
                    style={{
                      border:
                        color === buttonActived ? "1px solid #ff5300" : "",
                    }}
                  >
                    <button onClick={() => handleChangeColor(color)}>
                      {color}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="product_content_size capitalize ">
            <div className="product_size">
              <p>kích cỡ</p>
            </div>
            <div className="product_size_option">
              <ul>
                {data1.sizes.map((size, index) => (
                  <li key={index}>
                    <button onClick={() => handleChangeSize(size)}>
                      {size}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="product_count_product capitalize">
            <div className="product_count">
              <p>số lượng</p>
            </div>
            <div className="product_count_option">
              <div className="product_count_down">
                <button onClick={handleCountDownProduct}>-</button>
              </div>
              <div className="product_count_products">
                <input
                  type="text"
                  value={countProduct}
                  onChange={handleChangeCountProduct}
                />
              </div>
              <div className="product_count_up">
                <button onClick={handleCountUpProduct}>+</button>
              </div>
            </div>
            <div className="product_count_inventory">
              <p style={{ textTransform: "none" }}>
                {data1.inventory} sản phẩm có sẵn
              </p>
            </div>
          </div>
          <div className="product_add_pay capitalize">
            <div className="product_add_store">
              <img src={inconshopping} alt="" />
              <p>thêm vào giỏ hàng</p>
            </div>
            <div className="product_pay">
              <p>mua ngay</p>
            </div>
          </div>
          <hr />
          <div className="product_committed flex">
            <div className="product_committed_detail capitalize flex">
              <img src={committed} alt="" />
              <p>shop hub đảm bảo</p>
            </div>
            <div className="product_timmer capitalize">
              <p>3 ngày trả hàng/hoàn tiền</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});

export default ProductMain;
