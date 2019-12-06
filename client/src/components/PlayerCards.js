import React from "react";

export const PlayerCards = props => {
  const { name, country, searches } = props.data;
  return (
    <div className="player" data-testid="card">
      <h3>{name}</h3>
      <p> {country} </p>
      <p> {searches} </p>
    </div>
  );
};
