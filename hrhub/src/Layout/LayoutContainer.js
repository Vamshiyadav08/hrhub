import React from 'react';
import { Outlet } from 'react-router-dom';
import "./layout.css";
import Topbar from '../components/Common/Topbar/Topbar';
import Leftbar from '../components/Common/LeftBar/Leftbar';

export default function LayoutContainer() {
  return (
    <div className='layout-container'>
        <Topbar />
        <div className='layout-components'>
          <div className='layout-section'>
            <Leftbar/>
          </div>
           <div className='layout-outlet'>
              <Outlet/>
           </div>
            
        </div>
    </div>
  )
}
