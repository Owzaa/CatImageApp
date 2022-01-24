import Navbar from "../components/Navbar"
import { Card } from "react-bootstrap";
import { Button } from "@material-ui/core";

export default function favourites() {
  return <div>
    <Navbar />
    <h3 className="text-muted text-center">My Favourites</h3>

    <div>
      <Card border="warning" variant="dark" style={{ width: 'fill' }}>

        <Card.Body>
          <Card.Title className="text-muted text-center">Cats Favs</Card.Title>

          <Card.Img variant="top" src="" />

          <Button variant="contained">UNLIKE</Button>
        </Card.Body>
      </Card>
    </div>

  </div>;
}

