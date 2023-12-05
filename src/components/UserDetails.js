import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Typography, Avatar } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const UserDetails = () => {
  const { username, email } = useSelector((state) => state.user);

  if (!username || !email) {
    return null;
  }
  return (
    <div className='flex flex-col gap-10 h-screen'>
      <div className='bg-blue-100 p-4 rounded-lg h-1/4'>
        <Container maxWidth="md">
          <div className="flex items-center justify-center">
            <Avatar
              alt={username}
              src="/profile/photo.jpg" 
              style={{ width: '100px', height: '100px', marginRight: '16px' }}
            >
              <AccountCircleIcon style={{ fontSize: '70px' }} />
            </Avatar>
            <div>
              <Typography variant="h5" gutterBottom>
                User Details
              </Typography>
              <Typography variant="body1">
                <strong>Name:</strong> {username}
              </Typography>
              <Typography variant="body1">
                <strong>Email:</strong> {email}
              </Typography>
            </div>
          </div>
        </Container>

      </div>
      <div className='flex h-24 gap-10'>
        <div className='w-1/2 rounded-lg text-center  bg-blue-100'>No data found</div>
        <div className='w-1/2 rounded-lg text-center bg-blue-100'>No data found</div>
      </div>
      <div className='flex h-24 gap-10'>
        <div className='w-1/2 rounded-lg text-center  bg-blue-100'>No data found</div>
        <div className='w-1/2 rounded-lg text-center bg-blue-100'>No data found</div>
      </div>
    </div>
  );
};

export default UserDetails;
