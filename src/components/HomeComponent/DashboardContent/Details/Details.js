import React, { useContext, useEffect, useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "./details.css";
import { db } from "../../../../firebaseConfig";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { AttendenceContext } from "../../../../Context";

export default function Details() {
  const [data, setData] = useState({
    title: "",
    firstname: "",
    lastname: "",
    date: "",
    gender: "",
    bloodgroup: "",
    religion: "",
    martialstatus: "",
    mobile: "",
    workphone: "",
    personalemail: "",
    linkedin: "",
    adress: "",
    role: "",
  });
  const [themeval,setthemestate]= useState(localStorage.getItem("themeVal"))
  const {theme} = useContext(AttendenceContext)
  
  useEffect(()=>{
    let themee = localStorage.getItem("themeVal")
    setthemestate(themee)
  },[theme])
  

  const handleChangeEvent = (event,val) => {
    console.log(val)
    console.log(event.target.value)
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (data.name!="" && data.personalemail!="" && data.mobile!="") {
      try {
        await setDoc(doc(db, "userDetails", "id1"), data);
        console.log("Added");
      } catch (error) {
        console.log(error);
      }
    } else {
      toast.error("Enter the Required Feilds");
    }
  };

  useEffect(() => {
    const getDataFromFirebase = async () => {
      try {
        const docRef = doc(db, "userDetails", "id1");
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          let dbData = docSnap.data();
          setData(dbData);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getDataFromFirebase();
  }, []);


  return (
    <div className="details-container">
      <form onSubmit={handleSubmit}>
        <div className="personal-details">
          <h4 className="details-heading">Personal Details</h4>
          <div className="input-container">
            <label className={`${themeval==="true"?"label-dark":"details-label"}`}  htmlFor="title">Title</label>
            <select
              id="title"
              name="title"
              onChange={handleChangeEvent}
              className="form-input"
            >
              <option value="Mr">Mr</option>
              <option value="Miss">Miss</option>
              <option value="Dr">Dr</option>
            </select>
          </div>
          <div className="input-container">
            <label className={`${themeval==="true"?"label-dark":"details-label"}`} htmlFor="firstname">
              First Name
              <span className="star-important">*</span>
            </label>

            <input
              name="firstname"
              id="fname"
              type="text"
              onChange={handleChangeEvent}
              className="form-input"
              value={data?.firstname}
            />
          </div>
          <div className="input-container">
            <label className={`${themeval==="true"?"label-dark":"details-label"}`} htmlFor="middleName">Middle Name</label>
            <input
              name="middlename"
              id="middleName"
              type="text"
              onChange={handleChangeEvent}
              className="form-input"
            />
          </div>
          <div className="input-container">
            <label className={`${themeval==="true"?"label-dark":"details-label"}`} htmlFor="lastname">
              Last Name
              <span className="star-important">*</span>
            </label>

            <input
              name="lastname"
              id="lastname"
              type="text"
              onChange={handleChangeEvent}
              value={data.lastname}
              className="form-input"
            />
          </div>
          <div className="input-container">
            <label className={`${themeval==="true"?"label-dark":"details-label"}`}>Date of Birth</label>
            <input
              name="date"
              type="date"
              onChange={handleChangeEvent}
              className="form-input"
              value={data.date}
            />
          </div>
          <div className="input-container">
            <label className={`${themeval==="true"?"label-dark":"details-label"}`}>role</label>
            <input
              name="role"
              type="text"
              onChange={handleChangeEvent}
              className="form-input"
              value={data.role}
            />
          </div>

          <div className="input-container">
            <label className={`${themeval==="true"?"label-dark":"details-label"}`} htmlFor="gender">Gender</label>
            <select
              name="gender"
              id="gender"
              onChange={handleChangeEvent}
              className="form-input"
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="transgender">Transgender</option>
            </select>
          </div>
          <div className="input-container">
            <label className={`${themeval==="true"?"label-dark":"details-label"}`} htmlFor="bloodgroup">Blood Group</label>
            <select
              name="bloodgroup"
              id="bloodgroup"
              onChange={handleChangeEvent}
              className="form-input"
            >
              <option value="A+">A+</option>
              <option value="B+">B+</option>
              <option value="AB+">AB+</option>
            </select>
          </div>
          <div className="input-container">
            <label className={`${themeval==="true"?"label-dark":"details-label"}`} htmlFor="religion">Religion</label>
            <select
              name="religion"
              id="religion"
              onChange={handleChangeEvent}
              className="form-input"
            >
              <option value="hindi">Hindu</option>
              <option value="muslim">Muslim</option>
              <option value="christian">Christian</option>
              <option value="sikh">Sikh</option>
            </select>
          </div>
          <div className="input-container">
            <label className={`${themeval==="true"?"label-dark":"details-label"}`} htmlFor="martialstatus">Martial Status</label>
            <select
              name="martialstatus"
              id="martialstatus"
              onChange={handleChangeEvent}
              className="form-input"
            >
              <option>Single</option>
              <option>Married</option>
              <option>Widowed</option>
            </select>
          </div>
        </div>
        <div className="contact-details">
          <h4 className="details-heading">Contact Details</h4>

          <div className="input-container">
            <label className={`${themeval==="true"?"label-dark":"details-label"}`} className="mobile">
              Mobile
              <span className="star-important">*</span>
            </label>
            <div className="form-input">
              <PhoneInput
              inputProps={{
                name: 'mobile',
                required: true,
                autoFocus: true
              }}
                country={"us"}
                value={data.mobile}
                onChange={(value) => handleChangeEvent({ target: { name: "mobile", value } })}
                
              />
            </div>
          </div>
          <div className="input-container">
            <label className={`${themeval==="true"?"label-dark":"details-label"}`}>
              Work Phone
            </label>
            <span className="form-input">
              <PhoneInput
              inputProps={{
                name: 'workphone',
                required: true,
                autoFocus: true
              }}
                country={"us"}
                name="workphone"
                value={data.workphone}
                onChange={(value) => handleChangeEvent({ target: { name: "mobile", value } })}
              />
            </span>
          </div>
          <div className="input-container">
            <label className={`${themeval==="true"?"label-dark":"details-label"}`}>
              Personal Email
              <span className="star-important">*</span>
            </label>
            <input
              name="personalemail"
              type="email"
              onChange={handleChangeEvent}
              className="form-input"
              value={data.personalemail}
            />
          </div>
          <div className="input-container">
            <label className={`${themeval==="true"?"label-dark":"details-label"}`}>linkedIn</label>
            <input
              name="linkedin"
              type="text"
              onChange={handleChangeEvent}
              className="form-input"
              value={data.linkedin}
            />
          </div>
          <div className="input-container">
            <label className={`${themeval==="true"?"label-dark":"details-label"}`}>Permanent Adress</label>
            <textarea
              rows="5"
              cols="20"
              name="adress"
              onChange={handleChangeEvent}
              className="form-input"
              value={data.adress}
            />
          </div>
        </div>
        {
          data.length<1?<button className="details-btn">Save</button>
          :<button className="details-btn">Update</button>

        }
        
      </form>
    </div>
  );
}
