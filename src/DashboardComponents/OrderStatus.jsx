import React from "react";
import PicChart2 from "../components/PicChart2";

const OrderStatus = () => {
  return (
    <>
      <div className="card-5 border">
        <div className="heading2 ">
          <p className="bold ">Order Status</p>
          <p className="mx-2 light-text ">...</p>
        </div>
        <PicChart2 />
      </div>
    </>
  );
};

export default OrderStatus;
