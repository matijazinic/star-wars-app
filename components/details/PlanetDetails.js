import React from "react";

export default function PlanetDetails({ data }) {
  return (
    <>
      <p>
        <span className="fw-bold fs-5">Name: </span>
        {data.name}
      </p>
      <p>
        <span className="fw-bold fs-5">Terrain: </span>
        {data.terrain.replace(/(^\w{1})|(\s+\w{1})/g, (letter) =>
          letter.toUpperCase()
        )}
      </p>
      <p>
        <span className="fw-bold fs-5">Climate: </span>
        {data.climate.replace(/(^\w{1})|(\s+\w{1})/g, (letter) =>
          letter.toUpperCase()
        )}
      </p>
      <p>
        <span className="fw-bold fs-5">Population: </span>
        {data.population} people
      </p>
      <p>
        <span className="fw-bold fs-5">Diameter: </span>
        {data.diameter} meters
      </p>
      <p>
        <span className="fw-bold fs-5">Gravity: </span>
        {data.gravity}
      </p>
    </>
  );
}
