import React from 'react'
import {Grid} from '@mui/material'
import Login from './Login'
import Card from '@mui/material/Card';
import Register from './Register';
import { Routes, Route } from 'react-router-dom';




const Authentication = () => {



    return (
        <div>
        <Grid container>
            <Grid className = 'h-screen overflow-hidden' item xs = {7}>
                < img className = 'h-full w-full' src = "https://cdn.pixabay.com/photo/2015/05/15/21/36/finger-769300_1280.jpg" alt =""/>
                </Grid>
                <Grid item xs = {5}>
                    <div className ='px-20 flex-col justify-center h-full'>

                        <Card className = 'card p-8'>
                            
            <div className ='flex flex-col items-center mb-5 space-y-1' > 
            <h1 className ='logo text-center'> TranSocialWeb</h1>
            <p className = 'text-center text-sm w-[70&]'>Join this web to share your thinking and connect with your friends</p>
            </div>      
                <Routes>

                        <Route path ="/" element = {<Login/>}> </Route>
                        <Route path ="/login" element = {<Login/>}> </Route>
                        <Route path ="/register" element = {<Register/>}> </Route>
                    </Routes>      
                    
                    

                        </Card>

                    </div>

                </Grid>
        </Grid>
        </div>
    )
}
export default Authentication 