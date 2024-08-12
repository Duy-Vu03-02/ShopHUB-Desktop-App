import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../resources/cart.css";
import img from "../../assets/product/description.jfif";
import shopicon from "../../assets/icon/store.svg";
import chaticon from "../../assets/icon/chat.svg";
import sell from "../../assets/cart/sell.svg";

const Cart = React.memo(() => {
  const listsProduct = [
    {
      id: "1",
      nameShop: "ulzzang store",
      img: img,
      nameProduct: "đầm cổ vuông thiết kế hình nấm cổ tích",
      classification: "Áo trắng, Free size",
      cost: "555. 000",
      price: "500.000",
      count: "1",
      voucher: "thêm mã giảm giá của shop",
    },
    {
      id: "2",
      nameShop: "ulzzang store",
      img: img,
      nameProduct: "đầm cổ vuông thiết kế hình nấm cổ tích",
      classification: "Áo trắng, Free size",
      cost: "555. 000",
      price: "500.000",
      count: "1",
      voucher: "thêm mã giảm giá của shop",
    },
    {
      id: "3",
      nameShop: "ulzzang store",
      img: img,
      nameProduct: "đầm cổ vuông thiết kế hình nấm cổ tích",
      classification: "Áo trắng, Free size",
      cost: "555. 000",
      price: "500.000",
      count: "1",
      voucher: "thêm mã giảm giá của shop",
    },
  ];

  const intergerPatter = /^[1-9][0-9]*$/;
  const [countProduct, setCountProduct] = useState(1);
  const [checked, setChecked] = useState([]);
  const [checkedAll, setCheckAll] = useState(false);

  function handleChangeCountProduct(e) {
    var value = e.target.value;
    if (intergerPatter.test(value)) {
      setCountProduct(value);
    }
  }
  function handleCountDownProduct() {
    if (countProduct > 1) {
      setCountProduct((prevState) => parseInt(prevState) - 1);
    }
  }
  function handleCountUpProduct() {
    setCountProduct((prevState) => parseInt(prevState) + 1);
  }
  function handleButtonAll(e) {
    const isCheck = e.target.checked;
    if (isCheck) {
      setChecked([...listsProduct.map((x) => x.id)]);
    } else {
      setChecked([]);
    }
    setCheckAll(isCheck);
  }
  function handleChangeButton(id) {
    setChecked((prevState) => {
      if (checked.includes(id)) {
        setCheckAll(false);
        return prevState.filter((x) => x !== id);
      } else {
        const updateCheck = [...prevState, id];
        if (updateCheck.length === listsProduct.length) {
          setCheckAll(true);
        } else {
          setCheckAll(false);
        }
        return updateCheck;
      }
    });
  }

  function handleLogout() {
    localStorage.removeItem("shop-hub-user");
  }

  return (
    <>
      <div className="cart-all-page">
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
        <div className="cart_container">
          <div className="cart_shop_title capitalize flex">
            <h3>Shop Hub</h3>
            <hr />
            <p>giỏ hàng</p>
          </div>
        </div>
        <div className="cart_product_detail">
          <div className="cart_product_all capitalize flex">
            <div className="cart_product_checkall flex">
              <input
                type="checkbox"
                onChange={handleButtonAll}
                checked={checkedAll}
              />
              <p>sản phẩm</p>
            </div>
            <div className="cart_product_informative flex">
              <p>đơn giá</p>
              <p>Số lượng</p>
              <p>Số tiền</p>
              <p>Thao tác</p>
            </div>
          </div>
          <div className="cart_lists_product">
            <ul>
              {listsProduct.map((listProduct) => (
                <li key={listProduct.id}>
                  <div className="cart_product_list">
                    <div className="cart_product_name_shop flex">
                      <input
                        type="checkbox"
                        onChange={() => handleChangeButton(listProduct.id)}
                        checked={checked.includes(listProduct.id)}
                      />
                      <div className="flex uppercase">
                        <img src={shopicon} alt="" />
                        <p>{listProduct.nameShop}</p>
                        <img src={chaticon} alt="" />
                      </div>
                    </div>
                    <hr />
                    <div className="flex cart_detail_product">
                      <div className="cart_product_title flex">
                        <input
                          type="checkbox"
                          checked={checked.includes(listProduct.id)}
                        />
                        <img src={img} alt="" />
                        <p className="capitalize">{listProduct.nameProduct}</p>
                      </div>
                      <div className="cart_detail_content flex">
                        <div className="cart_product_classification capitalize">
                          <p className="">phân loại hàng</p>
                          <span className="">{listProduct.classification}</span>
                        </div>
                        <div className="cart_product_price flex">
                          <p className="cart_by_cost">{listProduct.cost}</p>
                          <p className="cart_by_price">{listProduct.price}</p>
                        </div>
                        <div className="cart_count_product ">
                          <div className="cart_count_option flex">
                            <div className="cart_count_down">
                              <button onClick={handleCountDownProduct}>
                                -
                              </button>
                            </div>
                            <div className="cart_count_products">
                              <input
                                type="text"
                                value={countProduct}
                                onChange={handleChangeCountProduct}
                              />
                            </div>
                            <div className="cart_count_up">
                              <button onClick={handleCountUpProduct}>+</button>
                            </div>
                          </div>
                        </div>
                        <div className="cart_sum_price">
                          <p>{}</p>
                        </div>
                        <div className="cart_product_money ">
                          <button>Xóa</button>
                          <button>Tìm sản phẩm tương tự</button>
                        </div>
                      </div>
                    </div>
                    <hr />
                    <div className="cart_product_voucher flex capitalize">
                      <img src={sell} alt="" />
                      <p>thêm mã giảm giá của shop</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
});
export default Cart;
