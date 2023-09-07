import React,{useEffect,useState,useContext} from "react";
import "./family.css";
import { AttendenceContext } from "../../../../Context";

export default function Family() {
  const handleInput = () => {};
  const [themeval,setthemestate]= useState(localStorage.getItem("themeVal"))
  const {theme} = useContext(AttendenceContext)
  
  useEffect(()=>{
    let themee = localStorage.getItem("themeVal")
    setthemestate(themee)
  },[theme])

  return (
    <div>
      <h3>Bank Account Details</h3>
      <form>
        <div className="bank-input-container">
          <label htmlFor=""className={`${themeval==="true"?"label-dark":"family-label"}`}>
            Name
            <span className="valid-check">*</span>
          </label>
          <input
            type="text"
            name="bank-name"
            className="family-input"
            onChange={() => handleInput}
            placeholder="Name"
          />
        </div>
        <div className="family-input-container">
          <label htmlFor=""className={`${themeval==="true"?"label-dark":"family-label"}`}>
            RelationShip
            <span className="valid-check">*</span>
          </label>
          <input
            type="text"
            name="account-no"
            className="family-input"
            onChange={() => handleInput}
            placeholder="RelationShip"
          />
        </div>
        <div className="family-input-container">
          <label htmlFor=""className={`${themeval==="true"?"label-dark":"family-label"}`}>
            Date Of Birth
          </label>
          <input
            type="text"
            name=""
            className="family-input"
            onChange={() => handleInput}
            placeholder="Date Of Birth"
          />
        </div>
        <div className="family-input-container">
          <label htmlFor=""className={`${themeval==="true"?"label-dark":"family-label"}`}>
            Gender
          </label>
          <input
            type="text"
            name="branch"
            className="family-input"
            onChange={() => handleInput}
            placeholder="Gender"
          />
        </div>
        <div className="family-input-container">
          <label htmlFor=""className={`${themeval==="true"?"label-dark":"family-label"}`}>
            Occupation
          </label>
          <input
            type="text"
            name="branch"
            className="family-input"
            onChange={() => handleInput}
            placeholder="Occupation"
          />
        </div>
        <div className="family-input-container">
          <label htmlFor=""className={`${themeval==="true"?"label-dark":"family-label"}`}>
            Phone #
          </label>
          <input
            type="text"
            name="branch"
            className="family-input"
            onChange={() => handleInput}
            placeholder="Phone#"
          />
        </div>
        <div className="family-input-container">
          <label htmlFor=""className={`${themeval==="true"?"label-dark":"family-label"}`}>
            Address
          </label>
          <textarea rows="5" cols="20" name="adress" className="family-input" />
        </div>
        <div>
          <button className="family-btn">Add Details</button>
          <button className="family-reset-btn">Reset</button>
        </div>
      </form>
    </div>
  );
}
