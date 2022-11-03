import React from "react";

export default function SpeciesDetails({ data }) {
  return (
    <>
      <p>
        <span className="fw-bold fs-5">Type: </span>
        {data.name}
      </p>
      <p>
        <span className="fw-bold fs-5">Classification: </span>
        {data.classification[0].toUpperCase() + data.classification.slice(1)}
      </p>
      <p>
        <span className="fw-bold fs-5">Designation: </span>
        {data.designation[0].toUpperCase() + data.designation.slice(1)}
      </p>
      <p>
        <span className="fw-bold fs-5">Average lifespan: </span>
        {data.average_lifespan[0].toUpperCase() +
          data.average_lifespan.slice(1)}{" "}
        years
      </p>
      <p>
        <span className="fw-bold fs-5">Language: </span>
        {data.language}
      </p>
      <p>
        <span className="fw-bold fs-5">Average height: </span>
        {data.average_height} cm
      </p>
      <p>
        <span className="fw-bold fs-5">Skin color(s): </span>
        {data.skin_colors.replace(/(^\w{1})|(\s+\w{1})/g, (letter) =>
          letter.toUpperCase()
        )}
      </p>
      <p>
        <span className="fw-bold fs-5">Hair color(s): </span>
        {data.hair_colors.replace(/(^\w{1})|(\s+\w{1})/g, (letter) =>
          letter.toUpperCase()
        )}
      </p>
      <p>
        <span className="fw-bold fs-5">Eye color(s): </span>
        {data.eye_colors.replace(/(^\w{1})|(\s+\w{1})/g, (letter) =>
          letter.toUpperCase()
        )}
      </p>
    </>
  );
}
