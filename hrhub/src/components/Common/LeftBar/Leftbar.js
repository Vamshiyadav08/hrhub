import React, { useState } from "react";
import { AiFillDashboard } from "react-icons/ai";
import { AiFillHome } from "react-icons/ai";
import { BsFillAlarmFill } from "react-icons/bs";
import { FaUserShield } from "react-icons/fa";
import { AiFillCreditCard } from "react-icons/ai";
import { Link } from "react-router-dom";
import { FaCubes } from "react-icons/fa";
import { BsCash } from "react-icons/bs";
import { SlCalender } from "react-icons/sl";
import { BsHourglassSplit } from "react-icons/bs";
import { FaChalkboardTeacher } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { BiHistory } from "react-icons/bi";
import { FaBook } from "react-icons/fa";
import { BiEdit } from "react-icons/bi";

import "./leftbar.css";

export default function Leftbar() {
  const [activeTab, setActiveTab] = useState(null);

  const handleBtn = (clickedElement) => {
    console.log("clicked");
    setActiveTab(clickedElement);
  };

  return (
    <aside className="aside-container">
      <nav className="aside-nav">
        <ul>
          <li
            className={`aside-nav-list ${
              activeTab === "dashboard" ? "active-tab" : ""
            }`}
          >
            <Link
              to="/"
              className="aside-nav-link"
              onClick={() => handleBtn("dashboard")}
            >
              <span>
                <AiFillDashboard className="aside-nav-icon" />
              </span>
              DashBoard
            </Link>
          </li>
          <li
            className={`aside-nav-list ${
              activeTab === "myhome" ? "active-tab" : ""
            }`}
          >
            <Link
              to="/home/profile"
              className="aside-nav-link"
              onClick={() => handleBtn("myhome")}
            >
              <span>
                <AiFillHome className="aside-nav-icon" />
              </span>
              My Home
            </Link>
          </li>
          <li
            className={`aside-nav-list ${
              activeTab === "attendence" ? "active-tab" : ""
            }`}
          >
            <Link
              to="/attendence"
              className="aside-nav-link"
              onClick={() => handleBtn("attendence")}
            >
              <span>
                <BsFillAlarmFill className="aside-nav-icon" />
              </span>
              Attendence
            </Link>
          </li>
          <li
            className={`aside-nav-list ${
              activeTab === "leaves" ? "active-tab" : ""
            }`}
          >
            <Link
              className="aside-nav-link"
              onClick={() => handleBtn("leaves")}
            >
              <span>
                <FaUserShield className="aside-nav-icon" />
              </span>
              leaves
            </Link>
          </li>
          <li
            className={`aside-nav-list ${
              activeTab === "expence" ? "active-tab" : ""
            }`}
          >
            <Link
              className="aside-nav-link"
              onClick={() => handleBtn("expence")}
            >
              <span>
                <AiFillCreditCard className="aside-nav-icon" />
              </span>
              Expence
            </Link>
          </li>
          <li
            className={`aside-nav-list ${
              activeTab === "compensation" ? "active-tab" : ""
            }`}
          >
            <Link
              className="aside-nav-link"
              onClick={() => handleBtn("compensation")}
            >
              <span>
                <BsCash className="aside-nav-icon" />
              </span>
              Compensation
            </Link>
          </li>
          <li
            className={`aside-nav-list ${
              activeTab === "assets" ? "active-tab" : ""
            }`}
          >
            <Link
              className="aside-nav-link"
              onClick={() => handleBtn("assets")}
            >
              <span>
                <FaCubes className="aside-nav-icon" />
              </span>
              Assets
            </Link>
          </li>
          <li
            className={`aside-nav-list ${
              activeTab === "timesheet" ? "active-tab" : ""
            }`}
          >
            <Link
              className="aside-nav-link"
              onClick={() => handleBtn("timesheet")}
            >
              <span>
                <SlCalender className="aside-nav-icon" />
              </span>
              Time Sheet
            </Link>
          </li>
          <li
            className={`aside-nav-list ${
              activeTab === "letsarchieve" ? "active-tab" : ""
            }`}
          >
            <Link
              className="aside-nav-link"
              onClick={() => handleBtn("letsarchieve")}
            >
              <span>
                <BsHourglassSplit className="aside-nav-icon" />
              </span>
              Lets Archive
            </Link>
          </li>
          <li
            className={`aside-nav-list ${
              activeTab === "training" ? "active-tab" : ""
            }`}
          >
            <Link
              className="aside-nav-link"
              onClick={() => handleBtn("training")}
            >
              <span>
                <FaChalkboardTeacher className="aside-nav-icon" />
              </span>
              Training
            </Link>
          </li>
          <li
            className={`aside-nav-list ${
              activeTab === "forms" ? "active-tab" : ""
            }`}
          >
            <Link
              className="aside-nav-link"
              onClick={() => handleBtn("forms")}
            >
              <span>
                <BiEdit className="aside-nav-icon" />
              </span>
              Forms
            </Link>
          </li>
          <li
            className={`aside-nav-list ${
              activeTab === "policies" ? "active-tab" : ""
            }`}
          >
            <Link
              className="aside-nav-link"
              onClick={() => handleBtn("policies")}
            >
              <span>
                <FaBook className="aside-nav-icon" />
              </span>
              Policies
            </Link>
          </li>
          <li
            className={`aside-nav-list ${
              activeTab === "calender" ? "active-tab" : ""
            }`}
          >
            <Link
              className="aside-nav-link"
              onClick={() => handleBtn("calender")}
            >
              <span>
                <SlCalender className="aside-nav-icon" />
              </span>
              Calender
            </Link>
          </li>
          <li
            className={`aside-nav-list ${
              activeTab === "organizationchart" ? "active-tab" : ""
            }`}
          >
            <Link
              to="/organizationchart"
              className="aside-nav-link"
              onClick={() => handleBtn("organizationchart")}
            >
              <span>
                <FaUsers className="aside-nav-icon" />
              </span>
              Organizational Chart
            </Link>
          </li>
          <li
            className={`aside-nav-list ${
              activeTab === "History" ? "active-tab" : ""
            }`}
          >
            <Link
              className="aside-nav-link"
              onClick={() => handleBtn("History")}
            >
              <span>
                <BiHistory className="aside-nav-icon" />
              </span>
              History
            </Link>
          </li>
          <li
            className={`aside-nav-list ${
              activeTab === "admin" ? "active-tab" : ""
            }`}
          >
            <Link to="/admin"
              className="aside-nav-link"
              onClick={() => handleBtn("admin")}
            >
              <span>
                <BiHistory className="aside-nav-icon" />
              </span>
              Admin
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
