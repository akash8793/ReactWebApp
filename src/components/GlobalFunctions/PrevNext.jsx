import React from 'react';
import { Button, Stack, Tooltip } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate } from 'react-router-dom';

// Reusable PrevNext component with tooltips and responsive design
const PrevNext = ({ handlePrevious, handleNext }) => {

    return (
        <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={{ xs: 1, sm: 1 }}
            sx={{
                justifyContent: 'center',
                alignItems: 'center',
                flexWrap: 'wrap',
                padding: { xs: 1, sm: 1.5 },
            }}
        >
            {/* Previous Button */}
            <Tooltip title="Previous" arrow>
                <Button
                    variant="contained"
                    onClick={handlePrevious}
                >
                    <ArrowBackIcon />
                </Button>
            </Tooltip>

            {/* Next Button */}
            <Tooltip title="Next" arrow>
                <Button
                    variant="contained"
                    onClick={handleNext}
                >
                    <ArrowForwardIcon />
                </Button>
            </Tooltip>
        </Stack>
    );
};

export default PrevNext;