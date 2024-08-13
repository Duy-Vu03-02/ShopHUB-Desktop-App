import React, { useEffect, useState, useContext } from "react";
import { useApolloClient } from "@apollo/client";
import { productByShop } from "../../graphQL/query";
import { ProductContext } from "../../context/productContext";
import RenderProducts from "./RenderProducts";

const ProductMaybeLike = React.memo(() => {
  const { productData } = useContext(ProductContext);
  const client = useApolloClient();
  const [listProduct, setListProduct] = useState(null);

  useEffect(() => {
    const fetch = async () => {
      const { data, errors } = await client.query({
        query: productByShop,
        variables: {
          id: productData.idShop,
        },
      });

      if (errors) {
        console.error(errors);
      } else if (data?.productByShop?.length > 0) {
        console.log(data.productByShop);
        setListProduct(data.productByShop);
      }
    };
    fetch();
  }, []);

  return (
    <>
      <div className="product_maybe_like">
        <div style={{ paddingTop: 7 }}></div>
        <div className="product_maybe_title uppercase">
          <h5>các sản phẩm khác của shop</h5>
        </div>
        <div>
          {listProduct && (
            <div className="home_like_product">
              <div className="home_default  home_products">
                {console.log(listProduct)}
                <RenderProducts products={listProduct} />
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="product_maybe_like">
        <div style={{ paddingTop: 7 }}></div>
        <div className="product_maybe_title uppercase">
          <h5>có thể bạn cũng thích</h5>
        </div>
        <div>
          {listProduct && (
            <div className="home_like_product">
              <div className="home_default  home_products">
                {console.log(listProduct)}
                <RenderProducts products={listProduct} />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
});

export default ProductMaybeLike;
