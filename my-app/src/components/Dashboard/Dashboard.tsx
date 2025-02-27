// src/components/Dashboard/Dashboard.tsx
import React from 'react';
import { Box, Typography, Card, CardContent, Avatar } from '@mui/material';

const Dashboard: React.FC = () => {
    const storedUserData = localStorage.getItem('userData');
    const userData = storedUserData ? JSON.parse(storedUserData) : null;

    return (
        <Box sx={{ padding: '30px', textAlign: 'center' }}>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: '#1976d2' }}>
                Dashboard
            </Typography>

            <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                <Card sx={{ minWidth: 300, boxShadow: 3, borderRadius: 3 }}>
                    <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <Avatar sx={{ width: 60, height: 60, bgcolor: '#1976d2', marginBottom: 2 }}>
                            {userData?.name ? userData.name.charAt(0).toUpperCase() : "?"}
                        </Avatar>
                        <Typography variant="h6" gutterBottom>
                            User Profile
                        </Typography>
                        {userData ? (
                            <>
                                <Typography variant="body1"><strong>Name:</strong> {userData.name}</Typography>
                                <Typography variant="body1"><strong>Email:</strong> {userData.email}</Typography>
                            </>
                        ) : (
                            <Typography variant="body2" color="textSecondary">
                                No user data available.
                            </Typography>
                        )}
                    </CardContent>
                </Card>
            </Box>
        </Box>
    );
};

export default Dashboard;
