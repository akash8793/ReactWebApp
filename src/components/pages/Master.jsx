import React from 'react';
import Box from '@mui/material/Box';
import BoxWithIcon from '../../atoms/BoxWithIcon';

const Master = () => {
    return (
        <Box
            sx={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))',
                gap: 2,
                padding: 2,
                // Optional: prevent container from shrinking too much
                minWidth: '90%',
                overflowX: 'auto',
            }}
        >
            <BoxWithIcon link="/categorymst" title="Category" />
            <BoxWithIcon link="/" title="Item" />
            <BoxWithIcon link="/" title="Item Code" />
            <BoxWithIcon link="/" title="Shade" />
            <BoxWithIcon link="/" title="Brand" />
            <BoxWithIcon link="/" title="Quality" />
            <BoxWithIcon link="/" title="Unit" />
            <BoxWithIcon link="/" title="Range" />
            <BoxWithIcon link="/" title="Size" />
            <BoxWithIcon link="/" title="Item Type" />
        </Box>
    );
};

export default Master;