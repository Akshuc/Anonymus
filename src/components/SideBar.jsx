import React from 'react'
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import ListAltIcon from '@mui/icons-material/ListAlt';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import InsertChartOutlinedOutlinedIcon from '@mui/icons-material/InsertChartOutlinedOutlined';
import SignalCellularAltOutlinedIcon from '@mui/icons-material/SignalCellularAltOutlined';
import { Typography } from '@mui/material';
const  SideBar = () => {
  return (
    <div className='Sidebar' >
        <div className='elem1'>
             <GridViewOutlinedIcon className='dash'/> 
             <Typography font="Inter" wieght="500" size="13px" verticalTrim="Cap-hieght" lineHeight="15.73px" align='center' color="white">
                Dashboard
             </Typography>
        </div>
        <div className='elem2'>
             <ListAltIcon className='dash2'/> 
             <Typography font="Inter" wieght="500" size="13px" verticalTrim="Cap-hieght" lineHeight="15.73px" align='center' color="white">
                Position
             </Typography>
        </div>
        <div className='elem2'>
             <EmojiEventsOutlinedIcon className='dash2'/> 
             <Typography  font="Inter" wieght="500" size="8px" verticalTrim="Cap-hieght" lineHeight="15.73px" align='center' color="white">
                Battlegrounds
             </Typography>
        </div>
        <div className='elem2'>
             <GroupsOutlinedIcon className='dash2'/> 
             <Typography font="Inter" wieght="500" size="13px" verticalTrim="Cap-hieght" lineHeight="15.73px" align='center' color="white">
                Refferals
             </Typography>
        </div>
        <div className='elem2'>
             <InsertChartOutlinedOutlinedIcon className='dash2'/> 
             <Typography font="Inter" wieght="500" size="13px" verticalTrim="Cap-hieght" lineHeight="15.73px" align='center' color="white">
                Analytics
             </Typography>
        </div>
        <div className='elem2'>
             <SignalCellularAltOutlinedIcon className='dash2'/> 
             <Typography font="Inter" wieght="500" size="13px" verticalTrim="Cap-hieght" lineHeight="15.73px" align='center' color="white">
                Analytics
             </Typography>
        </div>
    </div >
  )
}

 export default SideBar;