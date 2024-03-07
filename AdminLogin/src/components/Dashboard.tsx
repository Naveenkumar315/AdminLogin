import React, { useEffect, useState } from "react";
import Product from "./Products/product";

const Dashboard = () => {
  let [products, setProduct]: any = useState({});
  useEffect(() => {
    console.log("Hello i am working...");
    getProducts();
    console.log("product", products);
  }, []);

  // https://fakestoreapi.com/products/
  const getProducts = () => {
    fetch("https://dummyjson.com/product?skip=0&limit=100")
      .then((res) => res.json())
      .then((json) => {
        setProduct((prev: any) => ({
          ...prev,
          product: json?.products,
        }));
        console.log(json);
        console.log("product", products);
      });
  };
  const namedFunction = (sd: number) => {
    console.log(sd);
  };
  const getProps = () => {
    let Object = {};
    if (true)
      Object = {
        type: products?.product,
        value: [],
        onChange: (sd: number) => {
          namedFunction(sd);
        },
        deliveryTime: [],
      };
    else Object = { test: [] };
    return Object;
  };
  return (
    <>
      <div style={{ height: "auto" }}>
        {/* <Product products={products?.product} prizeList={[1,2,3]} offers={[10]} deliveryTime={[543]} /> */}
        <Product {...getProps()} />
      </div>
    </>
  );
};

export default Dashboard;
