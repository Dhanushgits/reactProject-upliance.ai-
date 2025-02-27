import React, { useState, useEffect } from 'react';
import { TextField, Button, Box, Card, CardContent, Typography } from '@mui/material';
import { generateId } from '../../utils/helpers';
import { UserData } from '../../models/User';

const UserForm: React.FC = () => {
  const [userData, setUserData] = useState<UserData>({
    id: '',
    name: '',
    address: '',
    email: '',
    phone: '',
  });
  const [isDirty, setIsDirty] = useState(false);

  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      if (isDirty) {
        event.preventDefault();
        event.returnValue = "You have unsaved changes. Are you sure you want to leave?";
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [isDirty]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setIsDirty(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const id = generateId();
    const userDataWithId = { ...userData, id };
    localStorage.setItem('userData', JSON.stringify(userDataWithId));
    setIsDirty(false);
    alert('Data saved!');
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', backgroundColor: '#f4f6f8' }}>
      <Card sx={{ maxWidth: 500, width: '100%', padding: 3, boxShadow: 5, borderRadius: 3 }}>
        <CardContent>
          <Typography variant="h5" sx={{ textAlign: 'center', fontWeight: 'bold', color: '#1976d2', marginBottom: 2 }}>
            User Information
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <TextField label="Name" name="name" value={userData.name} onChange={handleChange} required fullWidth />
            <TextField label="Address" name="address" value={userData.address} onChange={handleChange} required fullWidth />
            <TextField label="Email" name="email" value={userData.email} onChange={handleChange} type="email" required fullWidth />
            <TextField label="Phone" name="phone" value={userData.phone} onChange={handleChange} required fullWidth />
            <Button variant="contained" type="submit" sx={{ backgroundColor: '#1976d2', fontWeight: 'bold' }}>
              Save
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default UserForm;
