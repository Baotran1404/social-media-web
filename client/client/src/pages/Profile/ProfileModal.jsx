import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { updateProfileAction } from '../../Redux/Auth/auth.action';
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';





const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 2,
  outline:"none",
  overFlow:"scroll-y",
  borderRadius: 3,
};

export default function ProfileModal({open, handleClose}) {
    const dispatch = useDispatch();
    const { auth } = useSelector(store => store);

    const formik = useFormik({
        initialValues: {
            firstName: auth.user?.firstName || "",
            lastName: auth.user?.lastName || "",
        },
        enableReinitialize: true,
        onSubmit: (values) => {
            dispatch(updateProfileAction(values));
        },
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
            <div className = "flex items-center justify-between">
                <div className = "flex items-center space-x-3">
                    <IconButton onClick = {handleClose}>
                        <CloseIcon/>

                    </IconButton>
<p>Edit Profile</p>
                </div>
<Button type = "submit">Save</Button>
            </div>
            <div>
                <div className = "h-[15rem]">
                    <img 
                    className = "w-full h-full rounded-t-md"
                    src = "https://cdn.pixabay.com/photo/2022/04/15/07/58/sunset-7133867_1280.jpg"
                    />

                </div>
                <div className = "pl-5">
                    <Avatar
                    className = "transform -translate-y-24"
                    sx = {{width:"10rem", height:"10rem"}}
                    src ="https://cdn.pixabay.com/photo/2022/06/04/01/35/windsurfing-7241074_1280.jpg"
                    />

                </div>
            </div>
            <div className = "space-y-3">
                <TextField
                fullWidth
                id = "firstName"
                name = "firstName"
                label = "First Name"
                value = {formik.values.firstName}
                onChange={formik.handleChange}
                />

                 <TextField
                fullWidth
                id = "lastName"
                name = "lastName"
                label = "Last Name"
                value = {formik.values.lastName}
                onChange={formik.handleChange}
                />   


            </div>
         </form>
        </Box>
      </Modal>
    </div>
  );
}
