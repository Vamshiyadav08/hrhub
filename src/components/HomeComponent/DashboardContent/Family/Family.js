import React,{useEffect,useState,useContext} from "react";
import "./family.css";
import { AttendenceContext } from "../../../../Context";
import { db } from "../../../../firebaseConfig";
import { collection, addDoc, getDocs,deleteDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { nanoid } from "nanoid";

export default function Family() {

  const [state, setStateInput] = useState({
    name: "",
    relationship: "",
    gender: "",
    occupation: "",
    phone: "",
    adress:""
  });
  const [docsData, setDocsData] = useState([]);
 
  const [themeval,setthemestate]= useState(localStorage.getItem("themeVal"))
  const {theme} = useContext(AttendenceContext)
  
  useEffect(()=>{
    let themee = localStorage.getItem("themeVal")
    setthemestate(themee)
  },[theme])

  const handleInput = (event) => {
    console.log(event.target)
    const {name,value} = event.target 
    console.log(name,value)
    setStateInput(
      {
        ...state,
        [name]:value
      }
    )
  };
  console.log(state)
  
  const handlesubmit = async (event) => {
    event.preventDefault();
    if (state.name && state.relationship) {
      try {
        await addDoc(collection(db, "family"), {
          name: state.name,
          relationship: state.relationship,
          gender: state.gender,
          occupation: state.occupation,
          gpa: state.phone,
          phone : state.phone,
          adress : state.adress
        });
        toast.success("submitted succesfully");
      } catch (error) {
        console.error("Error uploading educaton:", error);
      }
    } else {
      toast.error("Enter the Required Details");
    }
  };
  useEffect(() => {
    const getData = async () => {
      const querySnapshot = await getDocs(collection(db, "family"));
      const data = [];
      querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
        data.push(doc.data());
        setDocsData(data);
      });
    };
    getData();
  }, []);
 

  return (
    <div>
      <h3>Bank Account Details</h3>
      <form onSubmit={handlesubmit}>
        <div className="bank-input-container">
          <label htmlFor=""className={`${themeval==="true"?"label-dark":"family-label"}`}>
            Name
            <span className="valid-check">*</span>
          </label>
          <input
            type="text"
            name="name"
            className="family-input"
            onChange={ handleInput}
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
            name="relationship"
            className="family-input"
            onChange={handleInput}
            placeholder="RelationShip"
          />
        </div>
        <div className="family-input-container">
          <label htmlFor=""className={`${themeval==="true"?"label-dark":"family-label"}`}>
            Gender
          </label>
          <input
            type="text"
            name="gender"
            className="family-input"
            onChange={ handleInput}
            placeholder="Gender"
          />
        </div>
        <div className="family-input-container">
          <label htmlFor=""className={`${themeval==="true"?"label-dark":"family-label"}`}>
            Occupation
          </label>
          <input
            type="text"
            name="occupation"
            className="family-input"
            onChange={handleInput}
            placeholder="Occupation"
          />
        </div>
        <div className="family-input-container">
          <label htmlFor=""className={`${themeval==="true"?"label-dark":"family-label"}`}>
            Phone #
          </label>
          <input
            type="text"
            name="phone"
            className="family-input"
            onChange={ handleInput}
            placeholder="Phone#"
          />
        </div>
        <div className="family-input-container">
          <label htmlFor=""className={`${themeval==="true"?"label-dark":"family-label"}`}>
            Address
          </label>
          <textarea rows="5" cols="20" name="adress" className="family-input" onChange={handleInput}/>
        </div>
        <div>
          <button className="family-btn" type="submit" >Add Details</button>
        </div>
      </form>
      <div className="data-container">
        <ul className="data-header-container">
          <li className="data-details-header">name</li>
          <li className="data-details-header">relationship</li>
          <li className="data-details-header">gender</li>
          <li className="data-details-header">occupation</li>
          <li className="data-details-header">phone</li>
          <li className="data-details-header">adress</li>
        </ul>

        {docsData.map((eachItem, index) => (
          <ul key={nanoid()} className="data-content">
            <li className="data-details">{eachItem.name}</li>
            <li className="data-details">{eachItem.relationship}</li>
            <li className="data-details">{eachItem.gender}</li>
            <li className="data-details">{eachItem.occupation}</li>
            <li className="data-details">{eachItem.phone}</li>
            <li className="data-details">{eachItem.adress}</li>
          </ul>
        ))}
      </div>
    </div>
  );
}
