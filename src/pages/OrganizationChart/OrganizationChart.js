import React, { useState } from "react";
import "./organizationchart.css"

export default function OrganizationChart() {
  const [clickBoard,setBoard] =useState(false)
  const [clickDirectorA,setDirectorA] =useState(false)
  const [clickDirectorB,setDirectorB] =useState(false)
  const [clickVicePresident,setVicePresident] = useState(false)

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
 const handleVicePresident=(()=>{
    setVicePresident(!clickVicePresident)
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
              <th>
                  <div onClick={handleDirectorA}>
                    <img src="https://cdn1.iconfinder.com/data/icons/user-pictures/100/unknown-512.png" alt="" />
                    <h3>Akhilesh</h3>
                    <p>Director</p>
                    <p>Director</p>
                    <p>Full Time</p>
                  </div>
                </th>
                <th>
                  <div onClick={handleDirectorB}>
                    <img src="https://cdn1.iconfinder.com/data/icons/user-pictures/100/unknown-512.png" alt="" />
                    <h3>Harish Kumar</h3>
                    <p>Director</p>
                    <p>Director</p>
                    <p>Full Time</p>
                  </div>
                </th>
            </tr>
            <tr className={`node ${clickDirectorA?"active":"hide"}`} >
                    <>
                      <td>
                        <div onClick={handleVicePresident}>
                          <img src="https://cdn1.iconfinder.com/data/icons/user-pictures/100/unknown-512.png" alt="" />
                          <h3>Mansoor</h3>
                          <p>Director</p>
                          <p>Director</p>
                          <p>Full Time</p>
                        </div>
                      </td>
                      <td>
                        <table>
                          <tr className={`node ${clickVicePresident?"active":"hide"}`}>
                            <td>
                                <div >
                                  <img src="https://cdn1.iconfinder.com/data/icons/user-pictures/100/unknown-512.png" alt="" />
                                  <h3>dhanush</h3>
                                  <p>Director</p>
                                  <p>Director</p>
                                  <p>Full Time</p>
                                </div>
                            </td>
                            <td>
                              <div >
                                <img src="https://cdn1.iconfinder.com/data/icons/user-pictures/100/unknown-512.png" alt="" />
                                <h3>Pranothi</h3>
                                <p>Director</p>
                                <p>Director</p>
                                <p>Full Time</p>
                              </div>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </>
                    
                </tr>
        </tbody>
        
      </table>
    </div>
  );
}
