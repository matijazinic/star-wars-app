import React from "react";

export default function VehicleDetails({ data }) {
  return (
    <>
      <p>
        <span className="fw-bold fs-5">Name: </span>
        {data.name}
      </p>
      <p>
        <span className="fw-bold fs-5">Model: </span>
        {data.model}
      </p>
      <p>
        <span className="fw-bold fs-5">Manufacturer: </span>
        {data.manufacturer}
      </p>
      <p>
        <span className="fw-bold fs-5">Vehicle class: </span>
        {data.vehicle_class[0].toUpperCase() + data.vehicle_class.slice(1)}
      </p>
      <p>
        <span className="fw-bold fs-5">Cargo capacity: </span>
        {data.cargo_capacity}
      </p>
      <p>
        <span className="fw-bold fs-5">Cost: </span>
        {data.cost_in_credits} credits
      </p>
      <p>
        <span className="fw-bold fs-5">Length: </span>
        {data.length} m
      </p>
      <p>
        <span className="fw-bold fs-5">Max speed: </span>
        {data.max_atmosphering_speed}
      </p>
      <p>
        <span className="fw-bold fs-5">Number of passenger seats: </span>
        {data.passengers}
      </p>
    </>
  );
}
