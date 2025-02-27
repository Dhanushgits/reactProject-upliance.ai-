import React, { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Box, Card, CardContent, Typography, Avatar } from '@mui/material';

const TextEditor: React.FC = () => {
  const [text, setText] = useState('');
  const [userData, setUserData] = useState<any>(null);

  useEffect(() => {
    const storedData = localStorage.getItem('userData');
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setUserData(parsedData);
      setText(JSON.stringify(parsedData, null, 2)); // Format JSON for display
    }
  }, []);

  const handleChange = (value: string) => {
    setText(value);
  };

  return (
    <Box sx={{ padding: '20px', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: '#1976d2' }}>
        User Data in Rich Text Editor
      </Typography>

      {userData ? (
        <Card sx={{ minWidth: 400, boxShadow: 3, borderRadius: 3, padding: 2 }}>
          <CardContent sx={{ textAlign: 'center' }}>
            <Avatar sx={{ width: 60, height: 60, bgcolor: '#1976d2', margin: '0 auto 10px' }}>
              {userData.name.charAt(0).toUpperCase()}
            </Avatar>
            <Typography variant="h6" gutterBottom>User Profile</Typography>
            <Typography><strong>Name:</strong> {userData.name}</Typography>
            <Typography><strong>Address:</strong> {userData.address}</Typography>
            <Typography><strong>Email:</strong> {userData.email}</Typography>
            <Typography><strong>Phone:</strong> {userData.phone}</Typography>
          </CardContent>
        </Card>
      ) : (
        <Typography>No user data available.</Typography>
      )}

      <Box sx={{ marginTop: '20px', width: '100%', maxWidth: '600px' }}>
        <ReactQuill value={text} onChange={handleChange} />
      </Box>
    </Box>
  );
};

export default TextEditor;
