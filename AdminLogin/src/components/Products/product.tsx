import React, { useEffect, useState } from "react";
import "../Products/product.css";
import { printLog } from "../Button";

interface ProductProps {
  products: any[]; // Update the type of 'products' here
  prizeList: [];
}
const { log, error } = console;

const product = (prop: any) => {
  console.log("prop", prop);
  const {
    type = "text",
    value = "",
    onChange = () => {},
    onBlur = () => {},
    onKeyPress = () => {},
  } = prop;
  printLog("fsd", "fsdf");
  let [obj, setObj] = useState({ a: 1, b: 2 });

  useEffect(() => {
    testing();
  }, []);

  useEffect(() => {
    afterupdating();
  }, [obj]);

  const afterupdating = () => {
    console.log("after update", obj);
  };

  const testing = () => {
    console.log("before update");
    setObj((val) => {
      return { ...val, b: 5 };
    });
  };

  useEffect(() => {
    console.log(`props`, prop);
  }, [prop?.type]); // Fix typo here: prop?.products

  return (
    <>
      <div className="product-main-container">
        {prop.type?.length &&
          prop.type.map((x: any) => {
            return (
              <div key={x.id} className="product-container">
                <img
                  width="auto"
                  height={120}
                  src={x.thumbnail}
                  alt="Product"
                />
                <div className="product-details">
                  <div className="rating">
                    <span>Prize: ${x.price}</span>
                  </div>
                  <div className="add-to-cart">
                    <span>0</span>
                    <button className="add-to-card" type="button">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default product;
