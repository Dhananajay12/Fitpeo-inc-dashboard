import React from "react";
import { AiOutlineDown } from "react-icons/ai";
import { ProductData } from "../data/DashboardData";

const TopProduct = () => {
  return (
    <>
      {" "}
      <div className="card-5 border">
        <div className="heading2  ">
          <p className="bold">Top Product</p>
          <p className="mx-2 light-text">
            Monthly <AiOutlineDown />
          </p>
        </div>

        {ProductData.map((product, index) => {
          return (
            <div className="heading2" key={index}>
              <div className="d-flex">
                <p className="icons4">{product.no}</p>
                <div>
                  <p className="text-secondary  bold mt-2">{product.item}</p>
                  <p className=" bold margin-top overflow-hidden">
                    {product.doller}
                  </p>
                </div>
              </div>
              <p className="mx-2 mt-4 bold overflow-hidden"> {product.selas}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default TopProduct;
