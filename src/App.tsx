import React, { useState, useEffect } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Link,
    Navigate
} from 'react-router-dom';
import Counter from './components/Counter/Counter';
import UserForm from './components/UserForm/UserForm';
import TextEditor from './components/TextEditor/TextEditor';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import Dashboard from './components/Dashboard/Dashboard';
import { Box, AppBar, Toolbar, Button } from '@mui/material';
import './App.css'; // Import the CSS file

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const storedLoginStatus = localStorage.getItem('isLoggedIn');
        if (storedLoginStatus === 'true') {
            setIsLoggedIn(true);
        }
    }, []);

    const handleLogin = (username: string) => {
        setIsLoggedIn(true);
        localStorage.setItem('isLoggedIn', 'true');
    };

    const handleSignup = (username: string) => {
        setIsLoggedIn(true);
        localStorage.setItem('isLoggedIn', 'true');
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        localStorage.removeItem('isLoggedIn');
    };

    return (
        <Router>
            <AppBar position="static">
                <Toolbar>
                    {isLoggedIn ? (
                        <>
                            <Button color="inherit" component={Link} to="/">
                                Counter
                            </Button>
                            <Button color="inherit" component={Link} to="/form">
                                User Form
                            </Button>
                            <Button color="inherit" component={Link} to="/editor">
                                Editor
                            </Button>
                            <Button color="inherit" component={Link} to="/dashboard">
                                Dashboard
                            </Button>
                            <Button color="inherit" onClick={handleLogout}>
                                Logout
                            </Button>
                        </>
                    ) : (
                        <>
                            <Button color="inherit" component={Link} to="/login">
                                Login
                            </Button>
                            <Button color="inherit" component={Link} to="/signup">
                                Sign Up
                            </Button>
                        </>
                    )}
                </Toolbar>
            </AppBar>
            <Box sx={{ padding: '20px' }}>
                <Routes>
                    <Route path="/login" element={<Login onLogin={handleLogin} />} />
                    <Route path="/signup" element={<Signup onSignup={handleSignup} />} />
                    <Route
                        path="/"
                        element={isLoggedIn ? <Counter /> : <Navigate to="/login" />}
                    />
                    <Route
                        path="/form"
                        element={isLoggedIn ? <UserForm /> : <Navigate to="/login" />}
                    />
                    <Route
                        path="/editor"
                        element={isLoggedIn ? <TextEditor /> : <Navigate to="/login" />}
                    />
                    <Route
                        path="/dashboard"
                        element={isLoggedIn ? <Dashboard /> : <Navigate to="/login" />}
                    />
                </Routes>
            </Box>
        </Router>
    );
}

export default App;
