import React , { useState } from 'react';
import { useParams } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import PostCard from '../../components/Post/PostCard';
import Card from '@mui/material/Card';
import UserReelCard from '../../components/Reels/UserReelCard';
import { useSelector } from 'react-redux';
import ProfileModal from './ProfileModal';


const tabs=[
  {value:"post", name:"Post"},
   {value:"reels", name:"Reels"},
    {value:"saved", name:"Saved"},
     {value:"repost", name:"repost"},
];


const posts = [1,1,1,1];
const reels = [1,1,1,1]
const savedPost = [1,1,1]

const Profile = () => {
    const {id} = useParams();
    const {auth} = useSelector(store=>store);
    const [open, setOpen] = useState(false);
    const handleOpenProfileModal = ()=> setOpen (true);
    const handleClose = () => setOpen (false);
    const [value, setValue] = React.useState('post');
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    // Nếu chưa có user thì show loading
    if (!auth.user) {
      return <div className="w-full flex justify-center items-center h-[300px]">Loading...</div>;
    }

    return (
      <Card className ="my-10 w-[70%]">
        <div className ="rounded-md">
          <div className = "h-[15rem]">
            <img 
              className ="w-full h-full rounded-t-md"
              src = "https://cdn.pixabay.com/photo/2022/11/27/13/22/tree-7619791_1280.jpg"
            />
          </div>
          <div className ="px-5 flex justify-between items-start mt-5 h-[5rem]">
            <Avatar 
              className ="transform -translate-y-24"
              sx ={{width:"10rem", height:"10rem"}}
              src = "https://cdn.pixabay.com/photo/2025/05/13/12/40/sailboat-9597523_1280.jpg" 
            />
            <Button sx={{borderRadius:"20px"}}
              variant = "outlined"
              onClick={handleOpenProfileModal}
            > Edit Profile</Button>
          </div>
          <div className ="p-5">
            <div>
              <h1 className ="py-1 font-bold text-x1">{auth.user.firstName + " " + auth.user.lastName }</h1>
              <p>@{auth.user.firstName.toLowerCase() + "-" + auth.user.lastName.toLowerCase()}</p>
            </div>
            <div className = "flex gap-5 items-center py-3">
              <span>14 posts </span>
              <span>14 followers </span>
              <span>14 followings </span>
            </div>
            <div>
              <p>Beautiful, free images and photos
                that you can download and use for any project.
                Better than any royalty free or stock photos.</p>
            </div>
          </div>
          <section>
            <Box sx={{ width: "100%" , borderBottom:1, borderColor:"divider"}}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="wrapped label tabs example"
              >
                {tabs.map((item)=> <Tab value={item.value} label={item.name} wrapped/>) }
              </Tabs>
            </Box>
            <div className="flex justify-center">
              {value === "post" ? (
                <div className="space-y-5 w-[70%] my-10">
                  {posts.map((item, idx) => (
                    <div className="border border-slate-100 rounded-md" key={idx}>
                      <PostCard item={typeof item === 'object' ? item : {}} />
                    </div>
                  ))}
                </div>
              ) : value === "saved" ? (
                <div className="space-y-5 w-[70%] my-10">
                  {savedPost.map((item, idx) => (
                    <div className="border border-slate-100 rounded-md" key={idx}>
                      <PostCard item={typeof item === 'object' ? item : {}} />
                    </div>
                  ))}
                </div>
              ) : value === "reels" ? (
                <div className="flex justify-center flex-wrap gap-2 my-10">
                  {reels.map((item) => (
                    <UserReelCard />
                  ))}
                </div>
              ) : value === "repost" ? (
                <div className="space-y-5 w-[70%] my-10 text-center text-gray-400">
                  No reposts yet.
                </div>
              ) : (
                ""
              )}
            </div>
          </section>
        </div>
        <section>
          <ProfileModal open={open} handleClose={handleClose} />
        </section>
      </Card>
    )
}

export default Profile