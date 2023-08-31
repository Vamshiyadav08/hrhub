import React, {useState,useEffect} from 'react';
import {BiEdit} from "react-icons/bi";
import "./Bank.css";
import "../Education/education.css";
import {db,storage} from '../../../../firebaseConfig';
import { collection, addDoc,getDocs } from "firebase/firestore";

export default function Bank() {
    const [state,setStateInput] = useState({
        bankname: "",
        accno : "",
        ifsc : "",
        branch : "",
        acctype : "",
        paymentmode : ""
      })
      const [docsData,setDocsData] = useState([])

      const handleInput=(event)=>{
       
        const { name, value } = event.target;
            setStateInput({
              ...state,
              [name]: value
            });
      }
      console.log(state)
      const handlesubmit=async(event)=>{
        event.preventDefault()
        try {
          await addDoc(collection(db,"bank"), {
            bankname: state.bankname,
            accno :state.accno,
            ifsc : state.ifsc,
            branch : state.branch,
            acctype : state.acctype,
            paymentmode : state.paymentmode
            
          });
        } catch (error) {
          console.error("Error uploading bank:", error);
        }
      }
      useEffect(()=>{
      const getData=async()=>{
        const querySnapshot = await getDocs(collection(db, "bank"));
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
        <h3>Bank Account Details</h3>
        <form onSubmit={handlesubmit}>
            <div className="bank-input-container">
                <label htmlFor="" className="bank-label">Name of Bank
                 <span className="valid-check">*</span>
                </label>
                <input type="text" name='bankname' className="bank-input" onChange={handleInput} placeholder=''/>
            </div>
            <div className="bank-input-container">
                <label htmlFor="" className="bank-label">Account No
                <span className="valid-check">*</span>  
                </label>
                <input type="text" name='accno' className="bank-input" onChange={handleInput} placeholder=''/>
            </div>
            <div className="bank-input-container">
                <label htmlFor="" className="bank-label">IFSC Code</label>
                <input type="text" name='ifsc' className="bank-input" onChange={handleInput} placeholder=''/>
            </div>
            <div className="bank-input-container">
                <label htmlFor="" className="bank-label">Branch Adress</label>
                <input type="text" name='branch' className="bank-input" onChange={handleInput} placeholder=''/>
            </div>
            <div className="bank-input-container">
                <label htmlFor="" className="bank-label">Account Type</label>
                <input type="text" name='acctype' className="bank-input" onChange={handleInput} placeholder=''/>
            </div>
            <div className="bank-input-container">
                <label htmlFor="" className="bank-label">Payment Mode</label>
                <input type="text" name='paymentmode' className="bank-input" onChange={handleInput} placeholder=''/>
            </div>
            <button className='bank-btn'>
                <BiEdit/>
                Update Details
            </button>

        </form>
        <div className='data-container'>
            <ul className='data-header-container'>
               <li className="data-details-header">Name of Bank</li>
               <li className="data-details-header">Account No</li>
               <li className="data-details-header">IFSC No</li>
               <li className="data-details-header">Branch Adress</li>
               <li className="data-details-header">Account Type</li>
               <li className="data-details-header">Payment Mode</li> 
            </ul>
           
                {
                  docsData.map((eachItem,index)=>(
                    <ul key={index} className='data-content'>
                        <li className="data-details">{eachItem.bankname}</li>
                        <li className="data-details">{eachItem.accno}</li>
                        <li className="data-details">{eachItem.ifsc}</li>
                        <li className="data-details">{eachItem.branch}</li>
                        <li className="data-details">{eachItem.acctype}</li>
                        <li className="data-details">{eachItem.paymentmode}</li> 
                    </ul>
                  ))
                }
           
        </div>

    </div>
  )
}
