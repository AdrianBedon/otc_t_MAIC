import React from 'react';
import { List, ListItem, ListItemText, ListItemIcon, Divider, Typography } from '@mui/material';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

const clients = [
    { name: 'Marco Aurelio', status: 'Cercano a 90 días de deuda', risk: 'high', icon: <RemoveCircleOutlineIcon /> },
    { name: 'Sofía Arteaga', status: 'Cercano a 90 días de deuda', risk: 'high', icon: <RemoveCircleOutlineIcon /> },
    { name: 'Juan Torres', status: 'Cercano a 60 días de deuda', risk: 'medium', icon: <ArrowDropDownIcon /> },
    { name: 'Alejandro Ordoñez', status: 'Entrado a 30 días de deuda', risk: 'low', icon: <ArrowDropUpIcon /> },
    { name: 'María Flores', status: 'Entrado a 30 días de deuda', risk: 'low', icon: <ArrowDropUpIcon /> },
  ];

  const ClientList = ({ searchQuery, category }) => {
    const filteredClients = clients
      .filter((client) =>
        client.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
      .filter((client) => {
        if (!category) return true;
        if (category === 'Tramo 60' && client.risk === 'high') return true;
        if (category === 'Adelanto') return true;
        if (category === 'Tramo 30' && client.risk === 'medium') return true;
        if (category === 'Tramo 0' && client.risk === 'low') return true;
        return false;
      });
  
    return (
      <List>
        {filteredClients.length > 0 ? (
          filteredClients.map((client, index) => (
            <React.Fragment key={index}>
              <ListItem button>
                <ListItemIcon>{client.icon}</ListItemIcon>
                <ListItemText
                  primary={client.name}
                  secondary={
                    <Typography variant="body2" color="textSecondary">
                      {client.status}
                    </Typography>
                  }
                />
              </ListItem>
              <Divider />
            </React.Fragment>
          ))
        ) : (
          <Typography variant="body1" color="textSecondary" style={{ padding: '20px' }}>
            No clients found.
          </Typography>
        )}
      </List>
    );
  };

export default ClientList;
