import React from 'react'
import "./family.css";

export default function Family() {
  const handleInput=()=>{

  }
  return (
    <div>
        <h3>Bank Account Details</h3>
        <form>
            <div className="bank-input-container">
                <label htmlFor="" className="bank-label">Name
                 <span className="valid-check">*</span>
                </label>
                <input type="text" name='bank-name' className="family-input" onChange={()=>handleInput} placeholder='Name'/>
            </div>
            <div className="family-input-container">
                <label htmlFor="" className="bank-label">RelationShip
                <span className="valid-check">*</span>  
                </label>
                <input type="text" name='account-no' className="family-input" onChange={()=>handleInput} placeholder='RelationShip'/>
            </div>
            <div className="family-input-container">
                <label htmlFor="" className="bank-label">Date Of Birth</label>
                <input type="text" name='' className="family-input" onChange={()=>handleInput} placeholder='Date Of Birth'/>
            </div>
            <div className="family-input-container">
                <label htmlFor="" className="bank-label">Gender</label>
                <input type="text" name='branch' className="family-input" onChange={()=>handleInput} placeholder='Gender'/>
            </div>
            <div className="family-input-container">
                <label htmlFor="" className="bank-label">Occupation</label>
                <input type="text" name='branch' className="family-input" onChange={()=>handleInput} placeholder='Occupation'/>
            </div>
            <div className="family-input-container">
                <label htmlFor="" className="bank-label">Phone #</label>
                <input type="text" name='branch' className="family-input" onChange={()=>handleInput} placeholder='Phone#'/>
            </div>
            <div className="family-input-container">
                <label htmlFor="" className="bank-label">Address</label>
                <textarea
                    rows="5"
                    cols="20"
                    name="adress"
                    
                    className="family-input"
                  />  
          </div>
          <div>
              <button className='family-btn'>
                    Add Details
                </button>
                <button className='family-reset-btn'>
                    Reset
               </button>

          </div>
            


        </form>

    </div>
  )
}
