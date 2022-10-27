import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SidebarLink = styled(Link)`
  display: flex;
  color: #e1e9fc;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  list-style: none;
  height: 27px;
  text-decoration: none;
  font-size: 15px;
  font-weight: 500;
  transition: 0.7s linear;
  &:hover {
    cursor: pointer;
  }
`;

const SidebarLabel = styled.span`
  margin-left: 10px;
  font-weight: 500;
  transition: 0.7s linear;
`;
const Slide = styled(Link)`
  transition: 0.7s linear;
`;
const DropdownLink = styled(Link)`
  height: 35px;
  padding-left: 2.8rem;
  font-weight: 500;
  display: flex;
  transition: 0.7s linear;
  align-items: center;
  text-decoration: none;
  color: #f5f5f5;
  font-size: 14px;

  &:hover {
    cursor: pointer;
  }
  &: @media (min-width: 800px) {
    font-size: 10px;
  }
`;

const SubMenu = ({ item, isOpen }) => {
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);

  return (
    <>
      <SidebarLink
        to={item.path}
        onClick={item.subNav && showSubnav}
        className="overflow-hidden"
      >
        <div>
          <p
            style={{
              display: "inline",

              color: subnav ? "white" : "grey",
            }}
          >
            {" "}
            {item.icon}{" "}
          </p>
          <SidebarLabel
            style={{
              display: isOpen ? "inline" : "none",
              color: subnav ? "white" : "grey",
            }}
          >
            {item.title}
          </SidebarLabel>
        </div>
        <div style={{ display: isOpen ? "inline" : "none", fontSize: "10px" }}>
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </div>
      </SidebarLink>

      {subnav &&
        item.subNav.map((item, index) => {
          return (
            <DropdownLink
              to={item.path}
              key={index}
              style={{ display: isOpen ? "" : "none" }}
            >
              <SidebarLabel>{item.title}</SidebarLabel>
            </DropdownLink>
          );
        })}
    </>
  );
};

export default SubMenu;
