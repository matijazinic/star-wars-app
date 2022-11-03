import React from "react";

export default function PageTitle({ type }) {
  return (
    <h1 className="text-center | ff-sw">
      {type[0].toUpperCase() + type.slice(1)} in Star Wars!
    </h1>
  );
}
