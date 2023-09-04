import { createContext, useState } from "react";

const AttendenceContext = createContext([]);

const AttendenceProvider = ({ children }) => {
  const [time, setTime] = useState("");
  const [hamburgerData,setHamburgerData] = useState("")
 

  const timeDetails = (timeDetails) => {
    setTime(timeDetails);
};
  const searchUserData =(userData)=>{
    console.log(userData,"jj")
  }
  const hamburgerContext=(btnClick)=>{
      setHamburgerData(btnClick)
  }

  return (
    <AttendenceContext.Provider value={{ timeDetails, time,searchUserData,hamburgerContext,hamburgerData }}>
      {children}
    </AttendenceContext.Provider>
  );
};
export { AttendenceContext, AttendenceProvider };
