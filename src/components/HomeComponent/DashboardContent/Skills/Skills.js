import React, { useState } from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import { AiFillStar } from "react-icons/ai";
import { nanoid } from 'nanoid'

import "./skills.css";
import { set } from "date-fns";

export default function Skills() {
  const [inputstate, SetInput] = useState("");
  const [isFocused, SetIsFocused] = useState(false);
  const [dataArray, setdataArray] = useState([
    {
      id: nanoid(),
      text: "",
      rating: 0,
    },
  ]);
  
  const handleChange = (event) => {
    SetInput(event.target.value);
  };

  const handleDelete = (uniqueid) => {
    // console.log(uniqueid)
    let updatedArr = dataArray.filter((eachele)=>{return (eachele.id!==uniqueid)})
    setdataArray(updatedArr)
  };
  function saveInput(index) {
    const updatedArr = [...dataArray];
    if (updatedArr.length - 1 === index) {
      updatedArr[index].text = inputstate;
      updatedArr.push({id:nanoid(),text: "", rating: 0 });
      setdataArray(updatedArr);
      
    } else {
      updatedArr[index].text = inputstate;
      setdataArray(updatedArr);
     
    }
  }

  const removeInput = (index) => {
    const clickedData = [...dataArray];
    clickedData[index].text = "";
  };

  const handleStar = (index, starIndex) => {
    console.log(index,starIndex);
    const updatedArr = [...dataArray];
    console.log(updatedArr)
    updatedArr[index].rating = starIndex;
    setdataArray(updatedArr);
  };

  return (
    <div className="skills">
      <h3>Skills</h3>
      {dataArray.map((eachEle,index) => {
        const uniqueid = eachEle.id;
        return(
          <div className="skills-section" key={uniqueid} >
            <input
              type="text"
              className={`skills-input ${isFocused ? "skills-focused" : ""}`}
              placeholder="empty"
              onChange={handleChange}
              onFocus={() => SetIsFocused(true)}
              onBlur={() => SetIsFocused(false)}
              // value={eachEle.text}
            />
            <div className="skills-star-section">
              {[0, 1, 2, 3].map((starIndex) => {
                const currentRating = starIndex + 1;
                return (
                  <label key={`${uniqueid}th-index-${starIndex}th-star`}>
                    <input
                      type="radio"
                      name="rating"
                      value={currentRating}
                      onClick={() => handleStar(index, currentRating)}
                    />
                    {
                      <AiFillStar
                      className="skills-star"
                      color={
                        currentRating <= dataArray[index].rating
                          ? "#005580"
                          : "#AEC9DF"
                      }
                    /> }
                  </label>
                );
              })}
            </div>
            <span>
              <RiDeleteBin5Line
                className="skills-delete-icon"
                onClick={() => handleDelete(uniqueid)}
              />
            </span>
            {isFocused && (
              <div className="save-btn">
                <button
                  className="right-btn"
                  onMouseDown={() => saveInput(index)}
                >
                  &#10004;{" "}
                </button>
                <button
                  className="cross-btn"
                  onMouseDown={() => removeInput(uniqueid)}
                >
                  &#10799;
                </button>
              </div>
            )}
          </div>
        )
      }
      )}
    </div>
  );
}
