import Head from "next/head";
import { Container, Row } from "react-bootstrap";
import HomeCards from "../components/home/Cards";
import logo from "../public/logo.svg";

export default function Home() {
  return (
    <>
      <Head>
        <title>Star Wars</title>
        <meta name="description" content="Star Wars Info App using SWAPI" />
        <link rel="icon" type="image/svg" href={logo.src} />
      </Head>
      <Container>
        <Row className="row-cols-1 row-cols-lg-2 pt-3 pb-5">
          <HomeCards />
        </Row>
      </Container>
    </>
  );
}
