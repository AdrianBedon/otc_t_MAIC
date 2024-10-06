import React from 'react';
import { ListItem, ListItemText, Box, IconButton, Divider, Typography } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

const RecommendationItem = ({ recommendation, liked, onLikeClick }) => {
  return (
    <React.Fragment>
      <ListItem>
        <ListItemText
          primary={recommendation.type}
          secondary={recommendation.detail}
        />
        {/* Feedback Section */}
        <Box display="flex" alignItems="center">
          <Typography variant="body2" color="textSecondary">
            ¿Te fue útil esta recomendación?
          </Typography>
          <IconButton onClick={onLikeClick}>
            {liked ? <FavoriteIcon color="error" /> : <FavoriteBorderIcon />}
          </IconButton>
        </Box>
      </ListItem>
      <Divider />
    </React.Fragment>
  );
};

export default RecommendationItem;
