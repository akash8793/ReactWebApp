import React from 'react';
import { Box, Grid, Paper, Typography } from '@mui/material';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    ArcElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line, Bar, Doughnut } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    ArcElement,
    Title,
    Tooltip,
    Legend
);

const Dashboard = () => {
    const lineData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets: [
            {
                label: 'Revenue ($)',
                data: [1200, 1900, 3000, 2500, 3200],
                borderColor: '#3f51b5',
                backgroundColor: 'rgba(63, 81, 181, 0.2)',
                tension: 0.4,
                fill: true,
            },
        ],
    };

    const barData = {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
        datasets: [
            {
                label: 'User Signups',
                data: [30, 45, 28, 60, 40],
                backgroundColor: '#4caf50',
            },
        ],
    };

    const doughnutData = {
        labels: ['Direct', 'Referral', 'Social'],
        datasets: [
            {
                label: 'Traffic Sources',
                data: [55, 25, 20],
                backgroundColor: ['#3f51b5', '#90caf9', '#e91e63'],
                borderWidth: 1,
            },
        ],
    };

    const chartOptions = {
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    font: {
                        size: 14,
                    },
                },
            },
        },
    };

    return (
        <Box sx={{ height: '100%', width: '100%', overflow: 'hidden', boxSizing: 'border-box' }}>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', ml: 1, mt: 1, color: "red" }}>
                Dashboard
            </Typography>
            <Grid
                container
                spacing={1}
                sx={{
                    width: '100%',
                    px: 1,
                    boxSizing: 'border-box',
                }}
            >
                <Grid item xs={12} sm={6} lg={4}>
                    <Paper elevation={3} sx={{ height: '100%', p: 1, boxSizing: 'border-box' }}>
                        <Typography variant="h6" sx={{ mb: 1, fontWeight: 'bold' }}>
                            Revenue Over Time
                        </Typography>
                        <Box sx={{ height: '250px' }}> {/* Reduce height to fit within viewport */}
                            <Line data={lineData} options={chartOptions} />
                        </Box>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} lg={4}>
                    <Paper elevation={3} sx={{ height: '100%', p: 1, boxSizing: 'border-box' }}>
                        <Typography variant="h6" sx={{ mb: 1, fontWeight: 'bold' }}>
                            User Signups
                        </Typography>
                        <Box sx={{ height: '250px' }}>
                            <Bar data={barData} options={chartOptions} />
                        </Box>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} lg={4}>
                    <Paper elevation={3} sx={{ height: '100%', p: 1, boxSizing: 'border-box' }}>
                        <Typography variant="h6" sx={{ mb: 1, fontWeight: 'bold' }}>
                            Traffic Sources
                        </Typography>
                        <Box sx={{ height: '250px' }}>
                            <Doughnut data={doughnutData} options={chartOptions} />
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Dashboard;