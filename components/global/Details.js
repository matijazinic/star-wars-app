import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import PeopleDetails from "../details/PeopleDetails";
import ShipDetails from "../details/ShipDetails";
import VehicleDetails from "../details/VehicleDetails";
import FilmDetails from "../details/FilmDetails";
import PlanetDetails from "../details/PlanetDetails";
import SpeciesDetails from "../details/SpeciesDetails";
import placeholder from "../../public/images/placeholder400.jpg";

export default function Details({ data, type }) {
  return (
    <>
      <Container>
        <Row>
          <Col className="position-relative col-12 col-lg-6">
            <Image
              src={placeholder.src}
              height={400}
              width={400}
              alt={`Image of ${data.name}`}
            />
            <p>
              No real image because of copyright reasons. This is a placeholder
              for layout purposes.
            </p>
          </Col>
          <Col className="col-12 col-lg-6 ps-5 py-3">
            {type === "people" ? (
              <PeopleDetails data={data} />
            ) : type === "vehicles" ? (
              <VehicleDetails data={data} />
            ) : type === "ships" ? (
              <ShipDetails data={data} />
            ) : type === "films" ? (
              <FilmDetails data={data} />
            ) : type === "planets" ? (
              <PlanetDetails data={data} />
            ) : (
              <SpeciesDetails data={data} />
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
}
