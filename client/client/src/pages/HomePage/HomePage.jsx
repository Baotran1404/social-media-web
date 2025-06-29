import React from 'react'; // Always needed for React components
import Sidebar from "../../components/Sidebar/Sidebar.jsx"; // For the Sidebar component
import { Grid } from '@mui/material'; // For layout
import { useLocation, Routes, Route } from "react-router-dom"; // For routing and location
import MiddlePart from "../../components/MiddlePart/MiddlePart.jsx"; // For the main content
import Reels from "../../components/Reels/Reels.jsx"; // For the reels page
import CreateReelsForm from "../../components/Reels/CreateReelsForm.jsx"; // For the create reels form
import Profile from "../Profile/Profile.jsx"; // For the profile page
import HomeRight from "../../components/HomeRight/HomeRight.jsx"; // For the right sidebar (add this if you use <HomeRight />)
import { useDispatch, useSelector } from 'react-redux';




const HomePage= () =>{

    const dispatch= useDispatch();
    const location = useLocation();
    const jwt = localStorage.getItem("jwt");
    const {auth} = useSelector(store=>store);
    console.log("auth", auth)



    return (
        <div className ='px-20'>

    <Grid container spacing = {0}>
            <Grid item xs={0} lg = {3}>

                <div className ='sticky top-0'>

                    <Sidebar/>

                </div>
            </Grid>

            <Grid lg = {location.pathname == "/"?6:9}
            item className = 'px-5 flex justify-center' 
            xs ={12}>     
                <Routes>
                    <Route path ="/" element = {<MiddlePart/>}/>
                    <Route path ="/reels" element = {<Reels/>}/>
                    <Route path ="/create-reels" element = {<CreateReelsForm/>}/>
                   <Route path="/profile/:id" element={<Profile />} />

                </Routes>
           
            </Grid> 
            {location.pathname ==="/" && <Grid item lg ={3} className = "relative">
                <div className = "sticky top-0 w-full">
                    <HomeRight/>

                </div>

            </Grid>}
        </Grid>
        </div>
    )
}

export default HomePage