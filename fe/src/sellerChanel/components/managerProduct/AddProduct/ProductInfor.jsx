import React, { useEffect, useState } from "react";

const ProductInfor = React.memo(() => {
  const [brand, setBrand] = useState("");
  const [meterial, setMeterial] = useState("");
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const [height, setHeight] = useState("");
  const [width, setWidth] = useState("");

  function handleChangeBrand(e) {
    setBrand(e.target.value);
  }
  function handleChangeMeterial(e) {
    setMeterial(e.target.value);
  }
  function handleChangeColor(e) {
    setColor(e.target.value);
  }
  function handleChangeSize(e) {
    setSize(e.target.value);
  }
  function handleChangeHeight(e) {
    setHeight(e.target.value);
  }
  function handleChangeWidth(e) {
    setWidth(e.target.value);
  }

  return (
    <>
      <div className="add-infor-detail">
        <h4>Thông tin bán hàng</h4>

        <div className=" detail-information flex">
          <div className="left-infor">
            <div className="brand-infor input-detail-infor flex">
              <p>*Xuất xứ</p>
              <input type="text" value={brand} onChange={handleChangeBrand} />
            </div>
            <div className="meterial-infor input-detail-infor flex">
              <p>Thương hiệu</p>
              <input
                type="text"
                value={meterial}
                onChange={handleChangeMeterial}
              />
            </div>
            <div className="color-infor input-detail-infor flex">
              <p>Chất liệu</p>
              <input type="text" value={color} onChange={handleChangeColor} />
            </div>
          </div>
          <div className="right-infor">
            <div className="size-infor input-detail-infor flex">
              <p>Phong cách</p>
              <input type="text" value={size} onChange={handleChangeSize} />
            </div>
            <div className="height-infor input-detail-infor flex">
              <p>Gửi từ</p>
              <input type="text" value={height} onChange={handleChangeHeight} />
            </div>
            <div className="width-infor input-detail-infor flex">
              <p>Kiểu dáng</p>
              <input type="text" value={width} onChange={handleChangeWidth} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
});

export default ProductInfor;
