import Header from "./Header"
import Sidebar from "./Sidebar"
import React, { useState, useEffect } from "react"

const MainDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => { }, [isSidebarOpen]);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className='MainDashboard'>
      <Header toggleSidebar={toggleSidebar} isOpen={isSidebarOpen} />
      <Sidebar isOpen={isSidebarOpen} />
    
    </div>
  )
}

export default MainDashboard