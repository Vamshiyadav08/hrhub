import React, { useEffect, useState, useContext } from "react";
import { useAsyncError, useNavigate } from "react-router-dom";
import {db} from "../../../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";



import "./topbar.css";
import { AiOutlineSearch } from "react-icons/ai";
import {BiSolidDownArrow} from "react-icons/bi";
import { AttendenceContext } from "../../../Context";

export default function Topbar() {
  //changing the classname using setisfocused to perform styles
  const [isFocused, setIsFocused] = useState(false);
  const [CheckIn, setCheckIn] = useState(false);
  const [showDropdown ,setdropdown] =useState(false);
  const [searchInput,setSearchInput] = useState("")

  const contextData = useContext(AttendenceContext);

  const [time, setTime] = useState("");

  const handleTimeIn = () => {
    const now = new Date();
    let checkTimeLabel;
    const time = now.toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
    if (time === "" && checked == false) {
      checkTimeLabel = "";
    }
    let checked = !CheckIn;
    if (checked) {
      checkTimeLabel = "Last In : ";
    }
    if (checked === false) {
      checkTimeLabel = "Last Out : ";
    }

    let timeString = checkTimeLabel + time;
    setTime(timeString);
    contextData.timeDetails({
      now,
      checkTimeLabel,
    });
    setCheckIn(checked);
  };

  const handledropdown=()=>{
    setdropdown(!showDropdown)
  }
  const handleLogout=async()=>{
  }
  let navigate = useNavigate();

  const navigateToProfile = () => {
    navigate("./home/profile");
  };
  
  const getData=async()=>{
    const querySnapshot = await getDocs(collection(db, "companyusers"));
    const data = [];
    querySnapshot.forEach((doc) => {
      data.push({ id: doc.id, ...doc.data() }); 
    });
    
    contextData.searchUserData(
     data,searchInput
    );
  }
  
  const handleInput=(event)=>{
    setSearchInput(event.target.value)
    if(event.key ==="Enter"){
      getData()
    }
  }
 
 
  return (
    <header className="header">
      <div className="header-logo">
        <img
          className="topbar-logo"
          src={require("../../../assests/images/hrstop.png")}
          alt="actualize"
          onClick={navigateToProfile}
        />
      </div>
      <div className="topbar-container">
        <div>
          <img
            className="topbar-actualize-logo"
            src={require("../../../assests/images/Logo.jpg")}
            alt="actualize"
          />
        </div>
        <div className={`search-container ${isFocused ? "focused" : ""}`}>
          <AiOutlineSearch className="search-icon" />
          <input
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            type="search"
            className={`search-bar ${isFocused ? "focused" : ""}`}
            name="search"
            placeholder="Search Employee"
            onKeyDown={handleInput}
         
          />
        </div>
        <div className="topbar-btn-container">
          <button className="topbar-btn" onClick={handleTimeIn}>
            {CheckIn ? "Time Out" : "Time In"}
          </button>

          <span className="topbar-btn-checkLabel">{time}</span>
        </div>
        <div className="profile-topbar-container">
          <div>
            <img
              alt="profile"
              className="profile-topbar-image"
              src="https://cdn1.iconfinder.com/data/icons/user-pictures/100/unknown-512.png"
            />
            <div className="profile-topbar-details">
              <h4>Vamshi Thotakuri</h4>
              <span>Associate SharePointDeveloper</span>
            </div>
            <div className="arrow-icon">
              <BiSolidDownArrow className={`arrow ${showDropdown ? "up" : "down"}`} onClick={handledropdown}/>
            </div>
          </div>
          {showDropdown && (
            <div className="dropdown">
              <div className="dropdown-item" onClick={navigateToProfile}>
                Profile
              </div>
              <div className="dropdown-item" onClick={handleLogout}>
                Logout
              </div>
            </div>
          )}
        </div>
        
      </div>
    </header>
  );
}
