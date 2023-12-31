import React, { useEffect, useState } from 'react';
import { doc, getDoc } from "firebase/firestore";
import {db} from "../../../../firebaseConfig";

import "./profile.css"
export default function Profile() {

    const [data,setData] = useState({})

    useEffect(()=>{
      const getDataFromFirebase = async()=>{
          try{
            const docRef = doc(db, "userDetails", "id1");
            const docSnap = await getDoc(docRef);
            if(docSnap.exists()){
              let dbData = docSnap.data()
              // console.log(docSnap.data())
              setData(dbData)
            }
            
          }catch(error){
            console.log(error)
          }
      }
      getDataFromFirebase()
    },[])
  
  return (
    <div className='profile'>
        <div className='profile-header'>
        </div>
        <div className='profile-details-container'>
            <div className='profile-image-section'>
              <img alt='profile' className='profile-image' src='https://cdn1.iconfinder.com/data/icons/user-pictures/100/unknown-512.png'/>
              <h3>{`${data.firstname} ${data.lastname}`}</h3>
              <h5>{data.role}<span>IT</span></h5>
            </div>
            <div className='profile-details'> 
                <h3>PersonalDetails</h3>
                <div >
                  {
                      data && 
                      (
                      <>
                        <label>Name</label>
                        <p>{data.firstname}</p>
                        <label>Email</label>
                        <p>{data.personalemail}</p>
                        <label>Phone</label>
                        <p>{data.mobile}</p>
                        <label>Address</label>
                        <p>{data.adress}</p>
                        <label>Date OF Birth</label>
                        <p>{data.date}</p>
                        <label>Linkedin</label>
                        <p>{data.linkedin}</p>

                      </>
                      )
                  }
                </div>
            </div>
        </div>
    </div>
  )
}
