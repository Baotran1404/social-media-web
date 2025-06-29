import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import { searchUser } from '../../Redux/Auth/auth.action';
import { createChat } from '../../Redux/Message/message.action';

const SearchUser = () => {

  const [username, setUsername] = useState("");
const dispatch = useDispatch();

const {message, auth} = useSelector(store => store);

  const handleSearchUser = (e) => {
    setUsername(e.target.value);
    console.log("Searching user...", auth.searchUser);
    dispatch(searchUser(username))
  };

  const handleClick = (id) => {
    dispatch(createChat({userId:id}))
  };

  return (
    <div>
      <div className ="py-5 relative">
        <input className ='bg-transparent 
        border border-[#3b4054] 
        rounded-full w-full 
        px-5 py-3 
         outline-none'
        type="text" 
        placeholder='Search user...'
        onChange={handleSearchUser}
        />
              { username && (
auth.searchUser.map((item)=>        <Card key={item.id}
className ="absolute w-full z-10 top-[4.5rem] cursor-pointer">

          <CardHeader onClick={() => {
            handleClick();
            setUsername("");
          }}
          avatar={<Avatar 
            src ='https://cdn.pixabay.com/photo/2020/05/17/20/21/cat-5183427_1280.jpg'
            />}
            title = {item.firstName + " " + item.lastName}
            subheader={item.firstName.toLowerCase() + " " + 
              item.lastName.toLowerCase()}
          />

        </Card>)

     ) }

      </div>

    </div>
  );
};

export default SearchUser;