import React, { useContext } from "react";
import { SellerContext } from "../../../context/sellerContext";

const ProductInfor = React.memo(() => {
  const { setAddProduct, addProduct } = useContext(SellerContext);

  const handleChange = (e) => {
    setAddProduct((prev) => {
      const { name, value } = e.target;
      return {
        ...prev,
        description: {
          ...prev.description,
          [name]: value,
        },
      };
    });
  };

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
                value={addProduct?.description?.country}
                onChange={handleChange}
                name="country"
              />
            </div>
            <div className="meterial-infor input-detail-infor flex">
              <p>Thương hiệu</p>
              <input
                type="text"
                value={addProduct?.description?.brand}
                onChange={handleChange}
                name="brand"
              />
            </div>
            <div className="color-infor input-detail-infor flex">
              <p>Chất liệu</p>
              <input
                type="text"
                value={addProduct?.description?.material}
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
                value={addProduct?.description?.style}
                onChange={handleChange}
                name="style"
              />
            </div>
            <div className="height-infor input-detail-infor flex">
              <p>Gửi từ</p>
              <input
                type="text"
                value={addProduct?.description?.sendFrom}
                onChange={handleChange}
                name="sendFrom"
              />
            </div>
            <div className="width-infor input-detail-infor flex">
              <p>Kiểu dáng</p>
              <input
                type="text"
                value={addProduct?.description?.design}
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
