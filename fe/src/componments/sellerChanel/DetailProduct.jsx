import React from "react";
import DetailProductListAll from "./detailProductList/DetailProductListAll";
import MenuProduct from "./MenuProduct";

function DetailProduct() {
  return (
    <>
      <div className="container_detial_product">
        <div className="detail_product_list_all">
          <MenuProduct />
        </div>
        <div className="detail_product_list_add"></div>
        <div className="detail_product_list_violate"></div>
        <div className="detail_product_list_setting"></div>
      </div>
    </>
  );
}

export default DetailProduct;
