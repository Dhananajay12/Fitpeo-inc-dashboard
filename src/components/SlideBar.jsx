import React, { useState } from "react";
import { FaBars } from "react-icons/fa";

import {
  SidebarData,
  SlideBarDataA,
  SlideBarDataC,
  SlideBarDataP,
} from "./SideBarData";
import SubMenu from "./SubMenu";
const SideBar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const [subnav, setSubnav] = useState(false);
  const showSubnav = () => setSubnav(!subnav);

  return (
    <div
      style={{ width: isOpen ? "300px" : "60px" }}
      className="sidebar overflow-hidden"
    >
      <div className="top_section">
        <h1
          style={{ display: isOpen ? "block" : "none" }}
          className="logo overflow-hidden"
        >
          CompanyNa
        </h1>

        <div style={{ marginLeft: isOpen ? "40px" : "0px" }} className="bars">
          <FaBars onClick={toggle} />
        </div>
      </div>

      <p className="small-text mt-4">MENU </p>
      {SidebarData.map((item, index) => {
        return (
          <SubMenu
            item={item}
            key={index}
            isOpen={isOpen}
            className="overflow-hidden"
          />
        );
      })}

      <p className="small-text" style={{ display: isOpen ? "block" : "none" }}>
        APPLICATIONS{" "}
      </p>

      {SlideBarDataA.map((item, index) => {
        return <SubMenu item={item} key={index} isOpen={isOpen} />;
      })}

      <p className="small-text" style={{ display: isOpen ? "block" : "none" }}>
        LAYOUTS{" "}
      </p>
      <p className="small-text" style={{ display: isOpen ? "block" : "none" }}>
        PAGES{" "}
      </p>
      {SlideBarDataP.map((item, index) => {
        return <SubMenu item={item} key={index} isOpen={isOpen} />;
      })}
      <p className="small-text" style={{ display: isOpen ? "block" : "none" }}>
        COMPONENTS{" "}
      </p>
      {SlideBarDataC.map((item, index) => {
        return <SubMenu item={item} key={index} isOpen={isOpen} />;
      })}
      <main>{children}</main>
    </div>
  );
};

export default SideBar;
