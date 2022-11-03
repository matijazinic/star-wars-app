import React from "react";
import { Row } from "react-bootstrap";
import CardItem from "./CardItem";

export default function CardItems({ currentItems, type }) {
  return (
    <>
      <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 ">
        {currentItems.map((item) => {
          return (
            <CardItem
              key={item.name ? item.name : item.title}
              item={item}
              type={type}
            />
          );
        })}
      </Row>
    </>
  );
}
