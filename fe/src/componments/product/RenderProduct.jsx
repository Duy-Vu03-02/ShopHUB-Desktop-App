import React from "react";

export default function RenderProduct({ data }) {
  return (
    <ul
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      {data.map((set, index) => (
        <li key={index} className="item-product-default">
          <img src={set.id} alt="product" />
          <p className="item-product-desription">{set.description}</p>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              margin: "10px 0 0 0",
            }}
          >
            <p className="item-product-price">${set.price}</p>
            <p className="item-product-slod">Đã bán {set.sold}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
