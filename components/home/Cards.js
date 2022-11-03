import React from "react";
import HomeCard from "./Card";

export default function HomeCards() {
  const items = [
    { title: "people", image_link: "darth_vader.jpg" },
    { title: "ships", image_link: "death_star.webp" },
    { title: "vehicles", image_link: "tie_bomber.webp" },
    { title: "films", image_link: "sw_movie.jpeg" },
    { title: "planets", image_link: "teth_planet.webp" },
    { title: "species", image_link: "wookie.jpeg" },
  ];
  return (
    <>
      {items.map((item) => {
        return (
          <HomeCard
            key={item.title}
            title={item.title.toUpperCase()}
            link={item.title}
            image_link={item.image_link}
          />
        );
      })}
    </>
  );
}
