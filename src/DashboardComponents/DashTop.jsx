import React from "react";
import { AiFillPieChart } from "react-icons/ai";
import { HiUsers } from "react-icons/hi";
import { RiShoppingBag3Fill } from "react-icons/ri";

const DashTop = () => {
  return (
    <>
      <div className="col-lg-4 col-md-6">
        <div className="heading2 card-5 ">
          <div className="d-flex">
            <AiFillPieChart className="icons3" />
            <div>
              <p className="text-secondary  bold mt-3">Revenue</p>
              <h5 className=" bold margin-top overflow-hidden">$21,456</h5>
            </div>
          </div>
          <p className="mx-2 mt-5 text-success">+2.65%</p>
        </div>
      </div>
      <div className="col-lg-4 col-md-6">
        {" "}
        <div className="heading2 card-5 ">
          <div className="d-flex">
            <RiShoppingBag3Fill className="icons3" />
            <div>
              <p className="text-secondary bold mt-3">Order</p>
              <h5 className=" bold margin-top overflow-hidden">5,643</h5>
            </div>
          </div>
          <p className="mx-2 mt-5 text-danger">-0.82%</p>
        </div>
      </div>
      <div className="col-lg-4 col-md-6">
        {" "}
        <div className="heading2 card-5 ">
          <div className="d-flex">
            <HiUsers className="icons3" />
            <div>
              <p className="text-secondary bold mt-3">Customers</p>
              <h5 className="bold margin-top overflow-hidden">45,254</h5>
            </div>
          </div>
          <p className="mx-2 mt-5 text-danger">-1.04%</p>
        </div>
      </div>
    </>
  );
};

export default DashTop;
