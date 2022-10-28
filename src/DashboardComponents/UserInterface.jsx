import React from "react";
import { BsInfoCircle } from "react-icons/bs";
import SemiCircleProgressBar from "react-progressbar-semicircle";
import girl from "../image/g.jpg";

const UserInterface = () => {
  return (
    <>
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
            <BsInfoCircle className="light-text" style={{ fontSize: "18px" }} />
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
    </>
  );
};

export default UserInterface;
