import React, { useEffect, useState } from "react";
import RecommendationItem from "./RecommendationItem";
import PropTypes from "prop-types";

const RecommendationsList = ({ client }) => {
  const [recommendations, setRecommendations] = useState([]);

  // Fetch recommendations from the API
  const fetchRecommendations = async (numTelefono) => {
    try {
      const response = await fetch(
        `http://localhost:8080/api/scoring/nba-nbc/${numTelefono}`
      );
      if (response.ok) {
        const data = await response.json();
        console.log("Fetched recommendations:", data);
        setRecommendations(data);
      }
    } catch (error) {
      console.error("Error fetching recommendations:", error);
    }
  };

  // Update a recommendation locally
  const handleUpdate = (updatedRecommendation) => {
    setRecommendations((prev) =>
      prev.map((rec) =>
        rec.id === updatedRecommendation.id ? updatedRecommendation : rec
      )
    );
  };

  // Fetch recommendations when the client changes
  useEffect(() => {
    if (client?.numTelefono) {
      fetchRecommendations(client.numTelefono);
    }
  }, [client]);

  return (
    <div className="recommendation-list">
      {recommendations.map((recommendation) => (
        <RecommendationItem
          key={recommendation.id}
          data={[recommendation]} // Pass the recommendation as an array
          onUpdate={handleUpdate} // Handle updates
        />
      ))}
    </div>
  );
};

RecommendationsList.propTypes = {
  client: PropTypes.shape({
    numTelefono: PropTypes.string.isRequired,
  }).isRequired,
};

export default RecommendationsList;
