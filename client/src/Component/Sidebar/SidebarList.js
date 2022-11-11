import React from 'react'
import "./SidebarList.css";
import profilepic from "../../image/image.jpeg"
import 
{   FcHome ,
    FcBusinesswoman,
    FcTodoList,
    FcTimeline ,
    FcDiploma1,
    FcFactory,
    FcMultipleDevices,
    FcDiploma2,
    FcBusinessContact
} from "react-icons/fc";


const SidebarList = ({expandSidebar}) => {
    return (
        <React.Fragment>
        {expandSidebar ? (
        <div className='navbar-items'>

        <div className='sidebar-profile-pic'>
        <img src={profilepic} alt="profilepicture"/>
        </div>
        
        
        <ul>
        
            <li className='nav-item'>
                {" "}
                <FcHome size={25}/> Home{" "}
            </li>
            <li className='nav-item'>
                <FcBusinesswoman size={25}/> About
            </li>
            <li className='nav-item'>
                <FcTodoList size={25}/> Education
            </li>
            <li className='nav-item'>
                <FcTimeline size={25}/> Projects
            </li>
            <li className='nav-item'>
                <FcDiploma1 size={25}/> Certifications
            </li>
            <li className='nav-item'>
                <FcFactory size={25}/> Internships
            </li>
            <li className='nav-item'>
                <FcMultipleDevices size={25}/> Tech Stack
            </li>
            <li className='nav-item'>
                <FcDiploma2 size={25}/> Achievements
            </li>
            <li className='nav-item'>
                <FcBusinessContact size={25}/> Contact
            </li>
                
        </ul>
        </div>
) : (
    <div className='navbar-items-only-icons'>
        <ul>
        <li className='nav-item'>
                <FcHome size={25}/> 
            </li>
            <li className='nav-item'>
                <FcBusinesswoman size={25}/> 
            </li>
            <li className='nav-item'>
                <FcTodoList size={25}/> 
            </li>
            <li className='nav-item'>
                <FcTimeline size={25}/> 
            </li>
            <li className='nav-item'>
                <FcDiploma1 size={25}/> 
            </li>
            <li className='nav-item'>
                <FcFactory size={25}/> 
            </li>
            <li className='nav-item'>
                <FcMultipleDevices size={25}/> 
            </li>
            <li className='nav-item'>
                <FcDiploma2 size={25}/> 
            </li>
            <li className='nav-item'>
                <FcBusinessContact size={25}/>
            </li>

        
        </ul>
    </div>
)}
        
    </React.Fragment>
    )
};

export default SidebarList

