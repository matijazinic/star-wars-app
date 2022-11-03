import React from "react";

export default function TableHeader({ type }) {
  const headers = [
    {
      type: "people",
      col1: "Name",
      col2: "Gender",
      col3: "Birth Year",
      col4: "Height",
      col5: "Weight",
    },
    {
      type: "ships",
      col1: "Name",
      col2: "Model",
      col3: "Cargo Capacity",
      col4: "Max Speed",
      col5: "Length",
    },
    {
      type: "vehicles",
      col1: "Name",
      col2: "Model",
      col3: "Cargo Capacity",
      col4: "Max Speed",
      col5: "Length",
    },
    {
      type: "films",
      col1: "Title",
      col2: "Episode",
      col3: "Director",
      col4: "Producer(s)",
      col5: "Release Date",
    },
    {
      type: "planets",
      col1: "Name",
      col2: "Terrain(s)",
      col3: "Population",
      col4: "Diameter",
      col5: "Climate",
    },
    {
      type: "species",
      col1: "Type",
      col2: "Classification",
      col3: "Language",
      col4: "Average Height",
      col5: "Average Life Span",
    },
  ];

  return headers
    .filter((item) => {
      if (item.type === type) {
        return item;
      } else return;
    })
    .map((item) => {
      return (
        <thead key={item}>
          <tr>
            <th>#</th>
            <th>{item.col1}</th>
            <th>{item.col2}</th>
            <th>{item.col3}</th>
            <th>{item.col4}</th>
            <th>{item.col5}</th>
            <th></th>
          </tr>
        </thead>
      );
    });
}
