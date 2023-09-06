import React, { useState } from "react";
import "./organizationchart.css"
const underVicepresidentArr = [
  {name:"sameer",role:"Devoloper",time:"fulltime",rmanager:"mansoor"},
  {name:"karan",role:"Devoloper",time:"fulltime",rmanager:"mansoor"},
  {name:"banu",role:"Devoloper",time:"fulltime",rmanager:"mansoor"},
  {name:"dinesh",role:"Devoloper",time:"fulltime",rmanager:"mansoor"},
  {name:"madhu",role:"Devoloper",time:"fulltime",rmanager:"mansoor"}
]
const underDirectorB =[
  {name:"Revanth",role:"Devoloper",time:"fulltime",rmanager:"mansoor"},
  {name:"Soumya",role:"Devoloper",time:"fulltime",rmanager:"mansoor"},
  {name:"banu",role:"Devoloper",time:"fulltime",rmanager:"mansoor"},
  {name:"Vijayak",role:"Devoloper",time:"fulltime",rmanager:"mansoor"},
  {name:"madhu",role:"Devoloper",time:"fulltime",rmanager:"mansoor"}

]
export default function OrganizationChart() {
  const [clickBoard,setBoard] =useState(false)
  const [clickDirectorA,setDirectorA] =useState(false)
  const [clickDirectorB,setDirectorB] =useState(false)
  const [clickVicePresident,setVicePresident] = useState(false)
  const [clickDeputyMG,setDeputyMG] = useState(false)


  const handleBoard=(()=>{
    
    setBoard(!clickBoard)
    // if(!clickBoard){
    //   setDirectorA(true)
    //   setDirectorB(true)
    // }else{
    //   setDirectorA(false)
    //   setDirectorB(false)
    // }
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
 const handleDeputyManager=(()=>{
  setDeputyMG(!clickDeputyMG)
 })

  return (
    <div className="organization-container" >
      <table>
        <thead>
          <tr>
            <td>
              <div  className={`node`} onClick={handleBoard} >
                <img className="node-img" src="https://cdn1.iconfinder.com/data/icons/user-pictures/100/unknown-512.png" alt="" />
                <h3>Board Of Director</h3>
                <p>Director</p>
                <p>Director</p>
                <p>Full Time</p>
              </div>
            </td>
          </tr>
        </thead>
        <tbody className={`node ${clickBoard?"active":"hide"}`}>
            <tr >
              <th className="thead">
                  <div onClick={handleDirectorA}>
                    <img className="node-img" src="https://cdn1.iconfinder.com/data/icons/user-pictures/100/unknown-512.png" alt="" />
                    <h3>Akhilesh</h3>
                    <p>Director</p>
                    <p>Director</p>
                    <p>Full Time</p>
                  </div>
                </th>
                <th className="thead">
                  <div onClick={handleDirectorB}>
                    <img className="node-img" src="https://cdn1.iconfinder.com/data/icons/user-pictures/100/unknown-512.png" alt="" />
                    <h3>Harish Kumar</h3>
                    <p>Director</p>
                    <p>Director</p>
                    <p>Full Time</p>
                  </div>
                </th>
            </tr>
            <tr className={`node ${clickDirectorA?"active":"hide"}`}>
              <td>
                <div onClick={handleVicePresident}>
                  <img className="node-img" src="https://cdn1.iconfinder.com/data/icons/user-pictures/100/unknown-512.png" alt="" />
                  <h3>Mansoor</h3>
                  <p>Director</p>
                  <p>Director</p>
                  <p>Full Time</p>
                </div>
              </td>
            </tr>
            <tr >
                  {
                    underVicepresidentArr.map((eachitem,index)=>(
                      <td key={index} className={`node ${clickVicePresident&&clickDirectorA?"active":"hide"}`}>
                        <div >
                          <img className="node-img" src="https://cdn1.iconfinder.com/data/icons/user-pictures/100/unknown-512.png" alt="" />
                          <h3>{eachitem.name}</h3>
                          <p>{eachitem.role}</p>
                          <p>{eachitem.time}</p>
                          <p>{eachitem.rmanager}</p>
                        </div>
                      </td>
                    ))
                  }
            </tr>
            <tr className={`node ${clickDirectorB?"active":"hide"}`}>
              <td>
                <div onClick={handleDeputyManager}>
                  <img className="node-img" src="https://cdn1.iconfinder.com/data/icons/user-pictures/100/unknown-512.png" alt="" />
                  <h3>Vinayak</h3>
                  <p>Director</p>
                  <p>Director</p>
                  <p>Full Time</p>
                </div>
              </td>
            </tr>
            <tr >
                  {
                    underDirectorB.map((eachitem,index)=>(
                      <td key={index} className={`node ${clickDeputyMG&&clickDirectorB?"active":"hide"}`}>
                        <div >
                          <img className="node-img" src="https://cdn1.iconfinder.com/data/icons/user-pictures/100/unknown-512.png" alt="" />
                          <h3>{eachitem.name}</h3>
                          <p>{eachitem.role}</p>
                          <p>{eachitem.time}</p>
                          <p>{eachitem.rmanager}</p>
                        </div>
                      </td>
                    ))
                  }
            </tr>    
        </tbody>
      </table>
    </div>
  );
}
