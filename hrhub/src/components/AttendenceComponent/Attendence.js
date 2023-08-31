import {
  addDays,
  addWeeks,
  differenceInDays,
  endOfMonth,
  endOfWeek,
  startOfMonth,
  startOfWeek,
  subWeeks,
} from "date-fns";
import React, { useContext, useState } from "react";
import { BiSolidLeftArrow } from "react-icons/bi";
import { BiSolidRightArrow } from "react-icons/bi";
import { MdArrowRight } from "react-icons/md";
import { AttendenceContext } from "../../Context";

import "./attendence.css";

export default function Attendence() {
  const date = new Date();
  let firstDayOfWeek = startOfWeek(date);
  const endDayOfWeek = endOfWeek(date);
  const noWeekDays = 7;

  const [changeDayOfWeek, setChangeDayOfWeek] = useState(firstDayOfWeek);
  const [endChangeofWeek, setendChangeofWeek] = useState(endDayOfWeek);
  const [caltimeDiff, setTimeDifference] = useState(0);

  const contextData = useContext(AttendenceContext);

  const calTimeGap = () => {
    if (contextData.checkTimeLabel === "Last Out : ") {
    }
  };
  calTimeGap();

  const nextWeek = () => {
    let nextWeekFirstDay = startOfWeek(addWeeks(changeDayOfWeek, 1));
    setChangeDayOfWeek(nextWeekFirstDay);
  };

  const previousweek = () => {
    let previousWeekFirstDay = startOfWeek(subWeeks(changeDayOfWeek, 1));
    setChangeDayOfWeek(previousWeekFirstDay);
  };

  const weekDays = Array.from({ length: noWeekDays }).map((_, index) =>
    addDays(changeDayOfWeek, index + 1)
  );

  return (
    <div className="attendence-container">
      <div className="attendence-header">
        <small>
          Attendence{" "}
          <span>
            <MdArrowRight /> Attendence{" "}
          </span>
        </small>
        <div className="attendenece-btn">
          <button className="attendence-req-btn">Request Attendence</button>
          <button className="attendence-exp-btn">Export</button>
        </div>
      </div>
      <div>
        <p className="attendence-para">
          Justify the attendance on Late, Early Left and Short Total Time for a
          day. You can justify your Late by clicking the Justify option under
          the first punch. You can justify your Early Left by clicking the
          Justify option under your Last punch. You can justify your Short Total
          Time by clicking the Justify option under the Total time. You can also
          request for your missed punch by clicking the Request Punch option.
        </p>
        <div className="attendence-navigators">
          <BiSolidLeftArrow onClick={previousweek} />
          <span>{`${addDays(changeDayOfWeek, 1).toDateString()}-${addDays(
            endOfWeek(changeDayOfWeek),
            1
          ).toDateString()}`}</span>
          <BiSolidRightArrow onClick={nextWeek} />
        </div>
      </div>
      <div className="attendence-calender">
        <div>
          <div className="attendence-calender-header">
            <p>Date</p>
            <p>Hours</p>
            <p>Total</p>
          </div>
        </div>
        <div>
          <div className="attendence-dates">
            {weekDays.map((eachDay, index) => (
              <>
                <ul className="attendence-list-container">
                  <li key={index} className="attendence-list">
                    <p>
                      {eachDay.toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                        weekday: "short",
                      })}
                    </p>
                    <progress value="100" max="100"></progress>
                    <p>9:20</p>
                  </li>
                </ul>
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
