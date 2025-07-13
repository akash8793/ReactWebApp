import * as React from 'react';
import { Grid, Paper, Box, Typography, Button, CircularProgress } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import SvgIcon from '@mui/material/SvgIcon';

// Custom icon
function CustomIcon(props) {
  return (
    <SvgIcon {...props}>
      <path
        d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SvgIcon>
  );
}

// Styled Material UI Card
const StyledCard = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  borderRadius: '12px',
  padding: theme.spacing(1),
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  minHeight: '120px',
  minWidth: '210px',
  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: '0 6px 16px rgba(0,0,0,0.1)',
  },
}));

const BoxWithIcon = ({ link = '#', title = 'Card Title' }) => {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Link to={link} style={{ textDecoration: 'none' }}>
        <StyledCard>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box position="relative" display="inline-flex" mr={1.5}>
              <CircularProgress
                variant="determinate"
                value={20}
                size={34}
                thickness={4}
                color="inherit"
              />
              <Box
                sx={{
                  top: 0,
                  left: 0,
                  bottom: 0,
                  right: 0,
                  position: 'absolute',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <CustomIcon fontSize="inherit" />
              </Box>
            </Box>

            <Box>
              <Typography
                variant="subtitle1"
                sx={{
                  color: '#FFB74D', 
                  fontWeight: 'bold', 
                  fontSize: '1.1rem',
                  textShadow: '0 1px 2px rgba(0,0,0,0.2)', 
                  letterSpacing: '0.02em',
                  textTransform: 'capitalize',
                }}
              >
                {title}
              </Typography>

              <Typography variant="h6" fontWeight={600} sx={{ fontSize: '1.1rem' }}>
                $432.6M
              </Typography>
            </Box>
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1.5 }}>
            <Button
              variant="outlined"
              size="small"
              sx={{ color: 'inherit', borderRadius: '18px', borderColor: 'rgba(255,255,255,0.5)', fontSize: '0.7rem', px: 1, textTransform: 'none' }}
            >
              Watchlist
            </Button>
            <Button
              variant="contained"
              color="secondary"
              size="small"
              sx={{ fontSize: '0.7rem', borderRadius: '18px', px: 1.2, textTransform: 'none' }}
            >
              Breakdown
            </Button>
          </Box>
        </StyledCard>
      </Link>
    </Grid>
  );
};

export default BoxWithIcon;
