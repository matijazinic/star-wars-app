import Head from "next/head";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import logo from "../public/logo.svg";

export default function About() {
  return (
    <>
      <Head>
        <title>About the project - Star Wars</title>
        <meta name="description" content="Star Wars Info App using SWAPI" />
        <link rel="icon" type="image/svg" href={logo.src} />
      </Head>
      <Container>
        <Row>
          <Col className="d-flex justify-content-center align-items-center flex-column px-5 text-center">
            <h1 className="mb-5 | ff-sw">About this project</h1>
            <p className>
              First of all, let me quickly introduce myself. My name is Matija
              and I&#39;m a 25 year old living in Croatia. I have started coding
              in React a couple of months ago and this is my first bigger
              project being done completely on my own. So far, I have done a
              couple of projects from FrontEnd Mentor (which you can see on my
              github page linked in footer).
            </p>
            <p>
              Reason why I chose this particular API to create my solo project
              is very simple: I&#39;m a huge Star Wars fan. Unfortunately, I
              found out pretty quickly that the API is a bit outdated and that
              none of the newer movies and other things are included. That,
              however, wasn&#39;t that big of an issue since this is only a
              project to showcase React skills and not like a complete Wiki.
            </p>
            <p>
              Much bigger issue (in my opinion) was the lack of pictures. I
              understand that there are copyright issues involved, but that kind
              of almost put me away from finishing the project. I have added a
              couple of my own pictures (for the cards on the homepage), however
              I couldn&#39;t force myself to try and find a picture via Google
              for each character/ship/planet and anything else included in the
              project as that&#39;s over 150 items in total. Bandwidth ain&#39;t
              cheap!
            </p>
            <p>
              That meant that I had to resort to alternatives, so I decided to
              use placeholder images and I also created a table view for each of
              the different pages. Pretty neat in my opinion. However, I
              couldn&#39;t really find an alternative on each item&#39;s
              (character, ship etc.) page, so placeholders were my best bet.
              I&#39;m really not happy with how it looks as it would be much
              better if there are images of those items, but it is what it is.
              Maybe in the future!
            </p>
            <p>
              Time to finish up this quick about section. This is definitely the
              most fun project I&#39;ve made so far and the one I&#39;ve learned
              by far the most, as I had to use both my brain and Google to fix
              whatever issue I ran into. I also like to think that I have my
              code organized pretty neatly, but I will leave that to the experts
              who might end up checking the project. I also plan to expand very
              much on the project, adding a backend with registration/login
              form, adding favorites and anything else that comes to my mind in
              the future. Who knows, maybe I even add those missing images :D.
            </p>
            <p>
              Anyway, that&#39;s all from me. If anyone&#39;s actually reading
              this and you are interested in contacting me, you can click on my
              name in footer and you will be redirected to my GitHub page. You
              can then message me or add suggestions and anything else that
              comes to your mind. Have a great day!
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
}
