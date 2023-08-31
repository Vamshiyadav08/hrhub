import React, { useState } from "react";
import "./dashboard.css";
import { Link } from "react-router-dom";

export default function HomeDashBoard() {
    const [activeTab,setActiveTab] = useState(null)
    const handleBtn=(clickedElement)=>{
        setActiveTab(clickedElement)
    }
  return (
    <main className="home-component">
      <aside className="home-container">
        <nav className="home-nav">
          <ul>
            <li className={`home-nav-list ${activeTab==="profile"?"active-tab":""} `}>
              <Link to="/home/profile" className="home-nav-link" onClick={()=>handleBtn("profile")}>
                Profile
              </Link>
            </li>
            <li className={`home-nav-list ${activeTab==="details"?"active-tab":""} `}>
              <Link to="/home/details" className="home-nav-link" onClick={()=>handleBtn("details")}>
                Details
              </Link>
            </li>
            <li className={`home-nav-list ${activeTab==="skills"?"active-tab":""} `}>
              <Link to="/home/skills" className="home-nav-link" onClick={()=>handleBtn("skills")}>
                Skills
              </Link>
            </li>
            <li className={`home-nav-list ${activeTab==="documents"?"active-tab":""} `}>
              <Link to="/home/documents" className="home-nav-link" onClick={()=>handleBtn("documents")}>
                Documents
              </Link>
            </li>
            <li className={`home-nav-list ${activeTab==="education"?"active-tab":""} `}>
              <Link to="/home/education" className="home-nav-link" onClick={()=>handleBtn("education")}>
                Educational Details
              </Link>
            </li>
            <li className={`home-nav-list ${activeTab==="bank"?"active-tab":""} `}>
              <Link to="/home/Bank" className="home-nav-link" onClick={()=>handleBtn("bank")}>
                Bank
              </Link>
            </li>
            <li className={`home-nav-list ${activeTab==="family"?"active-tab":""} `}>
              <Link to="/home/family" className="home-nav-link" onClick={()=>handleBtn("family")}>
                Family
              </Link>
            </li>
            
          </ul>
        </nav>
      </aside>
    </main>
  );
}
