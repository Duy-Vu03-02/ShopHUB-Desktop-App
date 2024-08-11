import React from "react";
import star from "../../assets/icon/rating_star.svg";
import avatarcmt from "../../assets/shop/avatarcmt.png";

function ProductReview() {
  const data = {
    avgStar: "4.8",
    sumStar5: "207",
    sumStar4: "45",
    sumStar3: "35",
    sumStar2: "18",
    sumStar1: "2",
    sumCmt: "112",
    sumImg: "57",
  };
  const dataPerson = [
    {
      name: "Dương Siêu Việt",
      star: 5,
      time: "2023-05-28 16:26",
      chatlieu: "vải đen xìi",
      mausac: "đen",
      mota: "dung voi mo ta",
      text: "Dep lam a dung voi mo ta mac rat dep nha gia ca hop li giao hang nhanh chong.",
    },
    {
      name: "Dương Siêu Việt",
      star: 5,
      time: "2023-05-28 16:26",
      chatlieu: "vải đen xìi",
      mausac: "đen",
      mota: "dung voi mo ta",
      text: "Dep lam a dung voi mo ta mac rat dep nha gia ca hop li giao hang nhanh chong.",
    },
  ];

  return (
    <>
      <div className="product_review_overview">
        <div style={{ padding: 3 }}></div>
        <div className="product_review_title uppercase">
          <h5>đánh giá sản phẩm</h5>
        </div>
        <div className="product_review_ratting">
          <div className="product_review_star">
            <div className="product_ratting_detail">
              <p>{data.avgStar}</p>
              <span>trên 5</span>
            </div>
            <div className="product_star_detail">
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
            </div>
          </div>
          <div className="product_overview_content">
            <div className="capitalize">
              <button>tất cả</button>
              <button>5 sao ({data.sumStar5})</button>
              <button>4 sao ({data.sumStar4})</button>
              <button>3 sao ({data.sumStar3})</button>
              <button>2 sao ({data.sumStar2})</button>
              <button>1 sao ({data.sumStar1})</button>
            </div>
            <div>
              <button>có bình luân ({data.sumCmt})</button>
              <button>có hình ảnh / video ({data.sumImg})</button>
            </div>
          </div>
        </div>
        <ul>
          {dataPerson.map((data, index) => (
            <li key={index}>
              <div className="product_review_cmt">
                <div className="product_person_cmt flex">
                  <div className="product_avatar_cmt">
                    <img src={avatarcmt} alt="" />
                  </div>
                  <div className="product_person_info">
                    <div className="product_person_name">
                      <p>{data.name}</p>
                    </div>
                    <div className="product_person_star">
                      <img src={star} alt="" />
                      <img src={star} alt="" />
                      <img src={star} alt="" />
                      <img src={star} alt="" />
                      <img src={star} alt="" />
                    </div>
                    <div className="product_person_time flex">
                      <p>{data.time}</p>
                    </div>
                    <br />
                    <div className="product_person_material flex">
                      <p>Chất liệu:&nbsp;</p>
                      <span>{data.chatlieu}</span>
                    </div>
                    <div className="product_person_color flex">
                      <p>Màu sắc:&nbsp;</p>
                      <span>{data.mausac}</span>
                    </div>
                    <div className="product_person_description flex">
                      <p>Đúng với mô tả:&nbsp;</p>
                      <span>{data.mota}</span>
                    </div>
                    <div className="product_person_cmt_detail">
                      <p>{data.text}</p>
                    </div>
                  </div>
                </div>
                <hr
                  style={{
                    margin: 20,
                    backgroundColor: "rgb(232 232 232)",
                    border: "none",
                    height: 1,
                  }}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
export default ProductReview;
