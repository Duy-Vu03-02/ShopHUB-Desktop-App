import React, { useContext } from "react";
import "../../../resources/home.css";
import flyers from "../../../assets/product/flyers.avif";
import HomeType from "./HomeType";
import { ProductContext } from "../../../context/productContext";
import RenderProducts from "../product/utils/RenderProducts";

const HomeContainer = React.memo(() => {
  const { listProducts } = useContext(ProductContext);

  return (
    <>
      <div className="home_container_type">
        <HomeType />
      </div>

      <div className="home_flyers">
        <img src={flyers} alt="foter" />
      </div>
      <div className="home_maybe_like">
        <div className="home_name_type">
          <h5>Có thể bạn cũng thích</h5>
        </div>
        <div className="home_like_product">
          {listProducts && (
            <div className="home_default  home_products">
              <RenderProducts products={listProducts} />
            </div>
          )}
        </div>
      </div>
    </>
  );
});
export default HomeContainer;
