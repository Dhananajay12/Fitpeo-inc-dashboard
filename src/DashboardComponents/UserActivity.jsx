import React from "react";
import { AiOutlineDown } from "react-icons/ai";
import LineChart from "../components/LineChart";

const UserActivity = () => {
  return (
    <>
      <div className="card-5 border">
        <div className="heading2  ">
          <p className="bold">User Activity</p>
          <p className="mx-2 light-text">
            Weekly <AiOutlineDown />
          </p>
        </div>
        <p className="light-text mx-2">
          This Month <br></br>
          <span className="bold2">16,543</span>
        </p>
        <LineChart className="overflow-hidden " />
      </div>
    </>
  );
};

export default UserActivity;
