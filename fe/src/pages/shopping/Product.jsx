import React from "react";
import ProductMain from "../../componments/product/ProductMain";
import ProductDetail from "../../componments/product/ProductDetail";
import ProductReview from "../../componments/product/ProductReview";
import ProductMaybeLike from "../../componments/product/ProductMaybeLike";
import ProdcutBanner from "../../componments/product/ProductBanner";
import HomeIntroduce from "../../componments/home/HomeIntroduce";
import "../../resources/product.css";
import ProductShopper from "../../componments/product/ProductShopper";

const Product = React.memo(() => {
  return (
    <>
      <div className="product-all-page">
        <ProdcutBanner />
        <ProductMain />
        <ProductShopper />
        <ProductDetail />
        {/* <ProductReview />
        <ProductMaybeLike /> */}
        <HomeIntroduce />
      </div>
    </>
  );
});

export default Product;
