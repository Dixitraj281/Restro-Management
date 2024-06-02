import React from 'react';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const Orders = () => {
  return (
    <Box component={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Typography variant="h4" gutterBottom>
        Orders
      </Typography>
      {/* Orders content */}
    </Box>
  );
};

export default Orders;
