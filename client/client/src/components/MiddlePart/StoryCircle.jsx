import React from 'react';
import Avatar from '@mui/material/Avatar';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const StoryCircle = () => {
  return (
    <div>
           <div className='flex flex-col items-center mr-4 cursor-pointer'>

<Avatar 
  sx={{width:"5rem", height:"5rem"}}
  src="https://cdn.pixabay.com/photo/2024/05/16/06/06/mexican-girl-8765139_1280.jpg"
>
  <AddCircleOutlineIcon sx={{fontSize :"3rem"}}/>
</Avatar>
<p>Tranne...</p>
</div>
    </div>
  );
};

export default StoryCircle;

