import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { GrProjects } from "react-icons/gr";

import { FaRegBell } from "react-icons/fa";
import { RiSettings3Line } from "react-icons/ri";
import ind from "../image/ind.jpg";
import girl from "../image/g.jpg";
import Overview from "../DashboardComponents/Overview";
import UserInterface from "../DashboardComponents/UserInterface";
import DashTop from "../DashboardComponents/DashTop";
import UserActivity from "../DashboardComponents/UserActivity";
import OrderStatus from "../DashboardComponents/OrderStatus";
import TopProduct from "../DashboardComponents/TopProduct";

const Dashboard = () => {
  const [isShown, setIsShown] = useState(false);
  const [search, setsearch] = useState(false);
  const handleClickSe = (e) => {
    setsearch((current) => !current);
  };
  const handleClick = (e) => {
    setIsShown((current) => !current);
  };

  return (
    <div className="container-fluid padding2 color">
      <div className="heading3">
        <div className="left-side">
          <p className="font-size">Dashboard</p>
        </div>

        <div className="right-side">
          <p className="icons2">
            <FiSearch onClick={handleClickSe} />
          </p>
          <p>
            {search && (
              <input
                type="Search"
                name="search"
                className="input-feild"
                placeholder="Search"
              />
            )}
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
            <img
              src={girl}
              alt="error"
              className="small-logo2"
              onClick={handleClick}
            />
            {isShown && (
              <ul className="edit-info2 card-5">
                <li className=" pointer">Profile</li>
                <li className="mt-1 pointer">Logout</li>
              </ul>
            )}
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-9 ">
          <div className="row">
            <DashTop />
          </div>

          <div className="padding2">
            <div className="row card-5 border mt-1 " style={{ margin: "-5px" }}>
              <Overview />
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6 mt-1">
              <UserActivity />
            </div>
            <div className="col-lg-4 col-md-6 mt-1">
              <OrderStatus />
            </div>
            <div className="col-lg-4 col-md-6 mt-1">
              <TopProduct />
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-12 mt-1">
          <UserInterface />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
