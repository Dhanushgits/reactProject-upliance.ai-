import React, { useState } from 'react';
import { TextField, Button, Box, Card, CardContent, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

interface SignupProps {
    onSignup: (username: string) => void;
}

const Signup: React.FC<SignupProps> = ({ onSignup }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        localStorage.setItem('mockUsername', username);
        localStorage.setItem('mockPassword', password);
        localStorage.setItem('isLoggedIn', 'true');
        onSignup(username);
        navigate('/');
    };

    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            background: 'linear-gradient(to right, #ff6b6b, #f94c66)',
        }}>
            <Card sx={{
                maxWidth: 400,
                width: '90%',
                padding: '25px',
                borderRadius: '12px',
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)',
                background: 'white',
            }}>
                <CardContent>
                    <Typography variant="h5" sx={{ textAlign: 'center', fontWeight: 'bold', mb: 2 }}>
                        Sign Up
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                        <TextField
                            fullWidth
                            label="Username"
                            name="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                        <TextField
                            fullWidth
                            label="Password"
                            name="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <Button
                            variant="contained"
                            type="submit"
                            sx={{
                                fontWeight: 'bold',
                                mt: 1,
                                background: 'linear-gradient(to right, #ff6b6b, #f94c66)',
                                '&:hover': { background: '#d43f3f' }
                            }}
                        >
                            Sign Up
                        </Button>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    );
};

export default Signup;
