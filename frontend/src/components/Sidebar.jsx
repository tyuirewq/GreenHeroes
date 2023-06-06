import { Divider } from '@mui/material'
import { Link } from 'react-router-dom';
import './sidebar.scss'
import HomeIcon from '@mui/icons-material/Home';
import RulesIcon from '@mui/icons-material/SecuritySharp';
import RankingIcon from '@mui/icons-material/EmojiEvents';
import LogoutIcon from '@mui/icons-material/Logout';
import EditIcon from '@mui/icons-material/Edit';
import UploadIcon from '@mui/icons-material/Upload';
import BenefitIcon from '@mui/icons-material/EmojiObjects';
import ActivityIcon from '@mui/icons-material/EmojiObjectsOutlined';


const Sidebar = ({isOpen}) => {
  return (
    isOpen && (<aside className='sidebar'>
      <div className='sidebar_header'>
        Welcome to Green Hero
      </div>
      <Divider sx={{ borderColor: 'neutral.100' }} />
      <div className='list_option'>
        <div className='option'> 
          <div className='homeicon'>
            <HomeIcon />
            <span><Link className='link' to='/Home'>Home</Link></span>
          </div>
          <div className='rulesicon'>
            <RulesIcon />
            <span><Link className='link' to='/rules'>Rules Page</Link></span>
          </div>
          <div className='uploadicon'>
            <UploadIcon />
            <span><Link className='link' to='/upload'>Upload Page</Link></span>
          </div>
          <div className='benefiticon'>
            <BenefitIcon />
            <span><Link className='link' to='/benefits'>Benefits Page</Link></span>
          </div>
          <div className='activityicon'>
            <ActivityIcon />
            <span><Link className='link' to='/activity'>Activity Page</Link></span>
          </div>
          <div className='rankingicon'>
            <RankingIcon />
            <span><Link className='link' to='/rank'>Ranking Page</Link></span>
          </div>
          <div className='editicon'>
            <EditIcon />
            <span><Link className='link' to='/edit'>Edit Profile</Link></span>
          </div>
          
          <div className='logouticon'>
            <LogoutIcon />
            <span><Link className='link' to='/'>Logout</Link></span>
          </div>
        </div>
      </div>
    </aside>)
  )
}

export default Sidebar
