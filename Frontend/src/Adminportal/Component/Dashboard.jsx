import React from 'react';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const Dashboard = () => {
  return (
    <Box component={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Typography variant="h4" gutterBottom>
        Welcome to Admin Dashboard
      </Typography>
      {/* Additional dashboard content */}
    </Box>
  );
};

export default Dashboard;
