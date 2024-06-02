import React from 'react';
import { Drawer, List, ListItem, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <Drawer variant="permanent">
      <List>
        <ListItem button component={Link} to="/dashboard">
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button component={Link} to="/orders">
          <ListItemText primary="Orders" />
        </ListItem>
        <ListItem button component={Link} to="/restaurants">
          <ListItemText primary="Restaurants" />
        </ListItem>
        <ListItem button component={Link} to="/users">
          <ListItemText primary="Users" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
