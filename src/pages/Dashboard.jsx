import React from "react";
import { FiSearch } from "react-icons/fi";
import { GrProjects } from "react-icons/gr";
import { BsInfoCircle } from "react-icons/bs";
import { FaRegBell } from "react-icons/fa";
import { RiSettings3Line, RiShoppingBag3Fill } from "react-icons/ri";
import ind from "../image/ind.jpg";
import girl from "../image/g.jpg";
import SemiCircleProgressBar from "react-progressbar-semicircle";
import { AiFillPieChart } from "react-icons/ai";
import { HiUsers } from "react-icons/hi";
import { ProductData } from "../data/DashboardData";

import LineChart from "../components/LineChart";

import PicChart2 from "../components/PicChart2";
import ColumChat from "../components/ColumChat";

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

          <p className="icons2 overflow-hidden">
            <FaRegBell style={{ fontSize: "24px" }} />
          </p>
          <p className="icons2">
            <RiSettings3Line style={{ fontSize: "25px" }} />
          </p>
          <p className="icons2">
            <img src={girl} alt="error" className="small-logo2" />
          </p>
        </div>
      </div>
      <div className="row" style={{ marginTop: "-1rem" }}>
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

          <div className="padding2">
            <div className="row card-5 border">
              <div className="padding2  ">
                <div className="heading">
                  <p className="bold">Overview</p>
                  <p className="bold">Sort By:</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                {" "}
                <p className="light-text">This Month</p>
                <div className="d-flex">
                  <h5 className="bold">$24,568</h5>
                  <p className="text-success mx-2">+2.65%</p>
                </div>
                <br></br>
                <div className="row mt-2">
                  <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6  border2">
                    <p className="light-text mx-2">
                      Orders<br></br>
                      <span className="bold2 ">5,643</span>{" "}
                    </p>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6  border2">
                    <p className="light-text mx-2">
                      Sales<br></br>
                      <span className="bold2 ">16,273</span>{" "}
                    </p>
                  </div>
                </div>
                <div className="row ">
                  <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6  border2 ">
                    <p className="light-text mx-2">
                      Order Value<br></br>
                      <span className="bold2 ">12.03%</span>{" "}
                    </p>
                  </div>
                  <div className="col-lg-6 col-md-6  col-sm-6  col-xs-6  border2">
                    <p className="light-text mx-2">
                      Customers<br></br>
                      <span className="bold2 ">21,457</span>{" "}
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6  col-md-6 col-sm-6  col-xs-6  border2">
                    <p className="light-text mx-2">
                      Income<br></br>
                      <span className="bold2 ">$35,652</span>{" "}
                    </p>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6  border2">
                    <p className="light-text mx-2">
                      Expenses<br></br>
                      <span className="bold2 ">$12,248</span>{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-8 col-md-6">
                <ColumChat />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6 mt-1">
              <div className="card-5 border">
                <div className="heading2  ">
                  <p className="bold">User Activity</p>
                  <p className="mx-2 light-text">Weekly</p>
                </div>
                <p className="light-text mx-2">
                  This Month <br></br>
                  <span className="bold2">16,543</span>
                </p>
                <LineChart className="overflow-hidden" />
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mt-1">
              {" "}
              <div className="card-5 border">
                <div className="heading2 ">
                  <p className="bold ">Order Status</p>
                  <p className="mx-2 light-text ">...</p>
                </div>
                <PicChart2 />
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mt-1">
              {" "}
              <div className="card-5 border">
                <div className="heading2  ">
                  <p className="bold">Top Product</p>
                  <p className="mx-2 light-text">Monthly</p>
                </div>

                {ProductData.map((product, index) => {
                  return (
                    <div className="heading2" key={index}>
                      <div className="d-flex">
                        <p className="icons4">{product.no}</p>
                        <div>
                          <p className="text-secondary  bold mt-2">
                            {product.item}
                          </p>
                          <p className=" bold margin-top overflow-hidden">
                            {product.doller}
                          </p>
                        </div>
                      </div>
                      <p className="mx-2 mt-4 bold overflow-hidden">
                        {" "}
                        {product.selas}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-12 mt-1">
          <div className=" card-5  border">
            <div className="background-img  overflow-hidden">
              <br></br>
            </div>
            <img src={girl} alt="error" className="small-photo" />
            <div className="center mt-3">
              <p className="bold ">
                Jennifer Bennett
                <br></br> <span className="light-text"> Product Designer </span>
              </p>
            </div>
            <br></br>
            <div className="d-flex row">
              <div className="col-md-6 col-sm-6 col-xs-6">
                <div className="center">
                  <p className="bold ">
                    1,269
                    <br></br> <span className="light-text"> Product</span>
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-sm-6 col-xs-6">
                <div className="center">
                  <p className="bold ">
                    5.2k
                    <br></br> <span className="light-text"> Followers</span>
                  </p>
                </div>
              </div>
            </div>

            <hr></hr>
            <div className="heading" style={{ padding: "4%" }}>
              <p className="bold">Earning</p>
              <p>
                <BsInfoCircle
                  className="light-text"
                  style={{ fontSize: "18px" }}
                />
              </p>
            </div>
            <div className="center " style={{ fontSize: "20px" }}>
              <SemiCircleProgressBar
                percentage={76}
                showPercentValue
                stroke="#3366ff"
                className=""
              />
              <br></br>
              <p className="bold">$26,256</p>
              <p className="light-text">Earning this Month</p>
              <p className="light-text">
                {" "}
                <span className="text-success mx-2">+2.65% </span> From previous
                period{" "}
              </p>
            </div>
            <hr></hr>
            <p className="mx-3 bold">Recent Activity</p>
            <div className="padding3">
              <div className="d-flex">
                <p className="bold mx-4">
                  <span className="mx-1"> 12 </span> <br></br>
                  <span className="light-text">Sep</span>
                </p>
                <div>
                  <p className=" light-text2  ">
                    Responded to need "Volunteer Activites"
                  </p>
                </div>
              </div>
              <div className="d-flex">
                <p className="bold mx-4">
                  <span className="mx-1"> 11 </span> <br></br>
                  <span className="light-text">Sep</span>
                </p>
                <div>
                  <p className=" light-text2  ">
                    Everyone realizes would be desirable
                  </p>
                </div>
              </div>
              <div className="d-flex">
                <p className="bold mx-4">
                  <span className="mx-1"> 10 </span> <br></br>
                  <span className="light-text">Sep</span>
                </p>
                <div>
                  <p className=" light-text2  ">
                    Joined the group "Boardmanship Forum"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
