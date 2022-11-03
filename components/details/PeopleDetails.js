import React from "react";

export default function PeopleDetails({ data }) {
  return (
    <>
      <p>
        <span className="fw-bold fs-5">Name: </span>
        {data.name}
      </p>
      <p>
        <span className="fw-bold fs-5">Gender: </span>
        {data.gender}
      </p>
      <p>
        <span className="fw-bold fs-5">Height: </span>
        {data.height} cm
      </p>
      <p>
        <span className="fw-bold fs-5">Weight: </span>
        {data.mass} kg
      </p>
      <p>
        <span className="fw-bold fs-5">Birth Year: </span>
        {data.birth_year}
      </p>
      <p>
        <span className="fw-bold fs-5">Skin Color: </span>
        {data.skin_color}
      </p>
      <p>
        <span className="fw-bold fs-5">Hair Color: </span>
        {data.hair_color}
      </p>
      <p>
        <span className="fw-bold fs-5">Eye Color: </span>
        {data.eye_color}
      </p>
    </>
  );
}
