import { createContext, useState } from "react";
import { useNavigate} from "react-router-dom";

const AttendenceContext = createContext([]);

const AttendenceProvider = ({ children }) => {
  const [time, setTime] = useState("");
  const [hamburgerData,setHamburgerData] = useState("")
  const [searchData,setSerachData] =useState([])
  const navigate = useNavigate()
 

  const timeDetails = (timeDetails) => {
    setTime(timeDetails);
};
  const searchUserData =(userData,searchInput)=>{
   
    let searchedObj = userData.find((eachItem)=>{
      return (
        eachItem.name.includes(searchInput)
      )
    })
   setSerachData(searchedObj)
   if(searchedObj){
    navigate("/search")
   }

  }
  console.log(searchData[1])
  const hamburgerContext=(btnClick)=>{
      setHamburgerData(btnClick)
  }

  return (
    <AttendenceContext.Provider value={{ timeDetails, time,searchUserData,hamburgerContext,hamburgerData,searchData}}>
      {children}
    </AttendenceContext.Provider>
  );
};
export { AttendenceContext, AttendenceProvider };
