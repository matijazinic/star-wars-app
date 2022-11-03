import Link from "next/link";
import { Card, Col } from "react-bootstrap";

export default function HomeCard({ title, link, image_link }) {
  return (
    <Col className="my-3">
      <Link href={`/${link}`} passHref>
        <a>
          <Card className="bg-dark text-white | home-card">
            <Card.Img
              src={`/star-wars-app/images/home/${image_link}`}
              alt="Card image"
              className=" | home-card-image"
            />
            <Card.ImgOverlay className="d-flex align-items-center justify-content-center">
              <Card.Title className="px-3 py-2 rounded-3 | home-card-title ff-sw">
                {title}
              </Card.Title>
            </Card.ImgOverlay>
          </Card>
        </a>
      </Link>
    </Col>
  );
}
