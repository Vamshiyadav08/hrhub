import React, {useState,useEffect} from 'react';
import "./education.css";
import {db} from '../../../../firebaseConfig';
import { collection, addDoc,getDocs } from "firebase/firestore";
import { toast } from 'react-toastify';


export default function Education() {
    const [state,setStateInput] = useState({
        name: "",
        specialization : "",
        collage : "",
        university : "",
        year : "",
        gpa : ""
      })
      const [docsData,setDocsData] = useState([])

      const handleInput=(event)=>{
        const { name, value } = event.target;
            setStateInput({
              ...state,
              [name]: value
            });
      }
     
      const handlesubmit=async(event)=>{
        event.preventDefault()
        if(state.name && state.specialization){
          try {
            await addDoc(collection(db,"education"), {
              name: state.name,
              specialization : state.specialization,
              collage : state.collage,
              university : state.university,
              year : state.year,
              gpa : state.gpa
              
            });
            toast.success("submitted succesfully")
          } catch (error) {
            console.error("Error uploading educaton:", error);
          }
        }else{
          toast.error("Enter the Required Details")
        }
        
      }
      
      useEffect(()=>{
      const getData=async()=>{
        const querySnapshot = await getDocs(collection(db, "education"));
         const data = []
          querySnapshot.forEach((doc) => {
            console.log(doc.id, " => ", doc.data());
            data.push(doc.data())
            setDocsData(data)
        });
        
      } 
        getData()
        
      },[])

  return (
    <div>
        <h3>Education Details</h3>
        <form onSubmit={handlesubmit}>
            <div className="education-input-container">
                <label htmlFor="" className="bank-label">Degree
                 <span className="valid-check">*</span>
                </label>
                <input type="text" name='name' className="education-input" onChange={handleInput} placeholder='Degree'/>
            </div>
            <div className="education-input-container">
                <label htmlFor="" className="bank-label">Specialization
                <span className="valid-check">*</span>  
                </label>
                <input type="text" name='specialization' className="education-input" onChange={handleInput} placeholder='Specialization'/>
            </div>
            <div className="education-input-container">
                <label htmlFor="" className="bank-label">Collage/School</label>
                <input type="text" name='collage' className="education-input" onChange={handleInput} placeholder='Collage/School'/>
            </div>
            <div className="education-input-container">
                <label htmlFor="" className="bank-label">University</label>
                <input type="text" name='university' className="education-input" onChange={handleInput} placeholder='University'/>
            </div>
            <div className="education-input-container">
                <label htmlFor="" className="bank-label">Year of Passing</label>
                <input type="text" name='year' className="education-input" onChange={handleInput} placeholder='Year of Passing'/>
            </div>
            <div className="education-input-container">
                <label htmlFor="" className="bank-label">Percentage</label>
                <input type="text" name='gpa' className="education-input" onChange={handleInput} placeholder='Percentage'/>
            </div>
            <div className="education-input-container">
                <label htmlFor="" className="bank-label">Address</label>
                <textarea
                    rows="5"
                    cols="20"
                    name="adress"
                    
                    className="education-input"
                  />  
          </div>
          <div>
              <button className='family-btn'>
                    Add Details
                </button>
                

          </div>
        </form>
        <div className='data-container'>
            <ul className='data-header-container'>
               <li className="data-details-header">Degree</li>
               <li className="data-details-header">Specialization</li>
               <li className="data-details-header">Collage</li>
               <li className="data-details-header">University</li>
               <li className="data-details-header">Percentage</li>
               <li className="data-details-header">Year of Passing</li> 
            </ul>
           
                {
                  docsData.map((eachItem,index)=>(
                    <ul key={index} className='data-content'>
                        <li  className="data-details">{eachItem.name}</li>
                        <li   className="data-details">{eachItem.specialization}</li>
                        <li   className="data-details">{eachItem.collage}</li>
                        <li   className="data-details">{eachItem.university}</li>
                        <li   className="data-details">{eachItem.gpa}</li>
                        <li   className="data-details">{eachItem.year}</li> 
                    </ul>
                  ))
                }
           
        </div>

    </div>

  )
}
