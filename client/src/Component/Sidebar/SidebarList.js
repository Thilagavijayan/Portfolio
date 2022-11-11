import React from 'react'
import "./SidebarList.css";
import profilepic from "../../image/image.jpeg"
import { FcHome} from "react-icons/fc";


const SidebarList = ({expandSidebar}) => {
    return (
        <React.Fragment>
        {expandSidebar ? (
        <div className='navbar-items'>

        <div className='sidebar-profile-pic'>
        <img src={profilepic} alt="profilepicture"/>
        </div>
        
        <ul>
            <li className='nav-item'>Home</li>
        </ul>
        </div>
):(
    <div></div>
)}
        
    </React.Fragment>
  );
};

export default SidebarList

