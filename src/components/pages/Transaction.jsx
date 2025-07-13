import React from 'react';
import Box from '@mui/material/Box';
import BoxWithIcon from '../../atoms/BoxWithIcon';

const Transaction = () => {
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
            <BoxWithIcon link="/salesinvoice" title="Sales Invoice" />
            <BoxWithIcon link="/" title="Purchase Invoice" />
            <BoxWithIcon link="/" title="Sales Return" />
            <BoxWithIcon link="/" title="Purchase Return" />
            <BoxWithIcon link="/" title="Credit Note" />
            <BoxWithIcon link="/" title="Debit Note" />
            <BoxWithIcon link="/" title="Receipt Voucher" />
            <BoxWithIcon link="/" title="Payment Voucher" />
            <BoxWithIcon link="/" title="Contra Entry" />
            <BoxWithIcon link="/" title="Contra Entry" />
        </Box>
    );
};

export default Transaction;
