import React from "react";
import Link from "next/link";
import { Button, Card, Col } from "react-bootstrap";
import placeholder from "../../public/images/placeholder.webp";

export default function CardItem({ item, type }) {
  return (
    <Col className="g-3">
      <Card>
        <Card.Img
          variant="top"
          src={placeholder.src}
          className="card-view-image"
        />
        <Card.Body>
          <Card.Title className="mb-3">
            {item.name ? item.name : item.title}
          </Card.Title>

          <Link href={`/${type}/` + item.id} passHref>
            <Button variant="primary">Details</Button>
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
}
