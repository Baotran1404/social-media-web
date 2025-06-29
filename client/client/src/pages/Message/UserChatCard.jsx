import React from 'react';
import { useSelector } from 'react-redux';
import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';
import CardHeader from '@mui/material/CardHeader';
import IconButton from '@mui/material/IconButton';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const UserChatCard = ({ chat }) => {
  const { auth } = useSelector((store) => store);

  // Kiểm tra an toàn
  if (!chat || !chat.users || chat.users.length < 2) {
    return null; // hoặc hiển thị dòng thông báo lỗi
  }

  const isCurrentUserFirst = auth.user?.id === chat.users[0]?.id;
  const otherUser = isCurrentUserFirst ? chat.users[1] : chat.users[0];
  const fullName = `${otherUser?.firstName || ''} ${otherUser?.lastName || ''}`;

  return (
    <Card sx={{ marginBottom: 1 }}>
      <CardHeader
        avatar={
          <Avatar
            sx={{
              width: '3.5rem',
              height: '3.5rem',
              fontSize: '1.5rem',
              bgcolor: '#191',
              color: 'rgb(88, 199, 250)',
            }}
            src="https://cdn.pixabay.com/photo/2019/12/10/13/31/woman-4685862_1280.jpg"
          />
        }
        action={
          <IconButton>
            <MoreHorizIcon />
          </IconButton>
        }
        title={fullName}
        subheader="new message"
      />
    </Card>
  );
};

export default UserChatCard;
