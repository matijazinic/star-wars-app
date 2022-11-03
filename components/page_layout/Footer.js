import Link from "next/link";
import React from "react";
import { Container } from "react-bootstrap";

function Footer() {
  return (
    <Container className="py-4 text-center">
      Created by{" "}
      <a
        href="https://github.com/matijazinic/"
        target="_blank"
        rel="noreferrer"
      >
        Matija Zinic
      </a>
      . If you want to learn more about this project, click{" "}
      <Link href="/about-project" passHref>
        <a>here</a>
      </Link>
      .
    </Container>
  );
}

export default Footer;
