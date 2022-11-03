import TableHeader from "./TableHeader";
import Item from "./Item";

export default function Items({ currentItems, type }) {
  return (
    <>
      <TableHeader type={type} />
      <tbody>
        {currentItems &&
          currentItems.map((item) => (
            <Item key={item.name} item={item} type={type} />
          ))}
      </tbody>
    </>
  );
}
