import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import ImageIcon from '@mui/icons-material/Image';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import { useFormik } from 'formik';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { uploadToCloudinary } from '../../utils/uploadToCloudniry';
import { useDispatch } from 'react-redux';
import { createPostAction } from '../../Redux/Post/post.action';




const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius:".6rem",
  outline:"none"
};

const CreatePostModal = ({handleClose, open}) => {

 
  const [selectedImage, setSelectedImage] =useState();
  const [selectedVideo, setSelectedVideo] =useState();
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();


  const handleSelectImage =async(event)=>{
    setIsLoading(true);
    const imageUrl= await uploadToCloudinary(event.target.files
      [0], "image" )
      setSelectedImage(imageUrl);
       setIsLoading(false)
       formik.setFieldValue("image", imageUrl)
     
  };
  
  const handleSelectVideo = async(event)=>{
        setIsLoading(true);
    const videoUrl= await uploadToCloudinary(event.target.files
      [0], "image" )
      setSelectedVideo(videoUrl);
       setIsLoading(false)
       formik.setFieldValue("image", videoUrl)

  };

   const formik = useFormik({
    initialValues:{
      caption:"",
      image:"",
      video:""
    },
    onSubmit:(values)=>{
      console.log("formik values ",values)
      dispatch(createPostAction(values))
    }
   });


  return (
  <div>
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form onSubmit = {formik.handleSubmit}>
<div>
  <div className = 'flex space-x-4 items-center'>
<Avatar/>
<div>
  <p className = 'font-bold text-lg'>BaoTrannn</p>
  <p className ='text-sm'>@Baotrann</p>
</div>
  </div>

  <textarea
  className = "outline-none w-full 
  mt-5 p-2 bg-transparent border 
  border-[#3b4054] rounded-sm"
placeholder = "write caption..."
  name = "caption" 
  id ="" 
  onChange = {formik.handleChange}
  value = {formik.values.caption} 
  rows ="4" ></textarea>

<div className = "flex space-x-5 items-center mt-5">
   <div>
            <input 
            type = "file" 
            accept = "image/*"
            onChange = {handleSelectImage} 
            style ={{display:"none"}}
            id = "image-input"  
            />
            <label htmlFor = "image-input">
              <IconButton color ="primary" component="span">
                <ImageIcon/>
              </IconButton>
            </label>
            <span>Image</span>
   </div>

      <div>
            <input 
            type = "file" 
            accept = "video/*"
            onChange = {handleSelectVideo} style ={{display:"none"}}
            id = "video-input"  />
            <label htmlFor = "videoinput">
              <IconButton color ="primary">
                <VideoCallIcon/>
              </IconButton>
            </label>
            <span>Video</span>
   </div>
</div>

{selectedImage && ( <div>
  <img className = "h-[10rem]"
  src ={selectedImage} alt=""/>
</div>)}

<div className = "flex w-full justify-end">
  <Button variant = "contained" type ="submit"
  sx ={{borderRadius:"1.5rem"}}
  >Post</Button>
</div>

</div>
          </form>
          <Backdrop
  sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
  open={isLoading}
  onClick={handleClose}
>
  <CircularProgress color="inherit" />
</Backdrop>
        </Box>
      </Modal>
  </div>
  );
};
export default CreatePostModal;
