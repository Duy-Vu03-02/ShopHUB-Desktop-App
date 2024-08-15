import React from "react";
import ProductMain from "../components/product/ProductMain";
import ProductDetail from "../components/product/ProductDetail";
import ProductReview from "../components/product/ProductReview";
import ProductMaybeLike from "../components/product/ProductMaybeLike";
import ProdcutBanner from "../components/product/ProductBanner";
import HomeIntroduce from "../components/home/HomeIntroduce";
import "../../resources/product.css";
import ProductShopper from "../components/product/ProductShopper";

const Product = React.memo(() => {
  return (
    <>
      <div className="product-all-page">
        <ProdcutBanner />
        <ProductMain />
        <ProductShopper />
        <ProductDetail />
        <ProductReview />
        <ProductMaybeLike />
        <HomeIntroduce />
      </div>
    </>
  );
});

export default Product;
