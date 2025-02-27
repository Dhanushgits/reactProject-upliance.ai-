import React, { useState, useEffect } from 'react';
import { Box, Button, Typography } from '@mui/material';
import './Counter.css';

const Counter: React.FC = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const storedCount = localStorage.getItem('count');
        if (storedCount) {
            setCount(parseInt(storedCount, 10));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('count', count.toString());
    }, [count]);

    const increment = () => setCount(prev => prev + 1);
    const decrement = () => setCount(prev => prev - 1);
    const reset = () => setCount(0);

    // Dynamic styling
    const backgroundHeight = Math.min(count * 5, 100) + '%';
    const backgroundLightness = Math.max(90 - count * 2, 30);
    const shadowIntensity = Math.min(count * 2, 20);

    return (
        <Box
            className="counter-container"
            sx={{
                position: 'relative',
                width: '100%',
                maxWidth: '400px',
                height: '250px',
                margin: 'auto',
                background: 'linear-gradient(to bottom, #1e88e5, #1565c0)',
                boxShadow: `0px 10px 20px rgba(0, 0, 0, ${shadowIntensity / 100})`,
                overflow: 'hidden',
                padding: '20px',
                borderRadius: '12px',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                transition: 'box-shadow 0.3s ease-in-out'
            }}
        >
            <Box
                sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '100%',
                    height: backgroundHeight,
                    backgroundColor: `hsl(220, 80%, ${backgroundLightness}%)`,
                    borderRadius: '0 0 12px 12px',
                    transition: 'height 0.5s linear, background-color 0.5s linear'
                }}
            />
            <Typography 
                variant="h4" 
                sx={{ 
                    position: 'relative', 
                    zIndex: 1, 
                    fontWeight: 'bold', 
                    color: 'white',
                    textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
                    animation: count !== 0 ? 'bounce 0.5s' : 'none'
                }}
            >
                Counter: {count}
            </Typography>
            <Box sx={{ marginTop: '20px', position: 'relative', zIndex: 1, display: 'flex', gap: '12px' }}>
                <Button 
                    variant="contained" 
                    onClick={increment} 
                    sx={{ 
                        fontWeight: 'bold', 
                        background: '#fff', 
                        color: '#000',
                        '&:hover': { 
                            background: '#f5f5f5' 
                        } 
                    }}
                >
                    +
                </Button>
                <Button 
                    variant="contained" 
                    onClick={reset} 
                    sx={{ 
                        fontWeight: 'bold', 
                        background: '#fff', 
                        color: '#000',
                        '&:hover': { 
                            background: '#f5f5f5' 
                        } 
                    }}
                >
                    Reset
                </Button>
                <Button 
                    variant="contained" 
                    onClick={decrement} 
                    sx={{ 
                        fontWeight: 'bold', 
                        background: '#fff', 
                        color: '#000',
                        '&:hover': { 
                            background: '#f5f5f5' 
                        } 
                    }}
                >
                    -
                </Button>
            </Box>
        </Box>
    );
};

export default Counter;

