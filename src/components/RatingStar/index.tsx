import React, { useState } from "react";
import { Star } from 'lucide-react';// Adjust the import based on your file structure

type RatingProps = {
  onChange: (rating: number) => void; // Callback function to return selected rating
};

const Rating: React.FC<RatingProps> = ({ onChange }) => {
  const [selectedRating, setSelectedRating] = useState(0); // State to store the selected rating

  const handleRating = (rating: number) => {
    setSelectedRating(rating); // Update the selected rating
    onChange(rating); // Call the onChange callback with the selected rating
  };

  return (
    <div style={{ display: "flex", gap: "8px", flexDirection: 'row-reverse' }}>
      {Array.from({ length: 5 }, (_, index) => {
        const starIndex = index + 1;
        return (
          <Star
            key={starIndex}
            strokeWidth={1}
            size={24}
            fill={starIndex <= selectedRating ? "#facc15" : "gray"} // Fill based on selection
            stroke="none"
            onClick={() => handleRating(starIndex)} // Handle click to set the rating
            style={{ cursor: "pointer" }} // Add pointer cursor for interactivity
          />
        );
      })}
    </div>
  );
};

export default Rating;
