import React from "react";
import { FiSearch } from "react-icons/fi";
import { GrProjects } from "react-icons/gr";
import { FaRegBell } from "react-icons/fa";
import { RiSettings3Line, RiShoppingBag3Fill } from "react-icons/ri";
import ind from "../image/ind.jpg";
import boy from "../image/g.jpg";
import { AiFillPieChart } from "react-icons/ai";
import { HiUsers } from "react-icons/hi";

const Dashboard = () => {
  return (
    <div className="container-fluid padding2 color">
      <div className="heading">
        <div className="left-side">
          <p className="font-size">Dashboard</p>
        </div>

        <div className="right-side">
          <p className="icons2">
            <FiSearch />
          </p>
          <p className="icons2">
            <img src={ind} alt="error" className="small-logo" />
          </p>

          <p className="icons2">
            <GrProjects />
          </p>

          <p
            className="icons2 overflow-hidden"
            // style={{ display: "flex", marginTop: "0.4rem" }}
          >
            <FaRegBell style={{ fontSize: "24px" }} />
            {/* <p className="text">4</p> */}
          </p>
          <p className="icons2">
            <RiSettings3Line style={{ fontSize: "25px" }} />
          </p>
          <p className="icons2">
            <img src={boy} alt="error" className="small-logo2" />
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-9 ">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="heading2 card-5 ">
                <div className="d-flex">
                  <AiFillPieChart className="icons3" />
                  <div>
                    <p className="text-secondary  bold mt-3">Revenue</p>
                    <h5 className=" bold margin-top overflow-hidden">
                      $21,456
                    </h5>
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
          </div>
          <div className="padding2 card-5 mt-3 border">
            <div className="heading">
              <p className="bold">Overview</p>
              <p className="bold">Sort By:</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
