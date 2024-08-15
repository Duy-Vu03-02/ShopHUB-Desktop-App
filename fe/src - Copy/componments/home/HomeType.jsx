import React, { useEffect, useContext, useState } from "react";
import RenderProducts from "../product/utils/RenderProducts";
import { useApolloClient } from "@apollo/client";
import { top8Product } from "../../graphQL/query";
import { ProductContext } from "../../context/productContext";
import option from "../../../../public/constants/optionHomeType";

const HomeType = React.memo(() => {
  const client = useApolloClient();
  const { setListProducts } = useContext(ProductContext);
  const [productFetch, setProductFetch] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      try {
        const { data, errors } = await client.query({
          query: top8Product,
        });

        if (errors) {
          console.error(errors);
        } else if (data.top8Product.length > 0) {
          setListProducts((prevState) => {
            return [...prevState, ...data.top8Product];
          });
          setProductFetch(data.top8Product);
        }
        return;
      } catch (err) {
        console.error(err);
      }
    };
    fetch();
  }, []);

  return (
    <div className="home_type">
      <div className="home_name_type">
        <h3>Phân loại</h3>
      </div>
      <div className="home_content">
        <div className="home_optinal_type" style={{ minWidth: "230px" }}>
          <ul>
            {option.map((element, index) => (
              <li key={index}>
                <div className="home_type_detail">
                  <p>{element.content}</p>
                  <span className="home_icon_small">&gt;</span>
                  <ul className="home_detail_list">
                    {element.children.map((item, z) => (
                      <li key={z}>{item}</li>
                    ))}
                    <hr />
                    <div className="home_like">
                      <RenderProducts products={productFetch} />
                    </div>
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </div>
        {productFetch && (
          <div className="home_default">
            <RenderProducts products={productFetch} />
          </div>
        )}
      </div>
    </div>
  );
});
export default HomeType;
