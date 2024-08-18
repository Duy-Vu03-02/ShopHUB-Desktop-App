import React from "react";
import AddProduct from "./managerProduct/AddProduct/AddProduct";

const MainSeller = React.memo(() => {
  return (
    <>
      <div className="container_detial_product">
        <div className="detail_product_list_transport"></div>
        <div className="detail_product_list_order"></div>
        <div className="detail_product_list_product">
          <AddProduct />
        </div>
        <div className="detail_product_list_cost"></div>
        <div className="detail_product_list_setting"></div>
      </div>
    </>
  );
});

export default MainSeller;
