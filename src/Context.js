import { createContext, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";

const AttendenceContext = createContext([]);

const AttendenceProvider = ({ children }) => {
  const [time, setTime] = useState("");
  const [hamburgerData, setHamburgerData] = useState("");
  const [searchData, setSerachData] = useState([]);
  const navigate = useNavigate();

  const timeDetails = (timeDetails) => {
    setTime(timeDetails);
  };
  const searchUserData = (userData, searchInput) => {
    let searchedObj = userData.find((eachItem) => {
      return eachItem.name.includes(searchInput);
    });
    setSerachData(searchedObj);

    navigate("/search");
  };

  const hamburgerContext = (btnClick) => {
    setHamburgerData(btnClick);
  };
  const cacheMemoData = useMemo(
    () => ({
      timeDetails,
      time,
      searchUserData,
      hamburgerContext,
      hamburgerData,
      searchData,
    }),
    [time, hamburgerData, searchData]
  );

  return (
    <AttendenceContext.Provider value={cacheMemoData}>
      {children}
    </AttendenceContext.Provider>
  );
};
export { AttendenceContext, AttendenceProvider };
