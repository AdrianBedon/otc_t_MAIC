import React from 'react';
import { List, ListItem, ListItemText, ListItemIcon, Divider } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const SideNavbar = ({ handleCategoryChange }) => {
    const options = [
      { text: 'Tramo 60', icon: <ArrowForwardIosIcon /> },
      { text: 'Adelanto', icon: <CheckCircleOutlineIcon /> },
      { text: 'Tramo 30', icon: <ArrowBackIosIcon /> },
      { text: 'Tramo 0', icon: <AccessTimeIcon /> },
    ];

    return (
        <div style={{ width: '200px', backgroundColor: '#f4f4f4', height: '100vh', paddingTop: '20px' }}>
          <List>
            {options.map((option, index) => (
              <React.Fragment key={index}>
                <ListItem button={true} onClick={() => handleCategoryChange(option.text)}>
                  <ListItemIcon>{option.icon}</ListItemIcon>
                  <ListItemText primary={option.text} />
                </ListItem>
                <Divider />
              </React.Fragment>
            ))}
          </List>
        </div>
      );
    };

export default SideNavbar;
