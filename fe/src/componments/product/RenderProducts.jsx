import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useApolloClient } from "@apollo/client";
import { getDetailProduct } from "../../graphQL/query";
import { ProductContext } from "../../context/productContext";

export default function RenderProducts({ data }) {
  const client = useApolloClient();
  const navigate = useNavigate();
  const { setProductData } = useContext(ProductContext);
  console.log(data);

  const handleShowProduct = async ({ id }) => {
    try {
      const { data, errors } = await client.query({
        query: getDetailProduct,
        variables: { id },
      });

      if (errors) {
        console.error(errors);
        return;
      } else if (data.product !== null) {
        setProductData(data.product);
        navigate("/product");
        return;
      }
      return;
    } catch (err) {
      console.error(err);
    }
  };

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
        <li
          key={index}
          className="item-product-default"
          onClick={() => handleShowProduct(set.id)}
        >
          <img src={set.quantity[0].images[0]} alt="img-product" />
          <p className="item-product-desription">{set.name}</p>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              margin: "10px 0 0 0",
            }}
          >
            <p className="item-product-price">
              ₫{new Intl.NumberFormat("vi-VN").format(set.price)}
            </p>
            <p className="item-product-slod">Đã bán {set.sold}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
