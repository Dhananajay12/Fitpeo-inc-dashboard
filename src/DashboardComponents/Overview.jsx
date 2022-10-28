import React, { useState } from "react";
import { AiOutlineDown } from "react-icons/ai";
import ColumChat from "../components/ColumChat";

const Overview = () => {
  const [isShown, setIsShown] = useState(false);

  const [yearly, setYearly] = useState(false);

  const handleClicks = (e) => {
    setYearly((current) => !current);
  };
  const handleClick = (e) => {
    setIsShown((current) => !current);
  };
  return (
    <>
      <div className="padding2  ">
        <div className="heading">
          <p className="bold">Overview</p>
          <p className="bold">
            Sort By :
            <span
              onClick={handleClick}
              className="mx-2"
              style={{ cursor: "pointer" }}
            >
              {yearly ? "Yearly" : "Month"}

              <AiOutlineDown />
            </span>
            {isShown && (
              <ul className="edit-info card-5">
                <li className="mt-1 pointer" onClick={handleClicks}>
                  {yearly ? "Month" : "Yearly"}
                </li>
              </ul>
            )}
          </p>
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
    </>
  );
};

export default Overview;
