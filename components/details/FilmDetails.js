import React from "react";

export default function FilmDetails({ data }) {
  return (
    <>
      <p>
        <span className="fw-bold fs-5">Movie title: </span>
        {data.title}
      </p>
      <p>
        <span className="fw-bold fs-5">Episode number: </span>
        {data.episode_id}
      </p>
      <p>
        <span className="fw-bold fs-5">Release date: </span>
        {data.release_date}
      </p>
      <p>
        <span className="fw-bold fs-5">Director: </span>
        {data.director}
      </p>
      <p>
        <span className="fw-bold fs-5">Producer(s): </span>
        {data.producer}
      </p>
      <p>
        <span className="fw-bold fs-5">Opening crawl: </span>
        <br />
        {data.opening_crawl}
      </p>
    </>
  );
}
