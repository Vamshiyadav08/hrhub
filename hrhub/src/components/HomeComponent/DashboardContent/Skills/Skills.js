import React, { useState } from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import { AiFillStar } from "react-icons/ai";
import { db } from "../../../../firebaseConfig";
import { doc, setDoc } from "firebase/firestore";

import "./skills.css";

export default function Skills() {
  const [inputstate, SetInput] = useState("");
  const [isFocused, SetIsFocused] = useState(false);
  const [dataArray, setdataArray] = useState([
    {
      text: "",
      rating: 0,
    },
  ]);

  const handleChange = (event) => {
    SetInput(event.target.value);
  };

  const handleDelete = (index) => {
    console.log(index);
    let updatedArr = dataArray.filter((eachele, i) => i !== index);
    setdataArray(updatedArr);
  };

  function saveInput(index) {
    const updatedArr = [...dataArray];
    if (updatedArr.length - 1 === index) {
      updatedArr[index].text = inputstate;

      updatedArr.push({ text: "", rating: 0 });
      setdataArray(updatedArr);
      // SetInput('');
    } else {
      updatedArr[index].text = inputstate;
      setdataArray(updatedArr);
      //  SetInput('');
    }
  }

  const removeInput = (index) => {
    const clickedData = [...dataArray];
    clickedData[index].text = "";
  };

  const handleStar = (index, starIndex) => {
    console.log(index, starIndex);
    const updatedArr = [...dataArray];
    updatedArr[index].rating = starIndex;
    setdataArray(updatedArr);
  };
  // console.log(dataArray,"final array")

  return (
    <div className="skills">
      <h3>Skills</h3>

      {dataArray.map((eachEle, index) => (
        <div className="skills-section" key={index}>
          <input
            type="text"
            className={`skills-input ${isFocused ? "skills-focused" : ""}`}
            placeholder="empty"
            onChange={handleChange}
            onFocus={() => SetIsFocused(true)}
            onBlur={() => SetIsFocused(false)}
          />
          <div className="skills-star-section">
            {[0, 1, 2, 3].map((starIndex) => {
              const currentRating = starIndex + 1;
              return (
                <label key={`${index}th-index-${starIndex}th-star`}>
                  <input
                    type="radio"
                    name="rating"
                    value={currentRating}
                    onClick={() => handleStar(index, currentRating)}
                  />
                  <AiFillStar
                    className="skills-star"
                    color={
                      currentRating <= dataArray[index].rating
                        ? "#005580"
                        : "#AEC9DF"
                    }
                  />
                </label>
              );
            })}
          </div>
          <span>
            <RiDeleteBin5Line
              className="skills-delete-icon"
              onClick={() => handleDelete(index)}
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
                onMouseDown={() => removeInput(index)}
              >
                &#10799;
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
