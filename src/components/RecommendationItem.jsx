import React from 'react';
import { ListItem, ListItemText, Box, IconButton, Divider, Typography } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

const RecommendationItem = ({ recommendation, liked, onLikeClick, blocked, onClick }) => {
  return (
    <React.Fragment>
      <ListItem button={!blocked} disabled={blocked} onClick={!blocked ? onClick : null}>
        <ListItemText
          primary={recommendation.type}
          secondary={recommendation.detail}
        />
      </ListItem>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="body2" color="textSecondary">
          ¿Te fue útil esta recomendación?
        </Typography>
        <IconButton onClick={onLikeClick}>
          {liked ? <FavoriteIcon color="error" /> : <FavoriteBorderIcon />}
        </IconButton>
      </Box>
      <Divider />
    </React.Fragment>
  );
};

export default RecommendationItem;
