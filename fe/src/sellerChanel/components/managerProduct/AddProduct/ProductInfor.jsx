import React, { useEffect, useState } from "react";

const ProductInfor = React.memo(() => {
  const [data, setData] = useState({
    country: "",
    brand: "",
    material: "",
    style: "",
    sendFrom: "",
    design: "",
    data: "",
  });

  const handleChange = (e) => {
    setData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  console.log(data);

  return (
    <>
      <div className="add-infor-detail">
        <h4>Thông tin bán hàng</h4>

        <div className=" detail-information flex">
          <div className="left-infor">
            <div className="brand-infor input-detail-infor flex">
              <p>*Xuất xứ</p>
              <input
                type="text"
                value={data.country}
                onChange={handleChange}
                name="country"
              />
            </div>
            <div className="meterial-infor input-detail-infor flex">
              <p>Thương hiệu</p>
              <input
                type="text"
                value={data.brand}
                onChange={handleChange}
                name="brand"
              />
            </div>
            <div className="color-infor input-detail-infor flex">
              <p>Chất liệu</p>
              <input
                type="text"
                value={data.material}
                onChange={handleChange}
                name="material"
              />
            </div>
          </div>
          <div className="right-infor">
            <div className="size-infor input-detail-infor flex">
              <p>Phong cách</p>
              <input
                type="text"
                value={data.style}
                onChange={handleChange}
                name="style"
              />
            </div>
            <div className="height-infor input-detail-infor flex">
              <p>Gửi từ</p>
              <input
                type="text"
                value={data.sendFrom}
                onChange={handleChange}
                name="sendFrom"
              />
            </div>
            <div className="width-infor input-detail-infor flex">
              <p>Kiểu dáng</p>
              <input
                type="text"
                value={data.design}
                onChange={handleChange}
                name="design"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
});

export default ProductInfor;
