import { createContext, useState } from "react";

const AttendenceContext = createContext([]);

const AttendenceProvider = ({ children }) => {
  const [time, setTime] = useState("");
 

  const timeDetails = (timeDetails) => {
    setTime(timeDetails);
};
  const searchUserData =(userData)=>{
    console.log(userData,"jj")
  }

  return (
    <AttendenceContext.Provider value={{ timeDetails, time,searchUserData }}>
      {children}
    </AttendenceContext.Provider>
  );
};
export { AttendenceContext, AttendenceProvider };
