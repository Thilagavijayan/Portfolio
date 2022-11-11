import React from 'react'
import "./SidebarList.css";
import profilepic from "../../image/image.jpeg"
const SidebarList = () => {
  return (
    <React.Fragment>
        <div className='navbar-items'>

            <div className='sidebar-profile-pic'>
                <img src={profilepic} alt="profilepicture"/>

            </div>
        </div>
    </React.Fragment>
  )
}

export default SidebarList

