import React from "react";
import expandMore from "../../../assets/seller/New folder/expand_more.svg";

function DetailProductListAll() {
  return (
    <>
      <div className="container-detail-list-all">
        <h4>Tất cả sản phẩm</h4>
        <div className="search-detail-list flex">
          <div
            className="flex"
            style={{ margin: "auto", position: "relative" }}
          >
            <input type="text" placeholder="Nhập tên sản phẩm" />
            <button className="btn-search-detail-list">Tìm</button>
          </div>
          <div className="wrap-btn-search-detial-list">
            <div></div>
          </div>
        </div>

        <div className="wrap-display-detail-list">
          <hr style={{ margin: "20px 0 10px 0", opacity: 0.5 }} />
          <div className="column-header-detail-list flex">
            <div>
              <p>Tất cả</p>
            </div>
            <div>
              <p>Đang hoạt động</p>
            </div>
            <div>
              <p>Hết hàng</p>
            </div>
            <div>
              <p>Chờ duyệt</p>
            </div>
            <div>
              <p>Vi phạm</p>
            </div>
            <div>
              <p>Đã ẩn</p>
            </div>
          </div>
          <div className="display-detail-list">
            <div
              className="bar-infor-detail-list flex"
              style={{ justifyContent: "space-between", lineHeight: "25px" }}
            >
              <div>
                <h5 style={{ fontSize: 16 }}>0 Sản Phẩm</h5>
                <p style={{ fontSize: 13, opacity: 0.5 }}>
                  Có thể đăng tải thêm 1000 sản phẩm
                </p>
              </div>
              <div
                className="flex"
                style={{
                  justifyContent: "space-around",
                  width: "400px",
                  margin: "auto",
                }}
              >
                <button className="btn-add-product-detail-list flex">
                  <span
                    style={{
                      // margin: "2px 0 0 5px",
                      fontWeight: 150,
                      fontSize: 35,
                      margin: "auto",
                    }}
                  >
                    +
                  </span>
                  <span
                    style={{
                      display: "block",
                      textAlign: "center",
                      margin: "auto",
                    }}
                  >
                    Thêm một sản phẩm mới
                  </span>
                </button>
                <div style={{ position: "relative" }}>
                  <button
                    className="flex btn-before-hover"
                    style={{ padding: "8px" }}
                  >
                    Công cụ Xử lý hàng loạt
                    <img
                      style={{ opacity: 0.8, width: 15 }}
                      src={expandMore}
                      alt="arow expanmore"
                    />
                  </button>
                  <div className="list-select-option">
                    <div>Đăng hàng loạt</div>
                    <div>Cập nhật hàng loạt</div>
                    <div>Cập nhật thuộc tính</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="display-data-grid" style={{ minHeight: "400px" }}>
          <div className="flex title-data-grid">
            <table>
              <tr
                style={{
                  backgroundColor: "#f6f6f6",
                  lineHeight: "45px",
                }}
              >
                <td>
                  <p style={{ width: "215px" }}>Tên sản phẩm</p>
                </td>
                <td>
                  <p style={{ width: "175px" }}>Phân loại hàng</p>
                </td>
                <td>
                  <p style={{ width: "119px" }}>Giá</p>
                </td>
                <td>
                  <p style={{ width: "110px" }}>Kho hàng</p>
                </td>
                <td>
                  <p style={{ width: "120px" }}>Doanh số</p>
                </td>
                <td>
                  <p style={{ width: "110px" }}>Thao tác</p>
                </td>
              </tr>
              <tr></tr>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default DetailProductListAll;
