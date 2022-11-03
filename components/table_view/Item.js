import Link from "next/link";

export default function Item({ item, type }) {
  const columns = [
    {
      type: "people",
      id: item.id,
      col1: item.name,
      col2: item.gender,
      col3: item.birth_year,
      col4: item.height,
      col5: item.mass,
    },
    {
      type: "ships",
      id: item.id,
      col1: item.name,
      col2: item.model,
      col3: item.cargo_capacity,
      col4: item.max_atmosphering_speed,
      col5: item.length,
    },
    {
      type: "vehicles",
      id: item.id,
      col1: item.name,
      col2: item.model,
      col3: item.cargo_capacity,
      col4: item.max_atmosphering_speed,
      col5: item.length,
    },
    {
      type: "films",
      id: item.id,
      col1: item.title,
      col2: item.episode_id,
      col3: item.director,
      col4: item.producer,
      col5: item.release_date,
    },
    {
      type: "planets",
      id: item.id,
      col1: item.name,
      col2:
        item.terrain &&
        item.terrain.replace(/(^\w{1})|(\s+\w{1})/g, (letter) =>
          letter.toUpperCase()
        ),
      col3: item.population,
      col4: item.diameter,
      col5:
        item.climate &&
        item.climate.replace(/(^\w{1})|(\s+\w{1})/g, (letter) =>
          letter.toUpperCase()
        ),
    },
    {
      type: "species",
      id: item.id,
      col1: item.name,
      col2:
        item.classification &&
        item.classification[0].toUpperCase() + item.classification.slice(1),
      col3:
        item.language &&
        item.language[0].toUpperCase() + item.language.slice(1),
      col4: item.average_height,
      col5: item.average_lifespan,
    },
  ];

  return columns
    .filter((item) => {
      if (item.type === type) {
        return item;
      } else return;
    })
    .map((item) => {
      return (
        <tr key={item.col1}>
          <td>{item.id}</td>
          <td>{item.col1}</td>
          <td>{item.col2}</td>
          <td>{item.col3}</td>
          <td>{item.col4}</td>
          <td>{item.col5}</td>
          <td>
            <Link href={`/${type}/` + item.id}>Details</Link>
          </td>
        </tr>
      );
    });
}
