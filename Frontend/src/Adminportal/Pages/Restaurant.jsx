import React from 'react';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const Restaurants = () => {
  return (
    <Box component={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Typography variant="h4" gutterBottom>
        Restaurants
      </Typography>
      {/* Restaurants content */}
    </Box>
  );
};

export default Restaurants;
