import React, { useContext } from 'react';
import { AttendenceContext } from '../../../../Context';
import "./search.css"

export default function Search() {
  const {searchData} = useContext(AttendenceContext)
  console.log(searchData)
  return (
    <div className="search-page">
      {
        searchData?
        <div>
          <h3>Serch Employee</h3>
          <div>
            <img src='https://cdn1.iconfinder.com/data/icons/user-pictures/100/unknown-512.png' alt='search-profile'/>
            <div className='search-details-container'>
              <h4 className='search-name-header'>{searchData.name}</h4>
              <div>
                <label htmlFor="" className="search-profile-label"></label>
                <p className="search-profile-valu"></p>
              </div>
              <div>
                <label htmlFor="" className="search-profile-label"></label>
                <p className="search-profile-valu"></p>
              </div>
              <div>
                <label htmlFor="" className="search-profile-label"></label>
                <p className="search-profile-valu"></p>
              </div>
            </div>
          </div>
          
        </div>
        :
        <div>
        </div>
      }
       
    </div>
  )
}
