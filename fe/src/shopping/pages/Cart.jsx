import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../resources/cart.css";
import img from "../../assets/product/description.jfif";
import { PiStorefrontThin } from "react-icons/pi";
import { CiTrash } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";

const Cart = React.memo(() => {
  const [listSelect, setListSelect] = useState([]);
  const [checkAll, setCheckAll] = useState(false);
  const [listsProduct, setListProducts] = useState([
    {
      id: "1",
      nameShop: "ulzzang store",
      img: img,
      nameProduct:
        "đầm cổ vuông thiết kế hình nấm cổ đầm cổ vuông thiết kế hình nấm cổ tích",
      classification: "Áo trắng, Free size",
      price: "1000000",
      count: "1",
      voucher: "thêm mã giảm giá của shop",
      numOrder: 1,
    },
    {
      id: "2",
      nameShop: "ulzzang store",
      img: img,
      nameProduct: "đầm cổ vuông thiết kế hình nấm cổ tích",
      classification: "Áo trắng, Free size",
      price: "200000",
      count: "1",
      voucher: "thêm mã giảm giá của shop",
      numOrder: 1,
    },
    {
      id: "3",
      nameShop: "ulzzang store",
      img: img,
      nameProduct: "đầm cổ vuông thiết kế hình nấm cổ tích",
      classification: "Áo trắng, Free size",
      price: "300000",
      count: "1",
      voucher: "thêm mã giảm giá của shop",
      numOrder: 1,
    },
    {
      id: "4",
      nameShop: "ulzzang store",
      img: img,
      nameProduct: "đầm cổ vuông abc thiết kế hình nấm cổ tích",
      classification: "Áo trắng, Free size",
      price: "400000",
      count: "1",
      voucher: "thêm mã giảm giá của shop",
      numOrder: 1,
    },
  ]);

  useEffect(() => {
    // Kiểm tra nếu tất cả sản phẩm đã được chọn
    if (listSelect.length === listsProduct.length && listsProduct.length > 0) {
      setCheckAll(true);
    } else {
      setCheckAll(false);
    }
  }, [listSelect, listsProduct]);

  const handleCountDownProduct = (id) => {
    setListProducts((prevList) =>
      prevList.map((item) =>
        item.id === id && item.numOrder > 1
          ? { ...item, numOrder: item.numOrder - 1 }
          : item
      )
    );
  };
  const handleCountUpProduct = (id) => {
    setListProducts((prevList) =>
      prevList.map((item) =>
        item.id === id ? { ...item, numOrder: item.numOrder + 1 } : item
      )
    );
  };
  const handleChangeCountProduct = (id, e) => {
    if (e.target.value > 0) {
      setListProducts((prevList) =>
        prevList.map((item) =>
          item.id === id ? { ...item, numOrder: e.target.value } : item
        )
      );
    }
  };

  const handleCheckBox = (id) => {
    setListSelect((prevList) => {
      const check = prevList.includes(id);
      if (check) {
        return prevList.filter((item) => item !== id);
      }
      return [...prevList, id];
    });
  };

  const handleCheckAllBox = () => {
    if (!checkAll) {
      setListSelect(listsProduct.map((item) => item.id));
    } else {
      setListSelect([]);
    }
    setCheckAll(!checkAll);
  };

  const handleDelOrder = (id) => {
    setListProducts((prevList) => {
      return prevList.filter((item) => item.id !== id);
    });
  };

  return (
    <>
      <div className="cart-all-page">
        <div className="cart_container">
          <div className="cart_shop_title capitalize flex">
            <h3>Shop Hub</h3>
            <hr />
            <p>giỏ hàng</p>
          </div>
        </div>
        <div className="cart_product_detail">
          <div className="select-all-item flex">
            <div className="flex">
              <input
                type="checkbox"
                onChange={handleCheckAllBox}
                checked={checkAll}
              />
              <p>select all ({listsProduct?.length} items) </p>
            </div>
            <div
              style={{ cursor: "pointer", position: "relative" }}
              className="flex"
            >
              <CiTrash style={{ fontSize: "18px", color: "#7d7f87" }} />
              <p style={{ margin: "0px" }}>delete</p>
              {checkAll && (
                <div
                  style={{
                    cursor: "pointer",
                    position: "absolute",
                    right: "100px",
                  }}
                  className="btn-payment-order"
                >
                  <button style={{ minWidth: "150px" }}>
                    Thanh toán({listSelect.length})
                  </button>
                </div>
              )}
            </div>
          </div>

          <div className="products-order">
            <ul>
              {listsProduct.map((item, index) => (
                <li key={index}>
                  <div className="store-order flex">
                    <PiStorefrontThin style={{ margin: "0 8px 0 15px" }} />
                    {item.nameShop}
                  </div>
                  <div className="detail-order flex">
                    <div className="img-order flex" style={{ flex: 3 }}>
                      <input
                        type="checkbox"
                        onChange={() => handleCheckBox(item.id)}
                        checked={listSelect.includes(item.id)}
                      />
                      <img src={item.img} alt="" />
                      <div style={{ width: "450px" }}>
                        <p className="title-order">{item.nameProduct}</p>

                        <p className="style-order">{item.classification}</p>
                      </div>
                    </div>
                    <div
                      className="calculator-price flex"
                      style={{
                        flex: 1,
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <p>
                        ₫
                        {new Intl.NumberFormat("vi-VN").format(
                          item.price * item.numOrder
                        )}
                      </p>
                      <div className="trash-order flex">
                        <CiHeart
                          style={{
                            cursor: "pointer",
                            fontSize: "22px",
                            color: "#7d7f87",
                          }}
                        />
                        <CiTrash
                          onClick={() => handleDelOrder(item.id)}
                          style={{
                            margin: "0 12px ",
                            cursor: "pointer",
                            fontSize: "22px",
                            color: "#7d7f87",
                          }}
                        />
                      </div>
                    </div>
                    <div
                      className="flex"
                      style={{
                        flex: 2,
                        minWidth: "250px",
                        justifyContent: "space-around",
                        alignContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <div
                        className="product_count_option "
                        style={{ margin: 0 }}
                      >
                        <div className="product_count_down">
                          <button
                            style={{ width: "30px", height: "30px" }}
                            onClick={() => handleCountDownProduct(item.id)}
                          >
                            -
                          </button>
                        </div>
                        <div className="product_count_products">
                          <input
                            style={{ margin: 0, width: "50px", height: "30px" }}
                            type="text"
                            value={item.numOrder}
                            onChange={(e) =>
                              handleChangeCountProduct(item.id, e)
                            }
                            min={1}
                            // max={productData.totalProducts}
                          />
                        </div>
                        <div className="product_count_up">
                          <button
                            style={{ width: "30px", height: "30px" }}
                            onClick={() => handleCountUpProduct(item.id)}
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div className="btn-payment-order">
                        <button>Thanh toán</button>
                      </div>
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
