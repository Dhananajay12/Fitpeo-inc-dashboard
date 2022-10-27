import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
import { MdOutlineDashboard } from "react-icons/md";
import {
  AiOutlineUp,
  AiOutlineDown,
  AiOutlineFileDone,
  AiOutlineMail,
  AiOutlineProject,
  AiOutlineWifi,
  AiOutlineEdit,
} from "react-icons/ai";
import { FiUserCheck, FiCodesandbox, FiLayers } from "react-icons/fi";
import { BsCalendar4Range, BsChatDots } from "react-icons/bs";
export const SidebarData = [
  {
    title: "Dashboard",
    path: "/",
    icon: <MdOutlineDashboard />,
    iconClosed: <AiOutlineDown />,
    iconOpened: <AiOutlineUp />,

    subNav: [
      {
        title: "Ecommerce",
        path: "/Dashboard",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Saas",
        path: "/",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Crypto",
        path: "/",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
];

export const SlideBarDataA = [
  {
    title: "Calender",
    path: "/",
    icon: <BsCalendar4Range />,
  },
  {
    title: "Chat",
    path: "/",
    icon: <BsChatDots />,
  },
  {
    title: "File Manager",
    path: "/",
    icon: <AiOutlineFileDone />,
  },
  {
    title: "Ecommerce",
    path: "/",
    icon: <RiIcons.RiShoppingBag3Line />,
    iconClosed: <AiOutlineDown />,
    iconOpened: <AiOutlineUp />,

    subNav: [
      {
        title: "Ecommerce1",
        path: "/",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Ecommerce 2",
        path: "/",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Ecommerce 3",
        path: "/",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },

  {
    title: "Email",
    path: "/",
    icon: <AiOutlineMail />,

    iconClosed: <AiOutlineDown />,
    iconOpened: <AiOutlineUp />,

    subNav: [
      {
        title: "Email 1",
        path: "/",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Email 2",
        path: "/",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },

  {
    title: "Invoices",
    path: "/",
    icon: <FaIcons.FaEnvelopeOpenText />,

    iconClosed: <AiOutlineDown />,
    iconOpened: <AiOutlineUp />,

    subNav: [
      {
        title: "Invoices 1",
        path: "/",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Invoices 2",
        path: "/",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },

  {
    title: "Projects",
    path: "/",
    icon: <AiOutlineProject />,
    iconClosed: <AiOutlineDown />,
    iconOpened: <AiOutlineUp />,

    subNav: [
      {
        title: "Projects 1",
        path: "/m",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: "Contacts",
    path: "/",
    icon: <AiOutlineWifi />,

    iconClosed: <AiOutlineDown />,
    iconOpened: <AiOutlineUp />,

    subNav: [
      {
        title: "Contacts 1",
        path: "/",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
];
export const SlideBarDataP = [
  {
    title: "Authentication",
    path: "/",
    icon: <FiUserCheck />,
  },
  {
    title: "Utility",
    path: "/",
    icon: <FiCodesandbox />,
    iconClosed: <AiOutlineDown />,
    iconOpened: <AiOutlineUp />,

    subNav: [
      {
        title: "Utility1",
        path: "/",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Utility2",
        path: "/",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
];

export const SlideBarDataC = [
  {
    title: "UL elements",
    path: "/",
    icon: <FiLayers />,
    iconClosed: <AiOutlineDown />,
    iconOpened: <AiOutlineUp />,
    subNav: [
      {
        title: "elements1",
        path: "/",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "elements2",
        path: "/overview/revenue",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: "Form",
    path: "/",
    icon: <AiOutlineEdit />,
    iconClosed: <AiOutlineDown />,
    iconOpened: <AiOutlineUp />,

    subNav: [
      {
        title: "Form1",
        path: "/",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Form2",
        path: "/overview/revenue",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
];
