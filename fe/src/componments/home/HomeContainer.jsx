import React, { useContext } from "react";
import "../../resources/home.css";
import flyers from "../../assets/product/flyers.avif";
import HomeType from "./HomeType";
import RenderProducts from "../product/RenderProducts";
import { ProductContext } from "../../context/productContext";

function HomeContainer() {
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
          <h3>Có thể bạn cũng thích</h3>
        </div>
        <div className="home_like_product">
          {listProducts && (
            <div className="home_default  home_products">
              <RenderProducts data={listProducts} />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default HomeContainer;
