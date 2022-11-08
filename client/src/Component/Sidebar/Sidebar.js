import React,{useState} from 'react'
import "./Sidebar.css";
import Home from '../Home/Home';
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const Sidebar = () => {

  const [expandSidebar,setExpandSidebar] = useState(true);

  const handleExpandClick = () =>{

      setExpandSidebar(!expandSidebar)

  }

  return(

    <div className='container-fluid sidebar-section'>

      <div className={expandSidebar ? "sidebar-expand sidebar" : "sidebar"}>

        <div className='icon-for-sidebar-expand-and-collapse'>

          <p onClick={handleExpandClick}>

            {expandSidebar ? (
              <BsChevronLeft size ={30}/>
            ):(
              <BsChevronRight size ={30}/>
            )}

            </p>
        </div>
      
      </div>

      <div className='container'>

        <Home/>

      </div>


    </div>
  );
  
}

export default Sidebar