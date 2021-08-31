import {
  Container,
  Button,
  Col,
  Row
} from 'react-bootstrap'

import { Style } from './LoginStyle'

export const LoginView = () => {
  return (
    <div>
      <Container style={Style}>
        <Row>
          <Col>
            <h1>Aca va a ir una imagen</h1>
          </Col>
          <Col>
            <Row>
              <div className='m-2'><Button variant='outline-primary'>Inicial Sesion</Button></div>
              <div className='m-2'><Button variant='outline-warning'>Ingresar con Github</Button></div>

            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
