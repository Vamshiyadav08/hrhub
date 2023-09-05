import React, { useState } from "react";
import "./organizationchart.css"

export default function OrganizationChart() {
  const [clickBoard,setBoard] =useState(false)
  const [clickDirectorA,setDirectorA] =useState(false)
  const [clickDirectorB,setDirectorB] =useState(false)

  const handleBoard=(()=>{
    
    setBoard(!clickBoard)
    if(!clickBoard){
      setDirectorA(true)
      setDirectorB(true)
    }else{
      setDirectorA(false)
      setDirectorB(false)
    }
  })
  const handleDirectorA=(()=>{
    setDirectorA(!clickDirectorA)
  })
  const handleDirectorB=(()=>{
    setDirectorB(!clickDirectorB)
  })
 

  return (
    <div className="organization-container" >
      <table>
        <thead>
          <tr>
            <td>
              <div  className={`node`} onClick={handleBoard} >
                <img src="https://cdn1.iconfinder.com/data/icons/user-pictures/100/unknown-512.png" alt="" />
                <h3>Board Of Director</h3>
                <p>Director</p>
                <p>Director</p>
                <p>Full Time</p>
              </div>
            </td>
          </tr>
        </thead>
        <tbody>
            <tr className={`node ${clickBoard?"active":"hide"}`}>
              <td >
                  <div className={`node ${clickDirectorA?"active":"hide"}`} onClick={handleDirectorA}>
                    <img src="https://cdn1.iconfinder.com/data/icons/user-pictures/100/unknown-512.png" alt="" />
                    <h3>Akhilesh</h3>
                    <p>Director</p>
                    <p>Director</p>
                    <p>Full Time</p>
                  </div>
                </td>
                <td>
                  <div className={`node ${clickDirectorB?"active":"hide"}`}  onClick={handleDirectorB}>
                    <img src="https://cdn1.iconfinder.com/data/icons/user-pictures/100/unknown-512.png" alt="" />
                    <h3>Harish Kumar</h3>
                    <p>Director</p>
                    <p>Director</p>
                    <p>Full Time</p>
                  </div>
                </td>
            </tr>
        </tbody>
        
      </table>
    </div>
  );
}
