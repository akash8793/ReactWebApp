import React, { useState } from 'react';
import { Box, TextField, Button, Typography, InputAdornment, IconButton } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Email:', email, 'Password:', password);
    };

    return (
        <Box
            sx={{
                minHeight: '75vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                background: 'linear-gradient(135deg, #6B7280, #3B82F6)',
                fontFamily: 'Roboto, sans-serif',
                p: 2,
            }}
        >
            <Box
                className="login-card"
                sx={{
                    p: { xs: 2, sm: 4 },
                    borderRadius: 4,
                    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
                    background: 'white',
                    maxWidth: 400,
                    width: '100%',
                }}
            >
                <Typography
                    variant="h4"
                    align="center"
                    gutterBottom
                    sx={{ fontWeight: 'bold', color: '#1F2937' }}
                >
                    Welcome Back
                </Typography>
                <Typography variant="body2" align="center" sx={{ color: '#6B7280', mb: 3 }}>
                    Sign in to continue
                </Typography>
                <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <TextField
                        label="Email"
                        variant="outlined"
                        fullWidth
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="input-field"
                        sx={{
                            '& .MuiOutlinedInput-root': {
                                '&:hover fieldset': { borderColor: '#3B82F6' },
                                '&.Mui-focused fieldset': { borderColor: '#3B82F6' },
                            },
                            transition: 'all 0.3s ease',
                            '&:hover': { transform: 'scale(1.02)' },
                        }}
                    />
                    <TextField
                        label="Password"
                        variant="outlined"
                        type={showPassword ? 'text' : 'password'}
                        fullWidth
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="input-field"
                        sx={{
                            '& .MuiOutlinedInput-root': {
                                '&:hover fieldset': { borderColor: '#3B82F6' },
                                '&.Mui-focused fieldset': { borderColor: '#3B82F6' },
                            },
                            transition: 'all 0.3s ease',
                            '&:hover': { transform: 'scale(1.02)' },
                        }}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        onClick={() => setShowPassword(!showPassword)}
                                        edge="end"
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        fullWidth
                        className="login-button"
                        sx={{
                            background: 'linear-gradient(90deg, #3B82F6, #8B5CF6)',
                            color: 'white',
                            py: 1.5,
                            mt: 1,
                            transition: 'transform 0.3s ease',
                            '&:hover': {
                                transform: 'translateY(-2px)',
                                background: 'linear-gradient(90deg, #2563EB, #7C3AED)',
                            },
                        }}
                    >
                        Sign In
                    </Button>
                </Box>
                <Typography variant="body2" align="center" sx={{ mt: 2, color: '#6B7280' }}>
                    Don't have an account?{' '}
                    <Box
                        component="span"
                        sx={{ color: '#3B82F6', cursor: 'pointer', '&:hover': { textDecoration: 'underline' } }}
                    >
                        Sign up
                    </Box>
                </Typography>
            </Box>
        </Box>
    );
};

export default LoginPage;