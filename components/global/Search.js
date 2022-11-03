import React from "react";
import { Button, Col, FormControl, Row } from "react-bootstrap";

export default function Search({ search, setSearch, setCards }) {
  return (
    <>
      <Col className="col-12 col-lg-9 col-sm-8">
        <FormControl
          type="text"
          placeholder="Search by name/title..."
          onChange={(e) => setSearch(e.target.value)}
          className="mx-auto my-4"
          value={search}
        />
      </Col>
      <Col className="d-flex col-12 col-lg-3 col-sm-4">
        <Button
          className="ms-0 ms-sm-auto flex-grow-1"
          onClick={() => setCards((prev) => !prev)}
        >
          Toggle cards/table
        </Button>
      </Col>
    </>
  );
}
