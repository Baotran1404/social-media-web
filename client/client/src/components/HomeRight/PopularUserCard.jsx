import React from 'react';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { red } from '@mui/material/colors';
import Button from '@mui/material/Button';


const PopularUserCard = () => {
  return (
    <div>
   <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
 <Button size ='small'>
    FOLLOW
 </Button>
        }
        title="BaoTran2"
        subheader="@Baotrann"
      />
    </div>
  );
};

export default PopularUserCard;