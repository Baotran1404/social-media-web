import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { red } from '@mui/material/colors';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { useDispatch, useSelector } from 'react-redux';
import Divider from '@mui/material/Divider';

import { createCommentAction, likePostAction } from '../../Redux/Post/post.action';
import { isLikedByReqUser } from '../../utils/isLikedByReqUser';





const PostCard = ({item}) => {

  const [showComments, setShowComments] = useState(false);
  const dispatch=useDispatch();
  const {post, auth} = useSelector(store=>store);

  const handleShowComments = () =>   setShowComments(!showComments);


  const handleCreateComment=(content)=>{
    const reqData = {
      postId:item.id,
      data:{
        content
      }
    }
    dispatch(createCommentAction(reqData));
  }

  const handleLikePost = () => {
    dispatch(likePostAction(item.id));
  }
console.log(isLikedByReqUser(auth.user.id, item), "is liked by req user");
  return (
    <Card sx={{
        maxWidth: 600,   
        margin: 'auto', 
      }}>
  <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={`${item.user?.firstName || "Unknown"} ${item.user?.lastName || ""}`}
        subheader={`@${item.user?.firstName?.toLowerCase() || "unknown"}_${item.user?.lastName?.toLowerCase() || ""}`}
      />
{/* <CardMedia
  component="img"
  sx={{ height: 300 }}
  image={item.image}
  alt="Water"
/> */}
{item.image &&(
<img 
className = 'w-full max-h-[30rem] object-cover object-top'
 src={item.image} alt="Post Image" 
 />
  )}

 <CardContent>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {item.caption}
        </Typography>
      </CardContent>

<CardActions className='flex justify-between' disableSpacing>
  <div>
    <IconButton onClick={handleLikePost}>
      {isLikedByReqUser(auth.user.id, item) ? <FavoriteIcon /> : <FavoriteBorderIcon />}
    </IconButton>

    <IconButton>
      <ShareIcon />
    </IconButton>

    <IconButton onClick={handleShowComments}>
      <ChatBubbleIcon />
    </IconButton>
  </div>
  <div>
    <IconButton>
      {true ? <BookmarkIcon /> : <BookmarkBorderIcon />}
    </IconButton>
  </div>
</CardActions>
      {showComments &&<section>

        <div className = 'flex items-center space-x-5 mx-3 my-5'>
          <Avatar sx = {{}}/>

          <input onKeyPress={(e)=>{
            if(e.key == "Enter"){

              handleCreateComment(e.target.value);
              console.log("enter pressed-----", e.target.value)
            }
          }}
          className = 
          "w-full outline-none 
          bg-transparent border 
          border-[#3b4054]  rounded-full px-5 py-2"
          type ="text"
          placeholder ='write your comment ...'  />

        </div>
        <Divider/>


        <div className = 'mx-3 space-y-2 my-5 text-xs'>

           { item.comments?.map((comment)=>
            <div className ='flex items-center space-x-5'>
              <Avatar sx={{ width: "2rem", height: "2rem" , fontSize:".8rem"}} >
               { comment.user.firstName[0]}
              </Avatar>
              <p>{comment.content}</p>

            </div>)}


          </div>

      </section>}

     
    </Card>
  );
};

export default PostCard;