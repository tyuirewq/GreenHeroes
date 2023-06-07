import Header from "../components/Header"
import Sidebar from "../components/Sidebar"
import React, { useState, useEffect } from "react"
import Image from './../image/backgroundImage.jpeg'

const MainDashboard = ({children}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  useEffect(() => { }, [isSidebarOpen]);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className='MainDashboard' style={{display: "flex", flexDirection: "column", minHeight: "100vh"}}>
      <Header toggleSidebar={toggleSidebar} isOpen={isSidebarOpen} />
      <div className="main-content" style={{display: "flex", flexGrow:1}}>
        <Sidebar isOpen={isSidebarOpen} />
        <main style={{ flexGrow: 1, padding: "20px", backgroundImage: `url(${Image})`,  backgroundSize: "cover", backgroundRepeat: "no-repeat"}}>{children}</main>
      </div>
    </div>
  )
}

export default MainDashboard;