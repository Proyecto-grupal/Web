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
              <h1>Ingresar Sesion</h1>
              <h4>Podemos invitarte a tu correo un codigo de verificacion para iniciar sesion o puedes hacerlo con tu cuenta de Github</h4>
              <div className='m-2'><Button variant='outline-primary'>Inicial Sesion</Button></div>
              <div className='m-2'><Button variant='outline-warning'>Ingresar con Github</Button></div>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
