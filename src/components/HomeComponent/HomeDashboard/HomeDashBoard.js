import React, { useContext, useState } from "react";
import "./dashboard.css";
import { Link } from "react-router-dom";
import { AttendenceContext } from "../../../Context";

const navItems = [
  { id: "profile", label: "Profile" },
  { id: "details", label: "Details" },
  { id: "skills", label: "Skills" },
  { id: "documents", label: "Documents" },
  { id: "education", label: "Educational Details" },
  { id: "bank", label: "Bank" },
  { id: "family", label: "Family" },
];

export default function HomeDashBoard() {
  const [activeTab, setActiveTab] = useState(null);
  const {theme} = useContext(AttendenceContext)
  const handleBtn = (clickedElement) => {
    setActiveTab(clickedElement);
  };
  return (
    <main className="home-component">
      <aside className={`${theme?"dark-theme":"home-container"}`}>
        <nav className="home-nav">
          <ul>
            {navItems.map((eachItem) => (
              <li
                key={eachItem.id}
                className={`home-nav-list ${
                  activeTab === eachItem.id ? "active-tab" : ""
                } `}
              >
                <Link
                  to={eachItem.id}
                  className="home-nav-link"
                  onClick={() => handleBtn(eachItem.id)}
                >
                  {eachItem.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </main>
  );
}
