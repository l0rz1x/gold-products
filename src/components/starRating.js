import React from "react";
import { IoIosStar, IoIosStarHalf, IoIosStarOutline } from "react-icons/io";
const StarRating = ({ rating }) => {
  const totalStars = 5;
  const scaledRating = rating * totalStars;

  return (
    <div
      style={{
        display: "inline-block",
        width: "100%",
        height: "100%",
      }}
    >
      {[...Array(totalStars)].map((_, i) => {
        if (scaledRating >= i + 1) {
          return (
            <span key={i} style={{ fontSize: "20px", color: "#FFD700" }}>
              <IoIosStar />
            </span>
          );
        } else if (scaledRating > i && scaledRating < i + 1) {
          return (
            <span key={i} style={{ fontSize: "20px", color: "#FFD700" }}>
              <IoIosStarHalf />
            </span>
          );
        } else {
          return (
            <span key={i} style={{ fontSize: "20px", color: "#ccc" }}>
              <IoIosStarOutline />
            </span>
          );
        }
      })}
      <p
        style={{
          display: "inline-block",
          padding: "10px",
          margin: 0,
        }}
      >
        {scaledRating.toFixed(1)}/5
      </p>
    </div>
  );
};

export default StarRating;
