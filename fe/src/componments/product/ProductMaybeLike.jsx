import React from "react";
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
const ProductMaybeLike = React.memo(() => {
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
  const data5 = {
    id: set5,
    description: "Disney trang phục Pháp tình yêu đầu tiên",
    price: "780. 000",
    sold: 503,
  };
  const data6 = {
    id: set6,
    description: "Đầm Pháp nhỏ Puff Puff",
    price: "980. 000",
    sold: 808,
  };
  const data7 = {
    id: set7,
    description: "Đầm nữ mùa hè tay phồng",
    price: "380. 000",
    sold: 257,
  };
  const data8 = {
    id: set8,
    description: "Bộ đồ màu đen kiểu Pháp Hepburn",
    price: "380. 000",
    sold: 257,
  };
  const data9 = {
    id: set9,
    description: "Plus size nữ phong cách Hàn Quốc ",
    price: "380. 000",
    sold: 257,
  };
  const data10 = {
    id: set10,
    description: "Thời trang giản dị mùa thu",
    price: "380. 000",
    sold: 257,
  };

  const sets = [data1, data2, data3, data4];
  const sets1 = [data5, data6, data7, data8];
  const sets5 = [data2, data3, data4];
  const sets3 = [data5, data6, data7];
  const sets4 = [data1, data2, data8];
  const products1 = [...sets, data9];
  const products2 = [...sets1, data10];
  return (
    <>
      <div className="product_maybe_like">
        <div style={{ paddingTop: 7 }}></div>
        <div className="product_maybe_title uppercase">
          <h5>các sản phẩm khác của shop</h5>
        </div>
        <div>
          <div className="home_like_product">
            <div className="home_default  home_products">
              <ul>
                {products1.map((set, index) => (
                  <li key={index}>
                    <img src={set.id} alt="product" />
                    <p className="home_desription">{set.description}</p>
                    <br />
                    <div className="home_sub">
                      <p className="home_price">${set.price}</p>
                      <p className="hone_slod">Đã bán {set.sold}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <ul>
                {products2.map((set, index) => (
                  <li key={index}>
                    <img src={set.id} alt="product" />
                    <p className="home_desription">{set.description}</p>
                    <br />
                    <div className="home_sub">
                      <p className="home_price">${set.price}</p>
                      <p className="hone_slod">Đã bán {set.sold}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <ul>
                {products1.map((set, index) => (
                  <li key={index}>
                    <img src={set.id} alt="product" />
                    <p className="home_desription">{set.description}</p>
                    <br />
                    <div className="home_sub">
                      <p className="home_price">${set.price}</p>
                      <p className="hone_slod">Đã bán {set.sold}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <ul>
                {products2.map((set, index) => (
                  <li key={index}>
                    <img src={set.id} alt="product" />
                    <p className="home_desription">{set.description}</p>
                    <br />
                    <div className="home_sub">
                      <p className="home_price">${set.price}</p>
                      <p className="hone_slod">Đã bán {set.sold}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <ul>
                {products1.map((set, index) => (
                  <li key={index}>
                    <img src={set.id} alt="product" />
                    <p className="home_desription">{set.description}</p>
                    <br />
                    <div className="home_sub">
                      <p className="home_price">${set.price}</p>
                      <p className="hone_slod">Đã bán {set.sold}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <ul>
                {products2.map((set, index) => (
                  <li key={index}>
                    <img src={set.id} alt="product" />
                    <p className="home_desription">{set.description}</p>
                    <br />
                    <div className="home_sub">
                      <p className="home_price">${set.price}</p>
                      <p className="hone_slod">Đã bán {set.sold}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <ul>
                {products1.map((set, index) => (
                  <li key={index}>
                    <img src={set.id} alt="product" />
                    <p className="home_desription">{set.description}</p>
                    <br />
                    <div className="home_sub">
                      <p className="home_price">${set.price}</p>
                      <p className="hone_slod">Đã bán {set.sold}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <ul>
                {products2.map((set, index) => (
                  <li key={index}>
                    <img src={set.id} alt="product" />
                    <p className="home_desription">{set.description}</p>
                    <br />
                    <div className="home_sub">
                      <p className="home_price">${set.price}</p>
                      <p className="hone_slod">Đã bán {set.sold}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <ul>
                {products1.map((set, index) => (
                  <li key={index}>
                    <img src={set.id} alt="product" />
                    <p className="home_desription">{set.description}</p>
                    <br />
                    <div className="home_sub">
                      <p className="home_price">${set.price}</p>
                      <p className="hone_slod">Đã bán {set.sold}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <ul>
                {products2.map((set, index) => (
                  <li key={index}>
                    <img src={set.id} alt="product" />
                    <p className="home_desription">{set.description}</p>
                    <br />
                    <div className="home_sub">
                      <p className="home_price">${set.price}</p>
                      <p className="hone_slod">Đã bán {set.sold}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <ul>
                {products1.map((set, index) => (
                  <li key={index}>
                    <img src={set.id} alt="product" />
                    <p className="home_desription">{set.description}</p>
                    <br />
                    <div className="home_sub">
                      <p className="home_price">${set.price}</p>
                      <p className="hone_slod">Đã bán {set.sold}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <ul>
                {products2.map((set, index) => (
                  <li key={index}>
                    <img src={set.id} alt="product" />
                    <p className="home_desription">{set.description}</p>
                    <br />
                    <div className="home_sub">
                      <p className="home_price">${set.price}</p>
                      <p className="hone_slod">Đã bán {set.sold}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <ul>
                {products1.map((set, index) => (
                  <li key={index}>
                    <img src={set.id} alt="product" />
                    <p className="home_desription">{set.description}</p>
                    <br />
                    <div className="home_sub">
                      <p className="home_price">${set.price}</p>
                      <p className="hone_slod">Đã bán {set.sold}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <ul>
                {products2.map((set, index) => (
                  <li key={index}>
                    <img src={set.id} alt="product" />
                    <p className="home_desription">{set.description}</p>
                    <br />
                    <div className="home_sub">
                      <p className="home_price">${set.price}</p>
                      <p className="hone_slod">Đã bán {set.sold}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <ul>
                {products1.map((set, index) => (
                  <li key={index}>
                    <img src={set.id} alt="product" />
                    <p className="home_desription">{set.description}</p>
                    <br />
                    <div className="home_sub">
                      <p className="home_price">${set.price}</p>
                      <p className="hone_slod">Đã bán {set.sold}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <ul>
                {products2.map((set, index) => (
                  <li key={index}>
                    <img src={set.id} alt="product" />
                    <p className="home_desription">{set.description}</p>
                    <br />
                    <div className="home_sub">
                      <p className="home_price">${set.price}</p>
                      <p className="hone_slod">Đã bán {set.sold}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <ul>
                {products1.map((set, index) => (
                  <li key={index}>
                    <img src={set.id} alt="product" />
                    <p className="home_desription">{set.description}</p>
                    <br />
                    <div className="home_sub">
                      <p className="home_price">${set.price}</p>
                      <p className="hone_slod">Đã bán {set.sold}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <ul>
                {products2.map((set, index) => (
                  <li key={index}>
                    <img src={set.id} alt="product" />
                    <p className="home_desription">{set.description}</p>
                    <br />
                    <div className="home_sub">
                      <p className="home_price">${set.price}</p>
                      <p className="hone_slod">Đã bán {set.sold}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});

export default ProductMaybeLike;
