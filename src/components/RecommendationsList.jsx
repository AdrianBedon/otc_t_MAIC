import React from 'react';
import { List } from '@mui/material';
import RecommendationItem from './RecommendationItem';

const RecommendationsList = ({ recommendations, liked, handleLikeClick, handleBlockClick, blocked, feedbackBlocked }) => {
    return (
      <List>
        {recommendations.map((recommendation, index) => (
          <RecommendationItem
            key={index}
            recommendation={recommendation}
            liked={liked[index]}
            onLikeClick={() => handleLikeClick(index)}
            onClick={() => handleBlockClick(index)}
            blocked={blocked[index]}
            feedbackBlocked={feedbackBlocked[index]}
          />
        ))}
      </List>
    );
  };

export default RecommendationsList;
