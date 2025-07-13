import React from 'react';
import { Box, Grid, TextField } from '@mui/material';

const SalesInvoice = () => {
    return (
        <Box sx={{ flexGrow: 1, p: 2 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6} lg={6} sx={{ backgroundColor: 'red' }}>
                            <TextField label="Name" fullWidth />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
};

export default SalesInvoice;
