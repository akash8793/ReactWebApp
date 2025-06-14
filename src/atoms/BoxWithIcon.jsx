import React from 'react';
import { Grid, Box, Paper, Typography } from '@mui/material';
import PeopleIcon from '@mui/icons-material/People'; // Icon for Total Count
import CheckCircleIcon from '@mui/icons-material/CheckCircle'; // Icon for Active Count
import CancelIcon from '@mui/icons-material/Cancel'; // Icon for Inactive Count
import DownloadIcon from '@mui/icons-material/Download'; // Icon for the download button
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'; // Icon for the heart
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

const Item = styled(Paper)(({ theme }) => ({
  background: `linear-gradient(135deg, ${
    theme.palette.mode === 'dark' ? '#3b82f6' : '#e0f7fa'
  } 0%, ${theme.palette.mode === 'dark' ? '#1e40af' : '#b3e5fc'} 100%)`,
  borderRadius: '8px',
  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.primary,
  position: 'relative',
  overflow: 'hidden',
  transition: 'transform 0.2s',
  border: '1px solid rgba(0,0,0,0.1)',
  '&:hover': {
    transform: 'scale(1.02)',
  },
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(1.5),
  },
}));

const BoxWithIcon = ({
  totalCount,
  activeCount,
  inactiveCount,
  link,
  iconColor = '#0288d1', // Blue shade matching the image
  title,
}) => {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Link to={link} style={{ textDecoration: 'none' }}>
        <Item
          sx={{
            width: '100%',
            minWidth: '230px',
            margin: 'auto',
          }}
        >
          {/* Heart Icon in Top-Right */}
          <Box
            sx={{
              position: 'absolute',
              top: 8,
              right: 8,
            }}
          >
            <FavoriteBorderIcon sx={{ fontSize: 20, color: '#f44336' }} />
          </Box>

          {/* Title */}
          <Typography
            sx={{
              fontWeight: 600,
              fontSize: { xs: '14px', sm: '16px' },
              mb: 1.5,
              color: '#01579b', // Darker blue for title
              fontFamily: '"Roboto", sans-serif',
            }}
          >
            {title}
          </Typography>

          {/* Stats and Download Icon */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              px: { xs: 1, sm: 2 },
            }}
          >
            {/* Stats (Total, Active, Inactive) */}
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                textAlign: 'left',
                fontSize: { xs: '12px', sm: '13px' },
                fontWeight: 500,
                color: '#01579b', // Darker blue for text
                gap: '8px',
                fontFamily: '"Roboto", sans-serif',
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <PeopleIcon sx={{ color: iconColor, fontSize: '20px' }} />
                <span>Total Count: {totalCount}</span>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <CheckCircleIcon sx={{ color: iconColor, fontSize: '20px' }} />
                <span>Active Count: {activeCount}</span>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <CancelIcon sx={{ color: iconColor, fontSize: '20px' }} />
                <span>Inactive Count: {inactiveCount}</span>
              </Box>
            </Box>

            {/* Download Icon in Circular Button */}
            <Box
              sx={{
                backgroundColor: '#0288d1', // Blue background for the button
                borderRadius: '50%',
                p: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
              }}
            >
              <DownloadIcon sx={{ color: '#fff', fontSize: '24px' }} />
            </Box>
          </Box>
        </Item>
      </Link>
    </Grid>
  );
};

export default BoxWithIcon;