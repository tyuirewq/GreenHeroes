import { Divider } from '@mui/material'
import './sidebar.scss'


const Sidebar = ({isOpen}) => {
  return (
    isOpen && (<div className='sidebar'>
      <div className='sidebar_header'>
        Welcome to Green Hero
      </div>
      <Divider sx={{ borderColor: 'neutral.100' }} />
      <div className='list_option'>
        <div className='option'> 
          <div className='homeicon'>
            <span>Home</span>
          </div>
          <div className='contacticon'>
            <span>Rules Page</span>
          </div>
          <div className='contacticon'>
            <span>Ranking Page</span>
          </div>
          
          <div className='contacticon'>
            <span>Logout</span>
          </div>
        </div>
      </div>
    </div>)
  )
}

export default Sidebar
