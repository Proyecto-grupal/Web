import {
  Button,
  InputGroup,
  FormControl,
  Container,
  Col,
} from "react-bootstrap";
import { Style } from "./SearchBarStyle";

export const SearchBarView = () = {
  return (
    <Container>
      <Col sm={10} md={8} lg={6}>
        <InputGroup size="lg" style={Style}>
          <FormControl placeholder="Busca tu curso" />
          <Button variant="outline-success">Buscar</Button>
        </InputGroup>
      </Col>
    </Container>
  );
}
