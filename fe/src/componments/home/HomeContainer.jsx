import React from "react";
import "../../resources/home.css";
import button_back from "../../assets/home/button_back.png";
import set1 from "../../assets/product/set1.avif";
import set2 from "../../assets/product/set2.avif";
import set3 from "../../assets/product/set3.avif";
import set4 from "../../assets/product/set4.avif";
import set5 from "../../assets/product/set5.avif";
import set6 from "../../assets/product/set6.avif";
import set7 from "../../assets/product/set7.avif";
import set8 from "../../assets/product/set8.avif";
import set9 from "../../assets/product/set9.avif";
import set10 from "../../assets/product/set10.avif";
import flyers from "../../assets/product/flyers.avif";
import HomeType from "./HomeType";
import RenderProduct from "../product/RenderProduct";

function HomeContainer() {
  const data1 = {
    id: set1,
    description: "Đầm cổ vuông thiết kế hình nấm cổ tích",
    price: "380. 000",
    sold: 257,
  };
  const data2 = {
    id: set2,
    description: "Cô gái Mỏi may mắn nhỏ bé có khí chất",
    price: "570. 000",
    sold: 583,
  };
  const data3 = {
    id: set3,
    description: "Mới thời trang phong cách Hepby",
    price: "560. 000",
    sold: 879,
  };
  const data4 = {
    id: set4,
    description: "Váy trắng cổ xanh hải quân cho nữ",
    price: "280. 000",
    sold: 217,
  };

  const products1 = [
    data1,
    data2,
    data3,
    data4,
    data1,
    data1,
    data2,
    data3,
    data4,
    data1,
  ];
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
          <div className="home_default  home_products">
            <RenderProduct data={products1} />
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeContainer;
