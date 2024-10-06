import React from 'react';
import { List } from '@mui/material';
import RecommendationItem from './RecommendationItem';

const RecommendationsList = ({ recommendations, liked, handleLikeClick }) => {
  return (
    <List>
      {recommendations.map((recommendation, index) => (
        <RecommendationItem
          key={index}
          recommendation={recommendation}
          liked={liked[index]}
          onLikeClick={() => handleLikeClick(index)}
        />
      ))}
    </List>
  );
};

export default RecommendationsList;
