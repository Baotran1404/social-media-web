import React from 'react';
import { Grid } from '@mui/material';
import Divider from '@mui/material/Divider';
import { navigationMenu } from './SidebarNavigation';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Card from '@mui/material/Card';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Sidebar= () =>{
  const {auth} = useSelector(store=>store);
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleNavigate = (item) => {
    if (item.title === "Profile") {
      navigate(`/profile/${auth.user?.id}`);
    } else if (item.title === "Message") {
      navigate("/message");
    } else if (item.path) {
      navigate(item.path);
    }
  }

    return (
<Card className = 'card h-screen w-[300px] flex flex-col justify-between py-5'>
<div className = 'space-y-8 pl-5'>
    <div className =''>
        <span className = 'logo font-bold text-x1'> TranSocial</span>

    </div>

    <div className ='space-y-8'>
        {navigationMenu.map((item) => (
        <div 
        onClick ={()=>handleNavigate(item)}
        className = 'cursor-pointer flex space-x-3 items-center'>
            {item.icon}
            <p className = 'text-x1'>{item.title}</p>
        </div>
   ) )}

    </div>
  
</div>
<div>
    <Divider/>
    <div className ="pl-5 flex items-center justify-between pt-5">
        <div className ="flex items-center space-x-3">
            <Avatar src = "https://cdn.pixabay.com/photo/2023/07/30/09/12/red-hair-girl-8158373_1280.jpg"/>
            <div>
                <p className = "font-bold"> {auth.user?.firstName + ""+auth.user?.lastName}</p>
                <p className = "opacity-70"> @{auth.user?.firstName.toLowerCase() + "-"+auth.user?.lastName.toLowerCase()} </p>
            </div>

        </div>
       <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <MoreVertIcon/>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          list: {
            'aria-labelledby': 'basic-button',
          },
        }}
      >
        <MenuItem component={Link} to={`/profile/${auth.user?.id}`} onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
</div>
</Card>
    );
}

export default Sidebar