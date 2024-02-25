/***
 * GenderProducts Component renders basic HTML page layout based on the gender passed
 */

import React, { useState, useEffect } from "react";
import Head from "next/head";
import { Quote, Navbar, Footer, Trending } from "../../../components";
import { products } from "../../../utils/products";
import Spinner from "../../../utils/Spinner";
import ProductsListing from "../../../components/products/productListing/ProductsListing";

const GenderProducts = ({ gender }) => {
  const [productsArray, setProductsArray] = useState([]);
  const [productsLoading, setProductsLoading] = useState(false);

  useEffect(() => {
    setProductsLoading(true);
    setTimeout(() => {
      setProductsLoading(false);
      setProductsArray(products.filter((product) => product.gender === gender));
    }, 500);
  }, [gender]);

  return (
    <>
      <Head>
        <title>Grab.It - {gender === "men" ? "Men" : "Women"} Products</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      {productsLoading && <Spinner />}
      {!productsLoading && (
        <>
          <ProductsListing
            productsArray={productsArray}
            gender={gender === "men" ? "Men's" : "Women's"}
          />
          <Quote quote={"Forget the rules, if you like it, wear it."} />
          <Trending showTrending={true} />
          <Footer />
        </>
      )}
    </>
  );
};

export default GenderProducts;
