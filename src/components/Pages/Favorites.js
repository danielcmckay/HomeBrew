import React from "react";
import "./Favorites.css";

const Favorites = () => {
  const favorites = [
    {
      name: "Great Northern",
      description: "A brewery",
      rating: 4.5,
    },
    {
      name: "Great Northern",
      description: "A brewery",
      rating: 4.5,
    },
    {
      name: "Great Northern",
      description: "A brewery",
      rating: 4.5,
    },
    {
      name: "Great Northern",
      description: "A brewery",
      rating: 4.5,
    },
  ];

  return (
    <div className="Favorites">
      <h2>Your saved breweries:</h2>
      <div className="FavoriteContainer">
        {favorites.map((b) => (
          <ul className="FavoriteItem">
            <li>{b.name}</li>
            <li>{b.description}</li>
            <li>{b.rating}</li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
