import React, { useState } from "react";

const NotClassification = React.memo(
  ({ handleClassification, notClassification, handleChangeNotClass }) => {
    return (
      <>
        <div className="not-classification">
          <div className="classification-infor input-detail-infor flex">
            <p>Phân loại hàng</p>
            <button
              className="flex display-button-classfication"
              style={{
                paddingLeft: 5,
                marginLeft: 50,
                width: 160,
                height: 40,
              }}
              onClick={handleClassification}
            >
              <span style={{ fontSize: 35, fontWeight: 200, margin: "auto" }}>
                +
              </span>
              <p
                style={{
                  margin: "auto",
                  marginLeft: 0,
                  textAlign: "left",
                  width: 150,
                  lineHeight: 0,
                }}
              >
                &nbsp;Thêm nhóm phân loại
              </p>
            </button>
          </div>
          <div className="price-infor input-detail-infor flex">
            <p>*Giá</p>
            <input
              type="text"
              name="price"
              value={notClassification.price}
              onChange={handleChangeNotClass}
            />
          </div>
          <div className="sold-infor input-detail-infor flex">
            <p>*Kho hàng</p>
            <input
              type="text"
              name="totalProduct"
              value={notClassification.totalProduct}
              onChange={handleChangeNotClass}
            />
          </div>
        </div>
      </>
    );
  }
);

export default NotClassification;
